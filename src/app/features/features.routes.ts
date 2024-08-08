import { Routes } from "@angular/router";

const featuresRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import( './components/under-construction/under-construction.component' ).then( m => m.UnderConstructionComponent )
	}
];
