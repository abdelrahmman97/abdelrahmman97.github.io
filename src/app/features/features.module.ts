import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';


@NgModule( {
    declarations: [
        UnderConstructionComponent
    ],
    imports: [
        CommonModule,
        FeaturesRoutingModule
    ]
} )
export class FeaturesModule { }
