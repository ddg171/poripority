export default [
  { UserAgent: '*' },
  { Disallow: '/blog/preview/' },

  // Be aware that this will NOT work on target: 'static' mode
  { Sitemap: process.env.BASE_URL + '/sitemap.xml' }
]
