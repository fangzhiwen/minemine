<template>
  <div id="app">
    <Main>
      <MainPage slot="content" :page="page"/>
    </Main>
  </div>
</template>

<script>
import Main from './main'
import MainPage from '@theme/components/MainPage'

export default {
  props: ['page'],

  components: {
    Main,
    MainPage
  },
  methods: {
  }
}
</script>
