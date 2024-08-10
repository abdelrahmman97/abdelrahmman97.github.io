import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component( {
	selector: 'app-latest-projects',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './latest-projects.component.html',
	styleUrl: './latest-projects.component.css',
} )
export class LatestProjectsComponent { }
