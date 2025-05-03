import { Component } from '@angular/core';
import { MainLayoutComponent } from './pages/components/layout/main-layout/main-layout.component';
import { UnderConstructionComponent } from './shared/components/under-construction/under-construction.component';
import { environment } from 'src/environments/environments';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	standalone: true,
	imports: [
		UnderConstructionComponent,
		MainLayoutComponent
	]
} )
export class AppComponent {
	title = 'Abdelrahman Mahmoud';

	isUnderConstruction: boolean = true;

	constructor () {
		this.isUnderConstruction = environment.UnderConstruction ? true : false;
	}
}
