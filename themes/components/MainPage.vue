<template>
  <div class="essay-item">
    <Markdown :page="page" :showDate="showDate"/>
    <slot name="message"></slot>
  </div>
</template>

<script>
import Markdown from '@theme/components/Markdown'

export default {
  props: ['page', 'showDate'],
  components: {
    Markdown
  }
}
</script>