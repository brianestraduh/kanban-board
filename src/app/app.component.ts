import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { ButtonComponent } from './shared/components/button/button.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { InputComponent } from './shared/components/input/input.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonComponent,
    CheckboxComponent,
    InputComponent,
    DropdownComponent,
  ],
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
}
