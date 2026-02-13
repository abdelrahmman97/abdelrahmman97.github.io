import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import( './core/layout/layout.component' ).then( c => c.LayoutComponent ),
		children: [
			{
				path: '',
				title: 'Abdelrahman Mahmoud | Home',
				data: { animation: 'HomePage' },
				loadComponent: () => import( './features/home/home.component' ).then( ( c ) => c.HomeComponent ),
			},
			{
				path: 'about',
				title: 'About | Abdelrahman Mahmoud',
				data: { animation: 'AboutPage' },
				loadComponent: () => import( './features/about/about.component' ).then( ( c ) => c.AboutComponent ),
			},
			{
				path: 'blog',
				title: 'Blog | Abdelrahman Mahmoud',
				data: { animation: 'BlogPage' },
				loadComponent: () => import( './features/blog/blog.component' ).then( ( c ) => c.BlogComponent ),
			},
			{
				path: 'projects',
				title: 'Projects | Abdelrahman Mahmoud',
				data: { animation: 'ProjectsPage' },
				loadComponent: () => import( './features/projects/projects.component' ).then( ( c ) => c.ProjectsComponent ),
			},
			{
				path: 'contact',
				title: 'Contact | Abdelrahman Mahmoud',
				data: { animation: 'ContactPage' },
				loadComponent: () => import( './features/contact/contact.component' ).then( ( c ) => c.ContactComponent ),
			},
		]
	},
	{
		path: '**',
		title: '404 | Page Not Found',
		loadComponent: () => import( './../app/shared/components/not-found/not-found.component' ).then( c => c.NotFoundComponent )
	}
];
