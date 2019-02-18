exports.chainWebpack = function(config, context) {
  if (context.type === 'client' && this.mode === 'production') {
    config.plugin('offline').use(require('offline-plugin'), [
      {
        ServiceWorker: {
          output: 'service-worker.js',
          events: true
        },
        AppCache: false,
        excludes: ['favicon.ico', '**/../bundle-manifest/**']
      }
    ])
  }
}
