import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { MouseCursorGradientTrackingComponent } from './components/mouse-cursor-gradient-tracking/mouse-cursor-gradient-tracking.component';



@NgModule( {
    declarations: [
        UnderConstructionComponent,
        HeaderComponent,
        FooterComponent,
        MouseCursorGradientTrackingComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UnderConstructionComponent,
        HeaderComponent,
        FooterComponent,
        MouseCursorGradientTrackingComponent
    ]
} )
export class SharedModule { }
