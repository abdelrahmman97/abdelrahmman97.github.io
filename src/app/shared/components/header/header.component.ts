import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UnderscoreDashPipe } from '../../pipes/underscore-dash.pipe';
import { RouterModule } from '@angular/router';


interface NavLinks {
	title: string;
	router?: string
}

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CommonModule,
		RouterModule,
		UnderscoreDashPipe
	],
} )
export class HeaderComponent implements OnInit {

	navLinkes: NavLinks[] = [];
	smallScreenMenu: NavLinks[] = [];
	isDarkActive: boolean = false;
	isMenuActive: boolean = false;

	constructor() { }

	ngOnInit(): void {
		this.toggleTheme();

		this.navLinkes = [
			{
				title: 'hello',
				router: ''
			},
			{
				title: 'about me',
				router: '/about-me'
			},
			{
				title: 'projects',
				router: '/projects'
			},
		]

		this.smallScreenMenu = [
			{
				title: 'hello',
				router: ''
			},
			{
				title: 'about me',
				router: '/about-me'
			},
			{
				title: 'projects',
				router: '/projects'
			},
			{
				title: 'contact me',
				router: '/contact'
			},
		]
	}

	toggleTheme() {
		this.isDarkActive = !this.isDarkActive;
		document.body.classList.toggle( 'dark' );
	}

	toggleMenu() {
		this.isMenuActive = !this.isMenuActive;
	}

}
