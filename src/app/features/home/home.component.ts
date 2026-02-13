import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	imports: [],
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class HomeComponent {}
