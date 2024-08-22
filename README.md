![Angular Icon](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/200px-Angular_full_color_logo.svg.png) 

# ✅Página feita com AngularJs + TypeScript para um desafio da DIO

## O projeto era recriar uma página inspirada na Playstation Store
![Imagem do desafio](https://apple-cheek-322.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3e3b6fd9-f9ca-41ff-8658-a1129517bd85%2FUntitled.png?table=block&id=56c52a6d-8a93-43d2-b807-33e827b137f9&spaceId=b03402d7-e4ad-494d-8f63-2a97ae2d82c4&width=2000&userId=&cache=v2)

⚙ Elaborei um sistema de Services para receber os valores. Como o projeto não é dedicado a criações de APIs, utilizei dados mockados no environment.ts para simular um 'get'. Embora o environment, geralmente, armazene URLs, quis deixar os dados dentro dele apenas para simulação, o service.js acaba apenas retornando o environment, sem qualquer manipulação.

👩‍💻Essa simulação se dá por:  


Arquivo *environment.development.ts:*
``` 
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

```

Arquivo *cards.service.js:*
```import { Injectable } from '@angular/core';
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
```
#

🚷Nesse projeto, não foram utilizados mecanismos de rotas, apenas uma SPA estática.

O desafio consistia em absorver uma visão atômica dos elementos em um design, e passar isso para o Angular para o aproveitamento do sistema de componentes.
#
*Este projeto foi feito utilizando o padrão modular, ao invés do padrão Standalone da versão 17+*
#

Qualquer coisa, entre em contato comigo via [LinkedIn](https://www.linkedin.com/in/thyago-monnerat/).
###### # Abraços 🖖


