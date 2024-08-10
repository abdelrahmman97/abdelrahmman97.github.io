import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component( {
	selector: 'app-tools',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './tools.component.html',
	styleUrl: './tools.component.css',
} )
export class ToolsComponent { }
