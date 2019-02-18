<template>
  <div id="app">
    <Main>
      <MainPage slot="content" :page="page" :showDate="false"/>
      <Disqus slot="comment"/>
    </Main>
  </div>
</template>

<script>
import Main from './main.vue'
import MainPage from '#theme/components/MainPage.vue'
import Disqus from '#theme/components/Disqus.vue'

export default {
  props: ['page'],

  head() {
    return {
      title: `${this.page.attributes.title} - ${this.$siteConfig.title}`
    }
  },

  components: {
    Main,
    MainPage,
    Disqus
  }
}
</script>
