import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable( {
	providedIn: 'root'
} )
export class ProjectsService {

	constructor(
		private _http: HttpClient
	) { }

	getTags() {
		return this._http.get<any>( '/assets/data/tags.json' );
	}

	getProjects() {
		return this._http.get<any>( '/assets/data/projects.json' );
	}

}
