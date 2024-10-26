import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../shared/components/button/button.component';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private themeService = inject(ThemeService);
  getThemeLogoSrc(): string {
    return this.themeService.isDarkTheme()
      ? '/assets/images/logo-light.svg'
      : '/assets/images/logo-dark.svg';
  }
  toggleDarkTheme() {
    this.themeService.toggleTheme();
  }
}
