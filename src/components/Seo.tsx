import { useEffect } from "react";
import { useLocation } from "react-router";
import seo from "../seo-pages.json";

type PageSeo = { title: string; description: string };

const notFound: PageSeo = {
  title: "Pagina niet gevonden | Je Kiné",
  description: "Deze pagina bestaat niet (meer).",
};

function setMeta(selector: string, value: string) {
  document.querySelector(selector)?.setAttribute("content", value);
}

/**
 * Updates the title, description and canonical URL in index.html's <head>
 * on every page change. The build also writes one HTML file per page with
 * these values filled in (scripts/seo-pages.mjs), for crawlers that don't run JS.
 */
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pages: Record<string, PageSeo> = seo.pages;
    const page = pages[pathname] ?? notFound;
    const url = seo.siteUrl + (pathname === "/" ? "/" : pathname);

    document.title = page.title;
    setMeta('meta[name="description"]', page.description);
    setMeta('meta[property="og:title"]', page.title);
    setMeta('meta[property="og:description"]', page.description);
    setMeta('meta[property="og:url"]', url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    setMeta('meta[name="robots"]', pages[pathname] ? "index, follow" : "noindex");
  }, [pathname]);

  return null;
}
