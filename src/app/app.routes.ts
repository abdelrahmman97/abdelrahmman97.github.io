import { pagesRoutes } from './pages/pages.routes';
import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: '',
		children: [
			...pagesRoutes
		]
	}
];
