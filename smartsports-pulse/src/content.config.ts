import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const category = z.enum([
  '분석 가이드',
  '배당 해설',
  '경기 프리뷰',
  '데이터 리터러시',
  '초보 루틴',
]);

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category,
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    kicker: z.string().optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    minutes: z.number(),
    kicker: z.string(),
  }),
});

export const collections = { blog, guides };
