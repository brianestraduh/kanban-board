import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkTheme: string = 'dark';
  private lightTheme: string = 'light';
  private currentTheme = signal<string>(this.lightTheme);
  constructor() {
    this.loadTheme();
  }
  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme.set(savedTheme);
    }
    this.applyTheme();
  }
  private applyTheme(): void {
    if (this.currentTheme() === this.darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    this.saveTheme();
  }
  private saveTheme(): void {
    localStorage.setItem('theme', this.currentTheme());
  }
  isDarkTheme = computed(() => this.currentTheme() === 'dark');

  toggleTheme() {
    this.currentTheme.set(
      this.currentTheme() === this.darkTheme ? this.lightTheme : this.darkTheme,
    );
    this.applyTheme();
  }
}
