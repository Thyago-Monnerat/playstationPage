import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../models/cardModel';
import { CardsService } from '../../services/cards.service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
	cards: CardModel[] = [];

	constructor(private cardService: CardsService) {}

	ngOnInit() {
		this.cards = this.cardService.getCards();
	}
}
