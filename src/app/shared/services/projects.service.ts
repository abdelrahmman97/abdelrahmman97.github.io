import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Project, Tags } from '../models/projects.model';
import { Observable } from 'rxjs';

@Injectable( {
	providedIn: 'root',
} )
export class ProjectsService {
	private _http = inject( HttpClient );
	getTags(): Observable<{ tags: Tags[] }> {
		return this._http.get<{ tags: Tags[] }>( '/assets/data/tags.json' );
	}

	getProjects(): Observable<{ projects: Project[]; }> {
		return this._http.get<{ projects: Project[] }>( '/assets/data/projects.json' );
	}
}
