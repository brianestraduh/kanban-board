import { Component, inject } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private themeService = inject(ThemeService);
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  title = 'kanban-board';
}
