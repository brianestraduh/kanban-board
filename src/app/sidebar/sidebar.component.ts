import { Component, inject } from '@angular/core';
import { ThemeService } from '../shared/services/theme.service';
import { BoardsComponent } from './boards/boards.component';
import { NgClass } from '@angular/common';
import { SidebarService } from '../shared/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [BoardsComponent, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  private themeService = inject(ThemeService);
  private sidebarService = inject(SidebarService);
  getThemeLogoSrc(): string {
    return this.themeService.isDarkTheme()
      ? '/assets/images/logo-light.svg'
      : '/assets/images/logo-dark.svg';
  }
  toggleTheme() {
    return this.themeService.toggleTheme();
  }
  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }
}
