<template>
  <div id="app">
    <Main>
      <div class="essay-item" slot="content">
        <Markdown :page="page" :showDate="false"/>
        <div id="disqus_thread"></div>
      </div>
    </Main>
  </div>
</template>

<script>
import Main from './main'
import Markdown from '@theme/components/Markdown'

let loadDisqus = () => {
  (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://minemine-2.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })()
}

export default {
  props: ['page'],

  components: {
    Main,
    Markdown
  },

  mounted() {
    loadDisqus()
  },

  methods: {
  }
}
</script>
