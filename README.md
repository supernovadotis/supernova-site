# Supernova — site

Static site for supernova.is, built with [Astro](https://astro.build).

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # output in dist/

## Adding an article

Create `src/content/articles/<slug>.md`. The file name is the URL slug; the page
is published at `/<rubric>/<slug>/`, with a plain-text copy at `/<rubric>/<slug>.md`.

Frontmatter (only `title`, `standfirst` and `rubric` are required):

    title, standfirst
    rubric        machines | power | agency | edges | horizon | crossroads
    format        essay | interview | explainer | report
    author, authorBio, date (YYYY-MM-DD), readingTime (minutes)
    featured      true puts it in the big card on the homepage
    order         homepage order, low first
    coverKicker, coverLines, coverNote   typographic cover; *word* highlights a word
    takeaways     list
    sourceNote    which kind of source the piece rests on
    bookmark      { title, description, url }
    faq           list of { q, a }
    references    list (HTML allowed)
    draft         true hides the article

In the body, `##` headings become numbered sections and the table of contents.
A blockquote is a pull quote; its second paragraph is the attribution.

## Where things are

- `src/styles/global.css` — design tokens and all styles
- `src/data/site.ts` — tagline, rubrics, links, Substack embed URL
- `src/pages/index.astro` — homepage
- `src/pages/[rubric]/[slug].astro` — article template
- `public/fonts/` — Gramatika font files

## Not done yet

- Article bodies, About and For AI systems hold placeholder text in [brackets].
