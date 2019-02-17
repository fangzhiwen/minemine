<template>
  <div id="app">
    <Main>
      <div class="essay-item" slot="content">
        <timeline timelineTheme="#FFD9C9">
          <template v-for="item in yearList">
            <timeline-title>{{item}}</timeline-title>
            <timeline-item v-for="(i, index) in yearTimeline(item)" :key="index">
              <span>{{i.date}}</span>
              <a :href="i.path">{{i.title}}</a>
            </timeline-item>
          </template>
        </timeline>
      </div>
    </Main>
  </div>
</template>

<script>
import Main from './main.vue'
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
import timeLineList from '../assets/timeline.data'

export default {
  props: ['page'],

  head() {
    return {
      title: `${this.page.attributes.title} - ${this.$siteConfig.title}`
    }
  },

  data() {
    return {
      timeLineList
    }
  },

  computed: {
    yearList() {
      const list = []
      timeLineList.forEach(i => {
        const year = i.year
        if (list.indexOf(year) === -1) list.push(year)
      })
      return list
    }
  },

  methods: {
    yearTimeline(year) {
      return timeLineList.filter(i => {
        return i.year === year
      })
    }
  },

  components: {
    Main,
    Timeline,
    TimelineItem,
    TimelineTitle
  }
}
</script>
