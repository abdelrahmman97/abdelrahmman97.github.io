import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SharedModule } from '../shared/shared.module';


@NgModule( {
    declarations: [
        HomeComponent,
        ProjectsComponent
    ],
    imports: [
        CommonModule,
        FeaturesRoutingModule,
        SharedModule
    ]
} )
export class FeaturesModule { }
