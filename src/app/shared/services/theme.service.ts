import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable( {
	providedIn: 'root'
} )
export class ThemeService {
	private readonly THEME_KEY = 'theme';
	private readonly DARK_THEME = 'dark';
	private readonly LIGHT_THEME = 'light';

	private _currentTheme = signal( this.getStoredTheme() );
	currentTheme = computed( () => this._currentTheme() );

	constructor() {
		this.applyTheme( this.getStoredTheme() );
	}

	private getStoredTheme(): string {
		return localStorage.getItem( this.THEME_KEY ) || this.LIGHT_THEME;
	}

	private setStoredTheme( theme: string ): void {
		localStorage.setItem( this.THEME_KEY, theme );
	}

	private applyTheme( theme: string ): void {
		document.body.classList.remove( this.DARK_THEME, this.LIGHT_THEME );
		document.body.classList.add( theme );
	}

	setTheme( theme: 'dark' | 'light' ): void {
		const newTheme = theme === 'dark' ? this.DARK_THEME : this.LIGHT_THEME;
		this._currentTheme.set( theme )
		this.setStoredTheme( newTheme );
		this.applyTheme( newTheme );
	}

	toggleTheme(): void {
		const newTheme = this._currentTheme() === this.DARK_THEME ? this.LIGHT_THEME : this.DARK_THEME;
		this.setTheme( newTheme === this.DARK_THEME ? 'dark' : 'light' );
	}

}
