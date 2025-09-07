import { defineCollection, defineConfig } from '@content-collections/core';
import { z } from 'zod';
import { compileMarkdown } from '@content-collections/markdown';
import remarkGfm from 'remark-gfm';

const posts = defineCollection({
	name: 'posts',
	directory: 'src/posts',
	include: '**/*.md',
	schema: z.object({
		title: z.string(),
		summary: z.string()
	}),
	transform: async (doc, context) => {
		const content = await compileMarkdown(context, doc, {
			remarkPlugins: [remarkGfm],
			// rehypePlugins: [rehypeKatex]
		});

		return {
			...doc,
			slug: doc.title.toLowerCase().replace(/ /g, '-'),
			content
		};
	}
});

export default defineConfig({
	collections: [posts]
});
