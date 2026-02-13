import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import( './core/layout/layout.component' ).then( c => c.LayoutComponent ),
		children: [
			{
				path: '',
				loadComponent: () => import( './features/home/home.component' ).then( ( c ) => c.HomeComponent ),
			},
			{
				path: 'about',
				loadComponent: () => import( './features/about/about.component' ).then( ( c ) => c.AboutComponent ),
			},
			{
				path: 'blog',
				loadComponent: () => import( './features/blog/blog.component' ).then( ( c ) => c.BlogComponent ),
			},
			{
				path: 'projects',
				loadComponent: () => import( './features/projects/projects.component' ).then( ( c ) => c.ProjectsComponent ),
			},
			{
				path: 'contact',
				loadComponent: () => import( './features/contact/contact.component' ).then( ( c ) => c.ContactComponent ),
			},
		]
	},
	{
		path: '**',
		loadComponent: () => import( './../app/shared/components/not-found/not-found.component' ).then( c => c.NotFoundComponent )
	}
];
