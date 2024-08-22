import { CardModel } from '../app/models/cardModel';

export const environment: CardModel[] = [
	{
		banner: 'assets/bt-1.jpg',
		platforms: ['PS4'],
		price: 59.99,
		gameType: 'Digital'
	},
	{
		banner: 'assets/bt-4.jpg',
		platforms: ['PS4', 'PS3', 'PS Vita'],
		price: 0,
		gameType: 'Full'
	},
	{
		banner: 'assets/bt-5.jpg',
		platforms: ['PS5', 'PS4'],
		price: 14.44,
		gameType: 'Digital'
	},
	{
		banner: 'assets/ac-cover.jpg',
		platforms: ['PS3'],
		price: 13.33,
		gameType: 'Digital'
	},
	{
		banner: 'assets/bt-bad-company-2.jpg',
		platforms: ['PS5', ' PSP'],
		price: 45.43,
		gameType: 'Full'
	},
	{
		banner: 'assets/bt-hardline.jpg',
		platforms: ['PS4', 'PS3'],
		price: 0.0,
		gameType: 'Full'
	},
];
