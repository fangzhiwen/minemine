<template>
  <div id="app">
    <Main>
      <Essay
        slot="content"
        v-for="i, index in page.posts"
        :key="i.permalink"
        :page="i"
        :showAllContent="false"
      ></Essay>
    </Main>
  </div>
</template>

<script>
import Main from "./main.vue";
import Essay from "#theme/components/Essay.vue";

export default {
  name: "app",
  props: ["page"],
  head() {
    const title = this.page.tag ? `${this.page.tag} - ${this.$siteConfig.title}` : this.$siteConfig.title
    return {
      title
    }
  },
  components: {
    Main,
    Essay
  }
};
</script>
