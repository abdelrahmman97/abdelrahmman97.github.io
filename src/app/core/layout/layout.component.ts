import { ChangeDetectionStrategy, Component, HostListener, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { routeTransitionAnimations } from './route-animations';

@Component( {
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.css',
	host: {},
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ RouterOutlet, HeaderComponent, FooterComponent, LoadingBarModule ],
	animations: [ routeTransitionAnimations ],
} )
export class LayoutComponent {
	scrollPosition = signal( 0 );
	headerScrollClass = computed( () => this.scrollPosition() > 0 );
	showScrollToTop = computed( () => this.scrollPosition() > 300 );

	@HostListener( 'window:scroll', [ '$event' ] )
	onWindowScroll(): void {
		this.scrollPosition.set( window.scrollY );
	}

	scrollToTop(): void {
		window.scrollTo( { top: 0, behavior: 'smooth' } );
	}

	prepareRoute( outlet: RouterOutlet ): string {
		return outlet?.activatedRouteData?.['animation'] ?? '';
	}
}
