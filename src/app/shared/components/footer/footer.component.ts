import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component( {
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
} )
export class FooterComponent {
	currentYear = signal( new Date().getFullYear() );

	socialLinks = signal( [
		{
			label: 'GitHub',
			url: 'https://github.com/abdelrahmman97',
			icon: 'ri-github-fill',
		},
		{
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/abdelrahman1097',
			icon: 'ri-linkedin-fill',
		},
		{
			label: 'Email',
			url: 'mailto:abdelrahman.m1097@gmail.com',
			icon: 'ri-mail-fill',
		},
	] );
}
