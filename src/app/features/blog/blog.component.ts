import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BlogService } from 'src/app/shared/services/blog.service';
import { BlogPost } from 'src/app/shared/models/blog.model';

@Component( {
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrl: './blog.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ DatePipe ],
} )
export class BlogComponent implements OnInit {
	private _blogService = inject( BlogService );

	posts = signal<BlogPost[]>( [] );
	isLoading = signal( true );

	ngOnInit(): void {
		this._blogService.getPosts().subscribe( {
			next: ( data ) => {
				this.posts.set( data.posts );
				this.isLoading.set( false );
			},
			error: () => {
				this.isLoading.set( false );
			},
		} );
	}
}
