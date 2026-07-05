import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
    description: z.string(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    location: z.string().optional(),
  }),
});

export const collections = { blog };
