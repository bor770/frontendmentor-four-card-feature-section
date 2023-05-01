import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Card } from './card/card.model';
import { CardComponent } from './card/card.component';

@Component({
  imports: [CommonModule, CardComponent],
  selector: 'app-cards',
  standalone: true,
  styleUrls: ['./cards.component.css'],
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  cards: Card[] = [
    {
      color: `red`,
      order: 1,
      subtitle: `Scans our talent network to create the optimal team for your project`,
      title: `Team Builder`,
    },
    {
      color: `cyan`,
      order: 0,
      subtitle: `Monitors activity to identify project roadblocks`,
      title: `Supervisor`,
    },
    {
      color: `orange`,
      order: 2,
      subtitle: `Regularly evaluates our talent to ensure quality`,
      title: `Karma`,
    },
    {
      color: `blue`,
      order: 3,
      subtitle: `Uses data from past projects to provide better delivery estimates`,
      title: `Calculator`,
    },
  ];
}
