import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Card } from './card.model';

@Component({
  imports: [CommonModule, MatCardModule],
  selector: 'app-card',
  standalone: true,
  styleUrls: ['./card.component.css'],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() cardParams: Card;
}
