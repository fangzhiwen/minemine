const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  title: 'minemine',
  deescription: 'Write something for my love.',
  theme: "./themes",
  googleAnalytics: "UA-54857209-6",
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
  chainWebpack(config) {
    if (isProd) {
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
