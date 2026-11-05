// Runs after `vite build`. Writes one HTML file per page (dist/over-ons.html, ...)
// with that page's title, description and canonical URL filled in, so search
// engines and link previews see the right values without running JavaScript.
// Cloudflare Pages and Netlify serve dist/over-ons.html at /over-ons.
// Also writes dist/sitemap.xml from the same page list.

import { readFileSync, writeFileSync } from "node:fs";

const seo = JSON.parse(readFileSync("src/seo-pages.json", "utf8"));
const template = readFileSync("dist/index.html", "utf8");

const escapeAttr = (s) =>
  s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`seo-pages: ${label} not found in dist/index.html`);
  return html.replace(pattern, replacement);
}

for (const [path, page] of Object.entries(seo.pages)) {
  const url = seo.siteUrl + path;
  const title = escapeAttr(page.title);
  const description = escapeAttr(page.description);

  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, "<title>");
  html = replaceOnce(html, /(<meta\s+name="description"\s+content=")[^"]*"/, `$1${description}"`, "description");
  html = replaceOnce(html, /(<meta\s+property="og:title"\s+content=")[^"]*"/, `$1${title}"`, "og:title");
  html = replaceOnce(html, /(<meta\s+property="og:description"\s+content=")[^"]*"/, `$1${description}"`, "og:description");
  html = replaceOnce(html, /(<meta\s+property="og:url"\s+content=")[^"]*"/, `$1${url}"`, "og:url");
  html = replaceOnce(html, /(<link\s+rel="canonical"\s+href=")[^"]*"/, `$1${url}"`, "canonical");

  const file = path === "/" ? "dist/index.html" : `dist${path}.html`;
  writeFileSync(file, html);
  console.log(`seo-pages: ${file}`);
}

const urls = Object.keys(seo.pages)
  .map((path) => `  <url>\n    <loc>${seo.siteUrl}${path}</loc>\n  </url>`)
  .join("\n");
writeFileSync(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log("seo-pages: dist/sitemap.xml");
