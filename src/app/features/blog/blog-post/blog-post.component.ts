import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from 'src/app/shared/services/blog.service';
import { SafeHtmlPipe } from 'src/app/shared/pipes/safe-html-pipe.pipe';

@Component( {
	selector: 'app-blog-post',
	templateUrl: './blog-post.component.html',
	styleUrl: './blog-post.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ SafeHtmlPipe, RouterLink ],
} )
export class BlogPostComponent implements OnInit {
	private _route = inject( ActivatedRoute );
	private _blogService = inject( BlogService );

	private _slug = this._route.snapshot.paramMap.get( 'slug' ) ?? '';

	post = computed( () => this._blogService.getPostBySlug( this._slug ) );
	isLoading = computed( () => this._blogService.loading() );

	ngOnInit(): void {
		this._blogService.loadPosts();
	}
}
