<template>
  <div id="app">
    <Main>
      <Essay slot="content" v-for="i, index in page.posts" :key="i.permalink" :page="i" :showAllContent="false"></Essay>
    </Main>
  </div>
</template>

<script>
import Main from './main'
import Essay from '@theme/components/Essay'

export default {
  name: 'app',
  props: ['page'],
  components: {
    Main,
    Essay
  }
}
</script>
