import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import( './components/landing/landing.component' ).then( m => m.LandingComponent )
	}
]
