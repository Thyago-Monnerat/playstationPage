import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-footer',
	templateUrl: './card-footer.component.html',
	styleUrl: './card-footer.component.css',
})
export class CardFooterComponent implements OnInit {
	isPriceless: boolean;
	@Input()
	platforms: string[];
	@Input()
	price: number;
	@Input()
	gameType: string;

	constructor() {
		this.isPriceless = false;
		this.platforms = [];
		this.price = 0;
		this.gameType = '';
	}

	ngOnInit(): void {
		this.isPriceless = this.price == 0.0 ? true : false;
	}
}
