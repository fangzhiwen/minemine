<template>
  <div id="app">
    <Main>
      <MainPage slot="content" :page="page" :showDate="false">
        <div class="admire-text" slot="message">
          <div class="link-wrap" v-for="i in linkList" @click="goNewLink(i.url)">
            <div class="avatar" :style="{backgroundImage: `url(${i.avatar})`}" />
            <div class="message">
              <h4>{{i.author}}</h4>
              <p class="desc">{{i.desc || '没留下一片云彩233'}}</p>
            </div>
          </div>
        </div>
      </MainPage>
      <Disqus slot="comment" />
    </Main>
  </div>
</template>

<script>
import Main from './main'
import MainPage from '@theme/components/MainPage'
import Disqus from '@theme/components/Disqus'
import friendsList from '../assets/friends.data'

export default {
  props: ['page'],

  components: {
    Main,
    MainPage,
    Disqus
  },

  data() {
    return {
      linkList: friendsList
    }
  },

  methods: {
    goNewLink(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="less">
.admire-text {
  overflow: hidden;
  margin-top: 40px;
}
.link-wrap {
  float: left;
  width: 50%;
  height: 90px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #fff8f7;
  }
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-size: cover;
    margin-right: 20px;
    flex-shrink: 0;
  }
  .ellipsis() {
    max-width: 220px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .message {
    h4 {
      font-size: 18px;
      padding-top: 15px;
      .ellipsis();
    }
    .desc {
      font-size: 12px;
      color: #999;
      margin: 5px 0;
      line-height: 24px;
      .ellipsis();
    }
  }
}
</style>
