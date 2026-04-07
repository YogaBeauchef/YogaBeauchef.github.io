import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    date: z.coerce.date(),
    categories: z.union([z.string(), z.array(z.string())]).optional(),
  }),
});

export const collections = {
  posts,
};
