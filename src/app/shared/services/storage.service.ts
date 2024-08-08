import { Injectable } from '@angular/core';

@Injectable( {
	providedIn: 'root'
} )
export class StorageService {

	constructor () { }

	remove( key: string ): void {
		localStorage.removeItem( key );
	}

	set( key: string, item: any ): void {
		localStorage.setItem( key, JSON.stringify( item ) );
	}

	get( key: string ): any {
		const item = localStorage.getItem( key );
		if ( item ) {
			return JSON.parse( item );
		}
		return undefined;
	}

	isExpired( item: any ) {
		console.log( JSON.parse( atob( item.split( '.' )[ 1 ] ) ) );
		const expiry = ( JSON.parse( atob( item.split( '.' )[ 1 ] ) ) ).exp;
		return expiry * 1000 < Date.now();
	}

	// private isExpired( obj: any ) {
	// 	const token = this.get()?.token;
	// 	if ( token ) {
	// 		const expiry = ( JSON.parse( atob( token.split( '.' )[ 1 ] ) ) ).exp;
	// 		return expiry * 1000 > Date.now();
	// 	}
	// 	return false;
	// }
}
