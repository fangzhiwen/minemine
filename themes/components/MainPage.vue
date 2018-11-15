<template>
  <div class="essay-item">
    <Markdown :page="page" :showAllContent="true"/>
    <slot name="message"></slot>
  </div>
</template>

<script>
import Markdown from '@theme/components/Markdown'

export default {
  props: ['page'],
  components: {
    Markdown
  }
}
</script>