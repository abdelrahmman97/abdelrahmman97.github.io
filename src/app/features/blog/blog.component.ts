import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component( {
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrl: './blog.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ DatePipe, RouterLink ],
} )
export class BlogComponent implements OnInit {
	private _blogService = inject( BlogService );

	posts = computed( () => this._blogService.posts() );
	isLoading = computed( () => this._blogService.loading() );

	ngOnInit(): void {
		this._blogService.loadPosts();
	}
}
