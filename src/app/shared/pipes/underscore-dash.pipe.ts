import { Pipe, type PipeTransform } from '@angular/core';

@Pipe( {
	name: 'addUnderscoreAndDash',
	standalone: true,
} )
export class UnderscoreDashPipe implements PipeTransform {

	transform( value: string, addUnderscore: boolean = true ): string {
		if ( !value ) return value;
		const strValue = value.toLowerCase();
		const transformedString = strValue.replace( /\s+/g, '-' );
		return addUnderscore ? '_' + transformedString : transformedString;
	}

}
