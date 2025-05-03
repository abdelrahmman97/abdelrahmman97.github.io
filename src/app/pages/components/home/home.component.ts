import { Component } from '@angular/core';
import { HeroComponent } from "../partial/hero/hero.component";
import { GameComponent } from "../partial/game/game.component";

@Component( {
	selector: 'app-home',
	standalone: true,
	imports: [ HeroComponent, GameComponent ],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
} )
export class HomeComponent {

}
