import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CardsComponent } from './cards/cards.component';

@Component({
  imports: [CommonModule, CardsComponent],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'four-card-feature-section';
}
