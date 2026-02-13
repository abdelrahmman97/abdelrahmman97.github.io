import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BlogPost } from '../models/blog.model';
import { Observable } from 'rxjs';

@Injectable( {
	providedIn: 'root',
} )
export class BlogService {
	private _http = inject( HttpClient );

	getPosts(): Observable<{ posts: BlogPost[]; }> {
		return this._http.get<{ posts: BlogPost[] }>( '/assets/data/blog-posts.json' );
	}
}
