import { Component, inject, OnInit, signal } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { ButtonComponent } from './shared/components/button/button.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, SidebarComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private themeService = inject(ThemeService);
  options: string[] = ['To Do', 'Doing', 'Done'];

  ngOnInit(): void {
    //Ensure theme is applied on initialization
    this.themeService.loadTheme();
  }
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
  isSidebarOpen = signal<boolean>(false);
  toggleSideBar(): void {
    this.isSidebarOpen.set(!this.isSidebarOpen());
  }
}
