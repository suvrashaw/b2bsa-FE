/** @type {import('next-sitemap').IConfig} */
// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  exclude: ['/icon.png', '/favicon.ico'], // exclude static assets if needed
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  siteUrl: process.env.SITE_URL || 'https://b2bsalesarrow.com',
  transform: async (config, path) => {
    let priority = config.priority || 0.7;
    let changefreq = config.changefreq || 'daily';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.startsWith('/services') || path === '/trade-show-calendar') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/blogs') || path.startsWith('/case-studies')) {
      priority = 0.7;
      changefreq = 'weekly';
    } else if (path === '/privacy-policy' || path === '/cookie-policy') {
      priority = 0.3;
      changefreq = 'yearly';
    } else if (path === '/about' || path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
}
