import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component( {
    selector: 'mouse-cursor-gradient-tracking',
    templateUrl: './mouse-cursor-gradient-tracking.component.html',
    styleUrl: './mouse-cursor-gradient-tracking.component.css'
} )
export class MouseCursorGradientTrackingComponent {

    constructor ( private renderer: Renderer2, private elementRef: ElementRef ) { }

    ngOnInit (): void {
        this.setupMouseMoveListener();
    }

    private setupMouseMoveListener (): void {
        this.renderer.listen( window, 'mousemove', ( event ) => {
            const cursorWrapper = this.elementRef.nativeElement.querySelector( '.cursor-wrapper' );
            const { clientX, clientY } = event;
            this.renderer.setStyle( cursorWrapper, 'transform', `translate3d(${ clientX }px, ${ clientY }px, 0)` );
        } );
    }

}
