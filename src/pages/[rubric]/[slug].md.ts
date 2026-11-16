// Plain-text version of every article, for AI systems and anyone who prefers Markdown.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const all = await getCollection('articles', (a) => !a.data.draft);
  return all.map((article) => ({
    params: { rubric: article.data.rubric, slug: article.id },
    props: { article },
  }));
}

export const GET: APIRoute = ({ props }) => {
  const { article } = props as any;
  const d = article.data;
  const head = [
    `# ${d.title}`,
    '',
    d.standfirst,
    '',
    [d.author && `By ${d.author}`, d.date && d.date.toISOString().slice(0, 10), `Supernova / ${d.rubric}`]
      .filter(Boolean)
      .join(' · '),
  ];
  const refs = d.references?.length
    ? ['', '## References', '', ...d.references.map((r: string, i: number) => `${i + 1}. ${r.replace(/<[^>]+>/g, '')}`)]
    : [];
  return new Response([...head, '', article.body ?? '', ...refs].join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
