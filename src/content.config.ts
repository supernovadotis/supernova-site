import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    standfirst: z.string(),
    // One of: machines, power, agency, edges, horizon, crossroads
    rubric: z.enum(['machines', 'power', 'agency', 'edges', 'horizon', 'crossroads']),
    // Format layer: essay, interview, explainer, report
    format: z.enum(['essay', 'interview', 'explainer', 'report']).default('essay'),
    author: z.string().optional(),
    authorBio: z.string().optional(),
    date: z.coerce.date().optional(),
    readingTime: z.number().optional(),
    // Homepage: `featured` takes the big opening card; `order` sorts the rest (low first).
    featured: z.boolean().default(false),
    order: z.number().default(100),
    // Typographic cover. `coverLines` are short lines; wrap a word in *asterisks* to highlight it.
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

export const collections = { articles };
