/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jhonysouza100.online',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://jhonysouza100.online/server-sitemap-index.xml', // <= add here
    ]
  }
}