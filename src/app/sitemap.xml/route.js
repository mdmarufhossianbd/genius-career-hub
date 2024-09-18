import { getCategories } from "@/utils/fetchCategories";
import { PublishJobs } from "@/utils/fetchJobs";

export async function GET() {
    const baseURL = process.env.NEXT_PUBLIC_BASEURL;
    const staticPages = [
      '/',
      '/jobs',
      '/about',
      '/contact',
      '/terms-and-conditions',
      '/privacy-policy',
      '/government-job-circular',
      '/ngo-job-circular',
      '/bank-job-circular',
      '/admit-card',
      '/result',
      '/notice',
    ];
    const jobs = await PublishJobs();
    const jobPages = jobs.map(job => `/jobs/${job.slug}`)
    const categories = await getCategories()
    const categoryPages = categories.map(category => `/category/${category.slug}`)
    

    const pages = staticPages.concat(jobPages, categoryPages);

    const xmlPages = pages.map(page => `
        <url>
          <loc>${baseURL}${page}</loc>
          <changefreq>daily</changefreq>
          <priority>1</priority>
        </url>
      `).join('');

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
    ${xmlPages}
  </urlset>`;
  
  return new Response(xmlContent, {
    headers: {
        'Content-Type' : 'text/xml'
    }
  })
}