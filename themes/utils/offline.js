// import * as runtime from 'offline-plugin/runtime'
import * as runtime from './runtime'

runtime.install({
  onInstalled() {
    console.log('The website is now offline-ready')
  },
  onUpdateReady() {
    console.log('New udpates are available, updating..')
    runtime.applyUpdate()
  },
  onUpdated() {
    console.log('Website is updated')
  }
})
