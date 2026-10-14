import { readFileSync } from 'node:fs';

const main = readFileSync('src/main.tsx', 'utf8');
const extra = readFileSync('src/additionalArticles.ts', 'utf8');
const sitemap = readFileSync('public/sitemap.xml', 'utf8');
const starterTitles = [...main.matchAll(/title:'([^']+)'/g)].map((match) => match[1]);
const extraTitles = [...extra.matchAll(/title: '([^']+)'/g)].map((match) => match[1]);
const titles = [...starterTitles, ...extraTitles];
const slugify = (value) => value.toLowerCase().normalize('NFKD').replace(/[\\u0300-\\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const slugs = titles.map(slugify);
const urls = [...sitemap.matchAll(/<loc>(.*?)<\\/loc>/g)].map((match) => match[1]);

if (titles.length < 18) throw new Error(`Expected at least 18 articles, found ${titles.length}`);
if (new Set(slugs).size !== slugs.length) throw new Error('Duplicate article slugs detected');
const missing = slugs.filter((slug) => !urls.includes(`https://cryptoscope-news.pages.dev/articles/${slug}/`));
if (missing.length) throw new Error(`Sitemap is missing article URLs: ${missing.join(', ')}`);
if (!main.includes('const renderSourceNote')) throw new Error('Article source links are not rendered');
console.log(`Content check passed: ${titles.length} article titles, all present in sitemap.`);
