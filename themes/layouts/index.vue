<template>
  <div id="app">
    <Main>
      <div class="essay-wrap" slot="content">
        <Essay v-for="i, index in page.posts" :key="i.permalink" :page="i" :showAllContent="false"></Essay>
      </div>
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
  },
  methods: {
  }
}
</script>
