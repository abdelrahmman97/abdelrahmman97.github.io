import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { provideHighlightOptions } from 'ngx-highlightjs';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(
			routes,
			withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
		),
		provideHttpClient(withInterceptorsFromDi()),
		provideAnimations(),
		importProvidersFrom([LoadingBarModule, LoadingBarRouterModule]),
		provideHighlightOptions({
			coreLibraryLoader: () => import('highlight.js/lib/core'),
			languages: {
				javascript: () => import('highlight.js/lib/languages/javascript'),
			},
		}),
	],
};
