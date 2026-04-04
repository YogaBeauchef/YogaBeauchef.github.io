import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
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
