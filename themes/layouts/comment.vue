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
    s.src = 'https://cdn.jsdelivr.net/npm/disqusjs@1.0.7/dist/disqus.js';
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
    // loadDisqus()
    var dsqjs = new DisqusJS({
      shortname: 'mine',
      siteName: "mine",
      url: "https://minemine.cc",
      apikey: '6hsuNYhuAn3K2X6Jtal9IHwLKG29LnCCsLI49Q5f4dPffLoSfthM5DkaE2Jilxex',
      admin: 'luyilin'
    });
  },

  methods: {
  }
}
</script>
