import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../shared/components/button/button.component';
import { ThemeService } from '../shared/services/theme.service';
import { NgClass } from '@angular/common';
import { SidebarService } from '../shared/services/sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private themeService = inject(ThemeService);
  private sideBarService = inject(SidebarService);
  getThemeLogoSrc(): string {
    return this.themeService.isDarkTheme()
      ? '/assets/images/logo-light.svg'
      : '/assets/images/logo-dark.svg';
  }
  toggleDarkTheme() {
    this.themeService.toggleTheme();
  }
  sidebarStatus(): boolean {
    return this.sideBarService.sideBarOpen;
  }
}
