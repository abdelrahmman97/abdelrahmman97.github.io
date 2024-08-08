import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimations } from '@angular/platform-browser/animations';
// import { httpInterceptor } from './core/interceptors/http.interceptor';

// export function HttpLoaderFactory( http: HttpClient ) {
// 	return new TranslateHttpLoader( http );
// }

// if ( environment.production ) {
// 	enableProdMode();
// }

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter( routes ),
		importProvidersFrom( HttpClientModule ),
		provideAnimations(),
		// importProvidersFrom(
		// 	TranslateModule.forRoot( {
		// 		loader: {
		// 			provide: TranslateLoader,
		// 			useFactory: HttpLoaderFactory,
		// 			deps: [ HttpClient ],
		// 		},
		// 	} )
		// ),
		// provideHttpClient( withInterceptors( [ httpInterceptor ] ) )
	]
};
