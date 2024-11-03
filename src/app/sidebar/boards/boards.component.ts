import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NgClass],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css',
})
export class BoardsComponent {
  fakeData: string[] = ['Platform Launch', 'Marketing Plan', 'Roadmap'];
  selectedBoard = signal(this.fakeData[0]);
}
