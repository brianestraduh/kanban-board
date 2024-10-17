import { Component, inject } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { ButtonComponent } from './shared/components/button/button.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, CheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private themeService = inject(ThemeService);
}
