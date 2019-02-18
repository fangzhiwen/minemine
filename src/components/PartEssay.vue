<style lang="less">
</style>

<template>
  <div>
    <div class="markdown-section part-content" v-html="partContent"></div>
    <span class="unfold fold-btn" @click="notFold">显示全文~</span>
  </div>
</template>

<script>
  import {marked, getLastChild, addDate, addTitleLink} from 'util/render.js'
  let that

  export default{
    mounted() {
      that = this
      this.el = this.$el
    },
    data(){
      return{
        el: ''
      }
    },
    props: ['j', 'index'],
    methods: {
      notFold() {
        this.$store.commit('NOT_FOLD', this.index)
        this.el.style.display = 'none'
      }
    }
  }
</script>
