<template>
  <div id="app">
    <Main>
      <div class="essay-item" slot="content">
        <Markdown :page="page" :showDate="false"/>
      </div>
      <Disqus slot="comment"/>
    </Main>
  </div>
</template>

<script>
import Main from './main.vue'
import Markdown from '#theme/components/Markdown.vue'
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
    Markdown,
    Disqus
  }
}
</script>
