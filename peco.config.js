module.exports = {
  title: 'minemine',
  description: 'Write something for my love.',
  theme: "./themes",
  googleAnalytics: "UA-91928620-2",
  url: "https://minemine.cc",
  feed: true,
  author: "luyilin",
  email: "luyilin12@gmail.com",
  github: "https://github.com/luyilin",
  themeConfig: {
    title: "Minemine",
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
  },
  chainWebpack(config, context) {
    if (context.type === 'client') {
      config.plugin('offline').use(require('offline-plugin'), [
        {
          ServiceWorker: {
            output: 'service-worker.js',
            events: true
          },
          AppCache: false,
          excludes: ['favicon.ico']
        }
      ])
    }
  }
}
