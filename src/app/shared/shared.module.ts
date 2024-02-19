import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';



@NgModule( {
    declarations: [
        UnderConstructionComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UnderConstructionComponent,
        HeaderComponent,
        FooterComponent
    ]
} )
export class SharedModule { }
