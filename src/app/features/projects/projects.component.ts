import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { Project, Tags } from 'src/app/shared/models/projects.model';
import { forkJoin } from 'rxjs';

@Component( {
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
} )
export class ProjectsComponent implements OnInit {
	private _projectsService = inject( ProjectsService );

	projects = signal<Project[]>( [] );
	tags = signal<Tags[]>( [] );
	selectedTagId = signal<number>( 0 );
	isLoading = signal( true );

	filteredProjects = computed( () => {
		const tagId = this.selectedTagId();
		if ( tagId === 0 ) {
			return this.projects();
		}
		return this.projects().filter( ( project ) => project.tags.includes( tagId ) );
	} );

	ngOnInit(): void {
		forkJoin( {
			tags: this._projectsService.getTags(),
			projects: this._projectsService.getProjects(),
		} ).subscribe( {
			next: ( data ) => {
				this.tags.set( data.tags.tags );
				this.projects.set( data.projects.projects );
				this.isLoading.set( false );
			},
			error: () => {
				this.isLoading.set( false );
			},
		} );
	}

	selectTag( tagId: number ): void {
		this.selectedTagId.set( tagId );
	}
}
