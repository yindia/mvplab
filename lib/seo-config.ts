export const seoConfig = {
  defaultTitle: 'mvplab - Build MVPs that Launch Fast and Scale Faster',
  titleTemplate: '%s | mvplab',
  defaultDescription: 'High-Impact MVPs for Founders Who Move Fast. We build MVPs with killer design, smooth UX, and real user value. From idea to launch in 2-4 weeks.',
  siteUrl: 'https://mvplab.dev',
  defaultImage: 'https://mvplab.dev/og-image.png',
  twitterHandle: '@mvplab',
  siteName: 'mvplab',
  locale: 'en_US',
  type: 'website',
};

export const getPageSEO = (page: string) => {
  const pageSEO = {
    home: {
      title: seoConfig.defaultTitle,
      description: seoConfig.defaultDescription,
      path: '/',
    },
    about: {
      title: 'About Us - Meet Our Team of Cracked Engineers',
      description: 'Meet the team behind mvplab. Experienced engineers, open source contributors, and startup veterans who ship fast and scale faster.',
      path: '/about',
    },
    work: {
      title: 'Our Work - Portfolio of Successful MVP Projects',
      description: 'Explore our portfolio of successful MVP launches. See how we\'ve helped startups go from idea to market-ready products in record time.',
      path: '/work',
    },
  };

  return pageSEO[page as keyof typeof pageSEO] || pageSEO.home;
};