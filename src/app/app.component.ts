import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UnderConstructionComponent } from './shared/components/under-construction/under-construction.component';
import { environment } from 'src/environments/environments';
import { RouterOutlet } from '@angular/router';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ UnderConstructionComponent, RouterOutlet ],
} )
export class AppComponent {
	title = 'Abdelrahman Mahmoud';

	isUnderConstruction: boolean = true;

	constructor() {
		this.isUnderConstruction = environment.underConstruction ? true : false;
	}
}
