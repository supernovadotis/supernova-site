# Supernova — site

Static site for supernova.is, built with [Astro](https://astro.build).

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # output in dist/

## Content

Everything editable lives in `src/content/` as Markdown files:

- `articles/<slug>.md` — an article, published at `/<rubric>/<slug>/` (plain-text copy at `/<rubric>/<slug>.md`)
- `rubrics/<rubric>.md` — a section page: the body is the intro paragraph, `people` is the "People we follow" list
- `authors/<slug>.md` — an author page at `/authors/<slug>/`: name, role, photo, links; the body is the bio
- `pages/<slug>.md` — a page that is not an article (manifesto, about, thankful)

The exact fields for each type are in `src/content.config.ts`.

Article frontmatter (only `title`, `standfirst` and `rubric` are required):

    rubric        machines | power | agency | edges | horizon | crossroads
    format        essay | interview | explainer | report
    tags          up to 4 from the list in src/content.config.ts
    author        file name of an entry in src/content/authors/
    date (YYYY-MM-DD), readingTime (minutes)
    featured      true puts it in the big card on the homepage
    order         homepage order, low first
    cover, coverCaption                  image path under public/, e.g. /images/x.jpg
    coverKicker, coverLines, coverNote   typographic cover when there is no image
    takeaways, sourceNote, bookmark, faq, references
    draft         true hides the article

In the body, `##` headings become numbered sections and the table of contents.
A blockquote is a pull quote. An image with a caption is a `<figure>` with `<figcaption>`.

To add a new standalone page: create `src/content/pages/<slug>.md`, then copy
`src/pages/about.astro` to `src/pages/<slug>.astro` and change the slug inside.

## Where things are

- `src/styles/global.css` — design tokens and all styles
- `src/data/site.ts` — tagline, rubrics, links, Substack embed URL
- `src/pages/index.astro` — homepage
- `src/pages/[rubric]/[slug].astro` — article template
- `public/fonts/` — Gramatika font files

## Not done yet

- Most texts are placeholders in [brackets]; `public/images/placeholder.jpg` stands in for every image.
