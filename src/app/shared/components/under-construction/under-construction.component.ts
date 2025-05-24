import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
	selector: 'app-under-construction',
	templateUrl: './under-construction.component.html',
	styleUrl: './under-construction.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class UnderConstructionComponent { }
