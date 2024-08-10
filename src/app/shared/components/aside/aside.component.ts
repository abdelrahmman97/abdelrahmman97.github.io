import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
	selector: 'app-aside',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './aside.component.html',
	styleUrl: './aside.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class AsideComponent { }
