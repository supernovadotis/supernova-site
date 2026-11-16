import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const rubricSlugs = ['machines', 'power', 'agency', 'edges', 'horizon', 'crossroads'] as const;
// Topical tags, separate from rubrics. Up to 4 per article.
export const tagList = [
  'action', 'consciousness', 'planetary', 'leadership', 'technologies', 'state',
  'human', 'AI', 'collective', 'internet', 'futures',
] as const;

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    standfirst: z.string(),
    rubric: z.enum(rubricSlugs),
    format: z.enum(['essay', 'interview', 'explainer', 'report']).default('essay'),
    tags: z.array(z.enum(tagList)).max(4).default([]),
    // File name (without .md) of an entry in src/content/authors/
    author: z.string().optional(),
    date: z.coerce.date().optional(),
    readingTime: z.number().optional(),
    // Homepage: `featured` takes the big opening card; `order` sorts the rest (low first).
    featured: z.boolean().default(false),
    order: z.number().default(100),
    // Cover image (path under public/, e.g. /images/kinship.jpg) with optional caption.
    cover: z.string().optional(),
    coverCaption: z.string().optional(),
    // Typographic cover, used when there is no image. *word* highlights a word.
    coverKicker: z.string().optional(),
    coverLines: z.array(z.string()).optional(),
    coverNote: z.string().optional(),
    takeaways: z.array(z.string()).optional(),
    sourceNote: z.string().optional(),
    bookmark: z
      .object({ title: z.string(), description: z.string().optional(), url: z.string().optional() })
      .optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    references: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    photo: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});

// Section pages: the body is the intro paragraph; `people` is the "people we follow" list.
const rubrics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/rubrics' }),
  schema: z.object({
    name: z.string(),
    people: z
      .array(z.object({ name: z.string(), description: z.string(), photo: z.string().optional(), url: z.string().optional() }))
      .default([]),
  }),
});

// Standalone pages that are not articles: manifesto, about, and so on.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    standfirst: z.string().optional(),
    kicker: z.string().optional(),
    cover: z.string().optional(),
    coverCaption: z.string().optional(),
    numbered: z.boolean().default(false),
    // Giant word set behind the top of the page, as on the old Ghost pages.
    backdrop: z.string().optional(),
  }),
});

export const collections = { articles, authors, rubrics, pages };
