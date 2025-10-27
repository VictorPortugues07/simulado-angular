import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() nome!: string;
  @Input() nomeCurto!: string;
  @Input() idade!: number;
  @Input() posicao!: string;
  @Input() numero!: number;
  @Input() imagem!: string;
}
