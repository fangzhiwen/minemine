<template>
  <div id="disqus_thread"></div>
</template>

<script>
// import DisqusJS from '../utils/disqus'
import DisqusJS from 'disqusjs'
import 'disqusjs/dist/disqusjs.css'

export default {
  mounted() {
    let dsqjs = new DisqusJS({
      shortname: 'minemine-2',
      siteName: "minemine",
      url: document.location.href,
      identifier: document.location.pathname,
      apikey: '6hsuNYhuAn3K2X6Jtal9IHwLKG29LnCCsLI49Q5f4dPffLoSfthM5DkaE2Jilxex',
      admin: 'luyilin'
    });
  }
}
</script>
