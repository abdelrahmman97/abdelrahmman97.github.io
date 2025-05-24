import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from "../partial/hero/hero.component";
import { GameComponent } from "../partial/game/game.component";

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		HeroComponent,
		GameComponent
	],
} )
export class HomeComponent {

}
