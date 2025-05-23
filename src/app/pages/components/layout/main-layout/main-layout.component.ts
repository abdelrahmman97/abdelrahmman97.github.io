import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { LoadingBarModule } from '@ngx-loading-bar/core';

@Component( {
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrl: './main-layout.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		RouterOutlet,
		CommonModule,
		HeaderComponent,
		FooterComponent,
		LoadingBarModule
	],
} )
export class MainLayoutComponent { }
