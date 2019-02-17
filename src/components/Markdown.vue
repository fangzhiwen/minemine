<template>
  <div class="markdown-content">
    <h1>
      <saber-link :to="page.attributes.permalink" class="essay-title">
        {{ page.attributes.title }}
      </saber-link>
    </h1>
    <p class="meta" v-if="showDate">
      <i class="iconfont iconfont-essay icon-icon01"></i>
      {{ '写于' + essayDate() }}
    </p>
    <h4 v-if="page.attributes.subTitle">{{ page.attributes.subTitle }}</h4>
    <div class="markdown-section" v-if="$slots.content">
      <slot name="content"></slot>
    </div>
    <div class="markdown-section" v-else-if="page.attributes.excerpt" v-html="page.attributes.excerpt"></div>
  </div>
</template>

<script>
import Moment from 'moment'
import { marked } from '../utils/index'

export default {
  props: {
    'page': {
      type: Object
    },
    'showAllContent': {
      type: Boolean,
      default: true
    },
    'showDate': {
      type: Boolean,
      default: true
    }
  },
  methods: {
    essayDate() {
      return Moment(this.page.attributes.date).format("YYYY年MM月DD日");
    }
  }
}
</script>
