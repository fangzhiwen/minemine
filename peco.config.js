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
    twitter: "luyilin12"
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
