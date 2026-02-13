import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
} )
export class ProjectsComponent { }
