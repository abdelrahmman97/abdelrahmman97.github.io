import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	imports: [],
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class HomeComponent {
	lastScrollTop = 0;

	onScroll( event: Event ): void {
		const scrollTop = window.scrollY;

		console.log( event, this.lastScrollTop )
		if ( scrollTop > this.lastScrollTop ) {
			// Scrolling down
			// header.classList.add( "opacity-0", "pointer-events-none" );
		} else {
			// Scrolling up
			// header.classList.remove( "opacity-0", "pointer-events-none" );
		}

		this.lastScrollTop = scrollTop;
	}
}
