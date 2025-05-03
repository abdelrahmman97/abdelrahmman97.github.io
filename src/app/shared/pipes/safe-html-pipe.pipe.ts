import { inject, Pipe, type PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe( {
	name: 'appSafeHtml',
	standalone: true,
} )
export class SafeHtmlPipe implements PipeTransform {

	_sanitizer: DomSanitizer = inject( DomSanitizer );
	transform( value: unknown, ...args: unknown[] ): unknown {
		return this._sanitizer.bypassSecurityTrustHtml( value as string );
	}

}
