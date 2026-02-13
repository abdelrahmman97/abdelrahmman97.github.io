export interface BlogPost {
	id: number;
	title: string;
	summary: string;
	date: string;
	readTime: string;
	tags: string[];
	url?: string;
}
