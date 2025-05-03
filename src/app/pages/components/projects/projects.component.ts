import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project, Tags } from '../../models/projects.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UnderscoreDashPipe } from 'src/app/shared/pipes/underscore-dash.pipe';

@Component( {
	selector: 'app-projects',
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		UnderscoreDashPipe
	],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.css'
} )
export class ProjectsComponent implements OnInit {
	tags: Tags[] = [];
	projects: Project[] = [];
	searchedProjects: Project[] = [];
	selectedTags: Tags[] = [];
	isTagsOpened: boolean = true;
	isTagsLoading: boolean = true;
	isProjectsLoading: boolean = true;
	tagsPlaceholder = [ 1, 2, 3, 4, 5 ];
	ProjectsPlaceholder = [ 1, 2, 3, 4, 5, 6 ];

	constructor(
		private _projService: ProjectsService
	) { }

	ngOnInit(): void {

		// const tempImages = [
		// 	'https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		// 	'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		// 	'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		// ]

		this.tags = [
			{
				"id": 0,
				"title": "All",
				"icon": "",
				"selected": false
			},
			{
				"id": 1,
				"title": "HTML",
				"icon": "ri-html5-fill",
				"selected": false
			},
			{
				"id": 2,
				"title": "CSS",
				"icon": "ri-css3-fill",
				"selected": false
			},
			{
				"id": 3,
				"title": "Angular",
				"icon": "ri-angularjs-fill",
				"selected": false
			},
			{
				"id": 4,
				"title": "TaillwindCss",
				"icon": "ri-tailwind-css-fill",
				"selected": false
			}
		]

		this.projects = [
			{
				"id": 0,
				"title": "ui animations",
				"description": "Duis aute irure dolor in velit esse cillum dolore.",
				"githubLink": "",
				"image": "https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"liveLink": "",
				"tags": [
					0,
					2,
					4
				]
			},
			{
				"id": 1,
				"title": "tetris game",
				"description": "Consectetur fuga veritatis eum facilis voluptatum.",
				"githubLink": "",
				"image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"liveLink": "",
				"tags": [
					0,
					1,
					3
				]
			},
			{
				"id": 2,
				"title": "ethereum",
				"description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
				"githubLink": "",
				"image": "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"liveLink": "",
				"tags": [
					0,
					2,
					4
				]
			},
			{
				"id": 3,
				"title": "tetris game",
				"description": "Consectetur fuga veritatis eum facilis voluptatum.",
				"githubLink": "",
				"image": "https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"liveLink": "",
				"tags": [
					0,
					1,
					3
				]
			},
			{
				"id": 4,
				"title": "ethereum",
				"description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
				"githubLink": "",
				"image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"liveLink": "",
				"tags": [
					0,
					1,
					3
				]
			}
		]

		this.getTags();

	}

	getTags() {
		this.isTagsLoading = true;
		this._projService.getTags().subscribe( {
			next: ( res ) => {
				this.tags = ( res.tags ) as Tags[];
				this.isTagsLoading = false;
				this.getProjects();
			},
			error: ( error ) => {
				console.error( error );
			}
		} )
	}

	getProjects() {
		this.isProjectsLoading = true;
		this._projService.getProjects().subscribe( {
			next: ( res ) => {
				this.projects = ( res.projects ) as Project[];
				this.searchedProjects = this.projects;
				this.onTagSelected( this.tags[ 0 ].id );
				this.isProjectsLoading = false;
			},
			error: ( error ) => {
				console.error( error );
			}
		} )
	}

	onTagSelected( id: number ) {
		const tagIndex = this.tags.findIndex( tag => tag.id == id );

		if ( tagIndex == 0 ) {
			this.tags.forEach( tag => {
				tag.selected = false;
			} );

			this.tags[ 0 ].selected = true;

			this.selectedTags = [ this.tags[ 0 ] ];

			this.searchedProjects = this.projects.filter( project => {
				return project.tags.some( id => id == this.tags[ 0 ].id );
			} )
		}
		else {
			this.tags[ 0 ].selected = false;
			this.tags[ tagIndex ].selected = !this.tags[ tagIndex ].selected;

			this.selectedTags = this.tags.filter( tag => tag.selected == true );

			const selectedTagsIds = this.selectedTags.map( tag => tag.id );

			this.searchedProjects = this.projects.filter( project => {
				return selectedTagsIds.some( id => project.tags.includes( id ) );
			} );
		}
	}

	clearSelectedTags() {
		this.selectedTags = [];
		this.searchedProjects = [];
		this.tags.forEach( tag => tag.selected = false );
	}
}
