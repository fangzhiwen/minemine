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
import DisqusJS from '../utils/disqus'
import 'disqusjs/dist/disqusjs.css'

export default {
  props: ['page'],

  components: {
    Main,
    Markdown
  },

  mounted() {
    var dsqjs = new DisqusJS({
      shortname: 'minemine',
      siteName: "minemine",
      url: "https://minemine.cc",
      apikey: '6hsuNYhuAn3K2X6Jtal9IHwLKG29LnCCsLI49Q5f4dPffLoSfthM5DkaE2Jilxex',
      admin: 'luyilin'
    });
  },

  methods: {
  }
}
</script>
