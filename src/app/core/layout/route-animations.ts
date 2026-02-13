import { trigger, transition, style, animate, query } from '@angular/animations';

export const routeTransitionAnimations = trigger('routeAnimations', [
	transition('* <=> *', [
		query(
			':enter',
			[style({ opacity: 0, transform: 'translateY(8px)' })],
			{ optional: true },
		),
		query(
			':leave',
			[animate('150ms ease-out', style({ opacity: 0 }))],
			{ optional: true },
		),
		query(
			':enter',
			[animate('250ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))],
			{ optional: true },
		),
	]),
]);
