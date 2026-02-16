import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const ARTICLES_DIR = join(import.meta.dirname, '..', 'src', 'content', 'articles');
const OUTPUT_PATH = join(import.meta.dirname, '..', 'src', 'assets', 'data', 'blog-posts.json');

const files = readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md'));

const posts = files
	.map((filename) => {
		const raw = readFileSync(join(ARTICLES_DIR, filename), 'utf-8');
		const { data, content } = matter(raw);
		const html = marked.parse(content, { async: false });

		return {
			slug: data.slug || filename.replace('.md', ''),
			title: data.title || 'Untitled',
			description: data.description || '',
			date: data.date || '',
			tags: data.tags || [],
			readTime: data.readTime || '',
			content: html,
		};
	})
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

mkdirSync(join(import.meta.dirname, '..', 'src', 'assets', 'data'), { recursive: true });
writeFileSync(OUTPUT_PATH, JSON.stringify({ posts }, null, '\t'));

console.log(`Built ${posts.length} blog posts → ${OUTPUT_PATH}`);
