<template>
  <div id="app">
    <Main>
      <MainPage slot="content" :page="page" :showDate="false"/>
      <Disqus slot="comment"/>
    </Main>
  </div>
</template>

<script>
import Main from './main'
import MainPage from '@theme/components/MainPage'
import Disqus from '@theme/components/Disqus'

export default {
  props: ['page'],

  components: {
    Main,
    MainPage,
    Disqus
  }
}
</script>
