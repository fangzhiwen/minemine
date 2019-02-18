module.exports = {
  siteConfig: {
    title: 'minemine',
    description: 'Write something for my love.',
    url: 'https://minemine.cc/',
    author: 'luyilin'
  },
  permalinks: {
    post: '/:year/:month/:day/:slug',
    page: '/:slug'
  },
  plugins: [
    {
      resolve: 'saber-plugin-google-analytics',
      options: {
        trackId: 'UA-91928620-2'
      }
    },
    {
      resolve: 'saber-generator-feed'
    }
  ],
  markdown: {
    highlighter: 'prism'
  },
  theme: "./src",
  themeConfig: {
    website: "https://github.com/luyilin",
    repo: "luyilin/minemine",
    twitter: "luyilin12",
    tags: [
      {
        name: '青春如梦',
        path: 'life'
      },
      {
        name: '举个栗子',
        path: 'code'
      }
    ],
    codeDemo: [
      {
        title: 'vue-cute-timeline',
        link: 'https://vue-cute-timeline.netlify.com/'
      },
      {
        title: 'vue-cute-rate',
        link: 'https://vue-cute-rate.netlify.com/'
      },
      {
        title: 'kokk',
        link: 'https://luyilin.github.io/kokk/'
      },
      {
        title: 'Aoba',
        link: 'https://luyilin.github.io/Aoba'
      },
      {
        title: 'vue-pagination',
        link: 'https://luyilin.github.io/vue-pagination-minemine/dist/index.html'
      },
      {
        title: 'Maltose',
        link: 'https://luyilin.github.io/Maltose/demo/'
      },
      {
        title: 'foldcontent-zhihu',
        link: 'https://luyilin.github.io/foldcontent-zhihu/src/demo.html'
      }
    ]
  }
}
