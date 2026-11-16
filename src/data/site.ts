export const site = {
  name: 'supernova',
  tagline: 'A future-first media platform for the planetary transition',
  description:
    'We write about the gap between what human civilization can now do and what it is capable of doing well.',
  archiveUrl: 'https://archive.supernova.is',
  telegramUrl: 'https://t.me/supernovafuture',
  // Author card under articles: 'glow' | 'glass' | 'line' | 'dark' | 'split'
  authorCard: 'glow',
  substackEmbed: 'https://supernovamedia.substack.com/embed?transparent=1',
};

export const rubrics = [
  { slug: 'machines', name: 'Machines' },
  { slug: 'power', name: 'Power' },
  { slug: 'agency', name: 'Agency' },
  { slug: 'edges', name: 'Edges' },
  { slug: 'horizon', name: 'Horizon' },
  { slug: 'crossroads', name: 'Crossroads' },
] as const;

export const rubricName = (slug: string) => rubrics.find((r) => r.slug === slug)?.name ?? slug;

export const formatName = (f: string) => f.charAt(0).toUpperCase() + f.slice(1);

export const formatDate = (d?: Date) =>
  d ? d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : null;
