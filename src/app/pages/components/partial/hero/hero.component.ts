import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
} )
export class HeroComponent {

}
