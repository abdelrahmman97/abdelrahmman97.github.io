import { Injectable } from '@angular/core';

@Injectable( {
	providedIn: 'root'
} )
export class StorageService {

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

}
