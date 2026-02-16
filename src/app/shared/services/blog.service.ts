import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { BlogPost } from '../models/blog.model';

@Injectable( {
	providedIn: 'root',
} )
export class BlogService {
	private _http = inject( HttpClient );

	private _posts = signal<BlogPost[]>( [] );
	private _loaded = signal( false );
	private _loading = signal( false );

	posts = computed( () => this._posts() );
	loaded = computed( () => this._loaded() );
	loading = computed( () => this._loading() );

	loadPosts(): void {
		if ( this._loaded() || this._loading() ) return;

		this._loading.set( true );
		this._http.get<{ posts: BlogPost[] }>( '/assets/data/blog-posts.json' ).subscribe( {
			next: ( data ) => {
				this._posts.set( data.posts );
				this._loaded.set( true );
				this._loading.set( false );
			},
			error: () => {
				this._loading.set( false );
			},
		} );
	}

	getPostBySlug( slug: string ): BlogPost | undefined {
		return this._posts().find( ( p ) => p.slug === slug );
	}
}
