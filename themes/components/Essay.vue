<template>
  <div class="essay-item">
    <div class="date">
      <p class="month">{{ getMonth() + '月' }}</p>
      <p class="day">{{ getDay() }}</p>
    </div>
    <div class="category">
      <router-link class="cate" to="/code">{{ getCate() }}</router-link>
    </div>
    <Markdown :page="page"/>
  </div>
</template>

<script>
import Markdown from '@theme/components/Markdown'

export default {
  data() {
    return {
      essayWidth: '70%'
    }
  },
  props: ['essayArray', 'page'],
  components: {
    Markdown
  },
  methods: {
    getRowDate() {
      return new Date(this.page.attributes.date)
    },
    getMonth() {
      return this.getRowDate().getMonth() + 1;
    },
    getDay() {
      return this.getRowDate().getDate();
    },
    getCate() {
      const tags = this.page.attributes.tags
      return !tags || tags.indexOf('code') > -1 ? '举个栗子' : '青春如梦'
    }
  }
}
</script>

<style lang="less">
.content-wrap {
  width: 82%;
  margin: 0 auto 30px;
  word-wrap: break-word;
  @media screen and (max-width: 828px) {
    width: 100%;
    margin: 0 auto;
  }
  .essay-wrap {
    float: left;
    transition: all .31s ease-in-out;
    @media screen and (max-width: 1020px) {
      width: 100% !important;
    }
    .essay-item {
      position: relative;
      background-color: #fff;
      border-radius: 6px;
      padding: 5px 10px 10px 0;
      font-family: PingFangSC-Light, Avenir, Helvetica, Arial, Hiragino Sans GB, Microsoft YaHei, sans-serif;
      margin-bottom: 45px;
      min-height: 300px;
      .essay-title {
        color: #ef8585;
        cursor: pointer;
      }
      .fold-btn {
        padding: 1px 5px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
      }
      .unfold {
        display: inline-block;
        color: #42baba;
        &:hover {
          background-color: #edf8f8;
        }
      }
      .all-content {
        position: relative;
        padding-bottom: 35px;
        .fold {
          color: #fff;
          background-color: #7acece;
          position: absolute;
          right: 18px;
          animation: foldSlide .2s ease-in-out;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        @-webkit-keyframes foldSlide {
          from {
            bottom: 0;
          }
          to {
            bottom: 18px;
          }
        }
        @keyframes foldSlide {
          from {
            bottom: 0;
          }
          to {
            bottom: 18px;
          }
        }
      }
      .date {
        box-sizing: content-box;
        position: absolute;
        top: -20px;
        left: -35px;
        width: 70px;
        height: 60px;
        background-color: #a0ede9;
        color: #fff;
        font-weight: bold;
        padding-top: 10px;
        border-radius: 100px;
        text-align: center;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.09), 0 3px 1px -2px rgba(0,0,0,.15), 0 1px 3px 0 rgba(0,0,0,.12);
        @media screen and (max-width: 828px) {
          display: none;
        }
        .month {
          font-size: 22px;
        }
      }
      .meta {
        text-align: center;
        margin-bottom: 32px;
        font-size: 15px;
        .iconfont-essay {
          font-size: 18px;
        }
      }
      .category {
        position: absolute;
        top: 102px;
        left: -12px;
        padding: 4px 8px 4px 21px;
        background-color: #a0ede9;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        border-radius: 0 3px 3px 0;
        border-color: #81cac6;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.09), 0 3px 1px -2px rgba(0,0,0,.15), 0 1px 2px 0 rgba(0,0,0,.12);
        .cate {
          cursor: pointer;
        }
        &:after {
          position: absolute;
          content: "";
          top: 100%;
          left: 0;
          width: 0;
          height: 0;
          border-top: 0 solid transparent;
          border-right-width: 1em;
          border-right-color: inherit;
          border-right-style: solid;
          border-bottom: 1em solid transparent;
          border-left: 0 solid transparent;
          @media screen and (max-width: 828px) {
            display: none;
          }
        }
      }
    }
  }
}
</style>
