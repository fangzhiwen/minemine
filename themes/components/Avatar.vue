<template>
  <header>
    <h1 @click="refresh" class="main-title pointer"></h1>
    <div class="intro animated bounceInUp">
      <img class="avatar animated" src="https://wx2.sinaimg.cn/mw690/a2117cdbly1fnu37j8tfkj20cs0cst91.jpg">
      <h2>Write something for my love.</h2>
    </div>
  </header>
</template>

<script>
import { typing } from '../utils/index.js'

export default{
  mounted() {
    let title = document.querySelector('.main-title')
    typing(title, this.$themeConfig.title, 1000/15)
  },
  methods: {
    refresh() {
      this.$router.go({
        path: this.$route.fullPath,
        force: true 
      })
    }
  }
}
</script>

<style lang="less">
.index-wrap {
  header {
    height: 620px;
    background: url("https://ooo.0o0.ooo/2017/02/08/589ac29fe230a.jpg") no-repeat;
    background-size: cover;
    text-align: center;
    margin-bottom: 120px;
    @media screen and (max-width: 828px) {
      height: 240px;
      margin-bottom: 0;
    }
    h1 {
      display: inline-block;
      color: #fff;
      margin-top: 220px;
      font-family: Fredericka, Helvetica, 'Hiragino Sans GB', Arial, 'Microsoft YaHei', sans-serif;
      letter-spacing: 4px;
      font-weight: 300;
      font-size: 60px;
      user-select: none;
      @media screen and (max-width: 828px) {
        margin-top: 100px;
      }
    }
    .intro {
      width: 520px;
      height: 230px;
      background-color: rgba(255,255,255, .5);
      margin: 200px auto 0;
      padding: 25px;
      border-radius: 10px;
      text-align: center;
      @media screen and (max-width: 828px) {
        display: none;
      }
      .avatar {
        width: 130px;
        height: 130px;
        margin: 0 auto 10px;
        border-radius: 50%;
        &:hover {
          -webkit-animation: tada 1s;
          animation: tada 1s;
          box-shadow: 0 0 12px 0 #fff;
        }
      }
      h2 {
        font-size: 26px;
        color: #f39999;
        font-family: IndieFlower, Helvetica, 'Hiragino Sans GB', Arial, 'Microsoft YaHei', sans-serif;
        letter-spacing: 1px;
      }
    }
  }
}
</style>