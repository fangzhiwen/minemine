<template>
  <div id="app">
    <Main>
      <MainPage slot="content" :page="page" :showDate="false">
        <div class="admire-text" slot="message">
          <ul class="link-wrap" v-for="i in linkList">
            <li>
              <a :href="i.url" target="_blank">
                <img :src="i.avatar">
                <h4>{{i.author}}</h4>
                <p class="desc">{{i.desc || '没留下一片云彩233'}}</p>
              </a>
            </li>
          </ul>
        </div>
      </MainPage>
      <Disqus slot="comment"/>
    </Main>
  </div>
</template>

<script>
import Main from './main'
import MainPage from '@theme/components/MainPage'
import Disqus from '@theme/components/Disqus'
import friendsList from '../assets/friends'

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
  }
}
</script>

<style lang="less">
.admire-text {
  overflow: hidden;
  margin-top: 40px;
}
.link-wrap {
  list-style: none;
  li {
    float: left;
    width: 50%;
    position: relative;
    a {
      display: block;
      padding: 0 10px 0 90px;
      height: 90px;
      outline: none;
      text-decoration: none;
      color: #444;
      border-radius: 5px;
      &:hover {
        background-color: #fff8f7;
      }
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        top: 15px;
        left: 15px;
        cursor: pointer;
      }
      h4 {
        font-size: 18px;
        padding-top: 15px;
      }
      p {
        font-size: 12px;
        color: #999;
        margin: 5px 0;
        line-height: 24px;
      }
      .desc {
        cursor: pointer;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
