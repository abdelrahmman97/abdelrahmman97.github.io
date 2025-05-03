import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import( './components/home/home.component' ).then( m => m.HomeComponent )
	},
	{
		path: 'about-me',
		loadComponent: () => import( './components/about-me/about-me.component' ).then( m => m.AboutMeComponent )
	},
	{
		path: 'projects',
		loadComponent: () => import( './components/projects/projects.component' ).then( m => m.ProjectsComponent )
	},
	{
		path: 'contact',
		loadComponent: () => import( './components/contact-me/contact-me.component' ).then( m => m.ContactMeComponent )
	},
]
