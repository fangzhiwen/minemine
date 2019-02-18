<template>
  <div class="essay-item">
    <Markdown :page="page" :showDate="showDate">
      <slot name="content" slot="content" />
    </Markdown>
    <slot name="message"></slot>
  </div>
</template>

<script>
import Markdown from '#theme/components/Markdown.vue'

export default {
  props: ['page', 'showDate'],
  components: {
    Markdown
  }
}
</script>