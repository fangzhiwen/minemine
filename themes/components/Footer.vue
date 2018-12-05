<template>
  <footer class="footer">
    <div class="centered">
      <span>&copy;</span>
      <span>2018</span>
      <span><a :href="$themeConfig.website">{{ this.$siteData.title }}</a></span>
      <span>Powered by <a href="https://github.com/upash/peco">peco</a>.</span>
      <span class="hide-on-mobile">
        <a :href="`https://github.com/${$themeConfig.repo}`">Read the source code.</a>
      </span>
    </div>
    <p>Made with
      <img src="../assets/img/heart.png" class="love"> by
      <a :href="$themeConfig.website">luyilin</a>.</p>
  </footer>
</template>

<script>
  export default {
    computed: {
      title() {
        // return this.$themeConfig.headerTitle.toUpperCase()
      }
    }
  }
</script>

<style lang="stylus" scoped>
.footer
  position: absolute
  left: 0
  bottom: 0
  width: 100%
  text-align: center
  line-height: 1.6
  padding: 7px 0
  color: #616161
  background-color: mistyrose
  font-family: source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace
  a
    color: #93a1a1
    text-decoration: none
    &:hover
      text-decoration: underline
  .love {
    width: 20px;
    vertical-align: sub;
  }
</style>