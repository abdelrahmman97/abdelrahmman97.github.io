import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		RouterModule
	],
} )
export class HeaderComponent {

	private _themeService = inject( ThemeService );
	isDarkThemeActive = computed( () => this._themeService.currentTheme )

	toggleTheme(): void {
		this._themeService.toggleTheme();
	}

}
