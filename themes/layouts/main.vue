<template>
  <div class="index-wrap">
    <canvas id="evanyou"></canvas>
    <Header/>
    <Avatar/>
    <div class="content-wrap">
      <div class="essay-wrap" :style="{width: essayWidth}">
        <slot name="content"></slot>
      </div>
      <Sidebar @closeSidebar="widen"></Sidebar>
    </div>
    <!--<Footer/>-->
  </div>
</template>

<script>
import zoom from 'medium-zoom'
import Header from '@theme/components/Header'
import Avatar from '@theme/components/Avatar'
import Footer from '@theme/components/Footer'
import Sidebar from '@theme/components/Sidebar'
import { changeBg } from '../utils/index'

export default{
  data() {
    return {
      essay: [],
      essayWidth: '70%'
    }
  },
  mounted() {
    zoom('.markdown-section img')
    document.body.onclick = changeBg
  },
  components: {
    Header,
    Avatar,
    Footer,
    Sidebar
  },
  methods: {
    widen() {
      this.essayWidth = '100%'
    }
  }
//     beforeRouteEnter (to, from, next) {
//       next(vm => {
//         // 通过 `vm` 访问组件实例
//         vm.essay.splice(0, vm.essay.length)
//         let state = vm.$store.state
//         let essay = to.name === 'main' ? state.essay : to.name === 'code' ? state.codeEssay : state.youthEssay
// //        vm.loadEssaySync(vm, essay)
//         vm.loadEssay(vm, essay)
//       })
//     }
}
</script>

<style lang="less">

</style>