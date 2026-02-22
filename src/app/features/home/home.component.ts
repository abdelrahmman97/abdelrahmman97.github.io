import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
} )
export class HomeComponent {
	yearsOfExperience = new Date().getFullYear() - 2024;
}
