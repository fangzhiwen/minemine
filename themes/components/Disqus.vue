<template>
  <div id="disqus_thread"></div>
</template>

<script>
import DisqusJS from '../utils/disqus'
import 'disqusjs/dist/disqusjs.css'

export default {
  mounted() {
    var dsqjs = new DisqusJS({
      shortname: 'minemine',
      siteName: "minemine",
      apikey: '6hsuNYhuAn3K2X6Jtal9IHwLKG29LnCCsLI49Q5f4dPffLoSfthM5DkaE2Jilxex',
      admin: 'luyilin'
    });
  }
}
</script>
