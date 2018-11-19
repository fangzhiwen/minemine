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
import Main from './main'
import Markdown from '@theme/components/Markdown'
import Disqus from '@theme/components/Disqus'

export default {
  props: ['page'],

  components: {
    Main,
    Markdown,
    Disqus
  }
}
</script>
