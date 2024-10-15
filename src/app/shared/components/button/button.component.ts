import { NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() buttonType!:
    | 'primary-l'
    | 'primary-sm'
    | 'secondary'
    | 'destructive';

  @Input() text!: string;
}
