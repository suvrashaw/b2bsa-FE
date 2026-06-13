/** @type {import('next-sitemap').IConfig} */
// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  exclude: ['/icon.png', '/favicon.ico'], // exclude static assets if needed
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  siteUrl: process.env.SITE_URL || 'https://b2bsalesarrow.com',
}
