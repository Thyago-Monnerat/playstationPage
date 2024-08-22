import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-is-exclusive',
	templateUrl: './is-exclusive.component.html',
	styleUrl: './is-exclusive.component.css',
})
export class IsExclusiveComponent {
	@Input()
	platformsLength: number = 0;
}
