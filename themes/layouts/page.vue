<template>
  <div id="app">
    <Main>
      <MainPage slot="content" :page="page"/>
    </Main>
  </div>
</template>

<script>
import Main from './main'
import Essay from '@theme/components/Essay'
import MainPage from '@theme/components/MainPage'

export default {
  props: ['page'],

  components: {
    Main,
    Essay,
    MainPage
  },
  methods: {
  }
}
</script>
