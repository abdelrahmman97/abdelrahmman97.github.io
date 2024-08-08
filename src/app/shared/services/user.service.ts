import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../../modules/auth/models/api-response.model';
import { UserUpdateModel } from '../../modules/auth/models/user.model';

@Injectable( {
	providedIn: 'root'
} )
export class UserService {

	API = environment.API;

	constructor (
		private _http: HttpClient,
		private _storageService: StorageService
	) { }

	getUserFromLocaleStorage() {
		return this._storageService.get( 'MatjarToken' );
	}

	getUser(): Observable<ApiResponseModel> {
		return this._http.get<ApiResponseModel>( `${ this.API }/user/get` );
	}

	update( user: UserUpdateModel ): Observable<ApiResponseModel> {
		return this._http.put<ApiResponseModel>( `${ this.API }/user/update`, user );
	}
}
