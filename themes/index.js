import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import '@theme/styles/main.less'
if (process.browser) {
  require('./assets/iconfont/iconfont.js')
}
// use Typefaces — making it easier to self-host webfonts.
import 'typeface-fredericka-the-great'
import 'typeface-indie-flower'

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
