module.exports = {
  title: 'ShoppRe EXPEDITIONS',
  description: 'Know more about ShoppRe',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
  },
  dest: 'public',
  plugins: [
    'social-share',
    {
      'sitemap': {
        hostname: 'https://www.parkenconsulting.com'
      },
    }
  ],
};
