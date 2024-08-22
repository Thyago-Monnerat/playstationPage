import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CardModel } from '../models/cardModel';

@Injectable({
	providedIn: 'root',
})
export class CardsService {
	constructor() {}

	getCards(): CardModel[] {
		return environment;
	}
}
