<template>
  <div id="app">
    <Main>
      <div class="essay-item" slot="content">
        <Markdown :page="page" :showAllContent="true"/>
        <div id="disqus_thread"></div>
      </div>
    </Main>
  </div>
</template>

<script>
import Main from './main'
import Markdown from '@theme/components/Markdown'
import 'disqusjs/dist/disqusjs.css'
import DisqusJS from 'disqusjs'

let loadDisqus = () => {
  (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    // s.src = 'https://unpkg.com/disqusjs@1.0/dist/disqus.js';
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
    console.log(DisqusJS)
    var dsqjs = new DisqusJS({
      shortname: 'minemine-2',
      siteName: 'minemine',
      identifier: '',
      url: '',
      api: '',
      apikey: '',
      admin: '',
      adminLabel: ''
    });
  },

  methods: {
  }
}
</script>
