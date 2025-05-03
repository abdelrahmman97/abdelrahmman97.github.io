export interface Tags {
	id: number;
	title: string;
	icon: string;
	selected: boolean;
}

export interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	githubLink: string;
	liveLink: string;
	tags: number[];
}
