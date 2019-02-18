<template>
  <div class="index-wrap">
    <canvas id="evanyou"></canvas>
    <Header/>
    <Avatar/>
    <div class="content-wrap">
      <div class="essay-wrap" :style="{width: essayWidth}">
        <slot name="content"></slot>
        <slot name="comment"></slot>
      </div>
      <Sidebar @closeSidebar="widen"></Sidebar>
    </div>
    <!--<Footer/>-->
  </div>
</template>

<script>
import zoom from 'medium-zoom'
import Header from '#theme/components/Header.vue'
import Avatar from '#theme/components/Avatar.vue'
import Footer from '#theme/components/Footer.vue'
import Sidebar from '#theme/components/Sidebar.vue'
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
}
</script>
