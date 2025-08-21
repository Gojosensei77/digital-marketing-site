import { writeFile, mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

import { blogPosts } from '../src/data/blogPosts.js';
import { categories } from '../src/data/blogPosts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.SITE_URL || 'https://example.com';

function xmlEscape(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function generate() {
  const urls = new Set();

  const pushUrl = (u, priority = '0.7') => {
    urls.add({ url: u, priority });
  };

  pushUrl(`${SITE_URL}/`, '1.0');
  pushUrl(`${SITE_URL}/blog`, '0.8');
  pushUrl(`${SITE_URL}/about`, '0.5');

  categories
    .filter((c) => c !== 'All')
    .forEach((category) => pushUrl(`${SITE_URL}/category/${encodeURIComponent(category)}`, '0.6'));

  blogPosts.forEach((post) => {
    pushUrl(`${SITE_URL}/post/${post.id}`, '0.8');
  });

  const now = new Date().toISOString();
  const body = Array.from(urls)
    .map(({ url, priority }) => {
      return `  <url>\n    <loc>${xmlEscape(url)}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

  const publicDir = path.resolve(__dirname, '../public');
  await mkdir(publicDir, { recursive: true });
  await writeFile(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');

  console.log('Sitemap generated at public/sitemap.xml with', urls.size, 'URLs');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});

