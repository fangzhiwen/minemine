import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import '@theme/styles/main.less'
if (process.browser) {
  const iconfont = require('./assets/iconfont/iconfont.js')
  // use Typefaces — making it easier to self-host webfonts.
  const fredericka = require('typeface-fredericka-the-great')
  const indieFlower = require('typeface-indie-flower')
}

const isProd = process.env.NODE_ENV === 'production'
if (isProd) {
  // require('offline-plugin/runtime')
  require('./utils/offline')
}

export default ({ router, rootOptions }) => {
  if (process.browser) {
    const loaded = Object.create(null)

    nprogress.configure({ showSpinner: false })

    router.beforeEach((to, from, next) => {
      if (!loaded[to.path]) {
        nprogress.start()
      }
      next()
    })

    router.afterEach(to => {
      loaded[to.path] = true
      nprogress.done()
    })
  }

  rootOptions.head = {
    htmlAttrs: {
      lang: 'zh-CN'
    }
  }
}
