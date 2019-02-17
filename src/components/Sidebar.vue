<style lang="less">
  .sidebar {
    width: 27%;
    float: right;
    letter-spacing: 1px;
    font-family: "Open Sans", "OpenSans", sans-serif;
    @media screen and (max-width: 1020px) {
      display: none;
    }
    .sidebar-item {
      width: 100%;
      background-color: #fff;
      border-radius: 6px;
      margin-bottom: 15px;
      transition: all .2s linear;
      transform: translateY(2px);
      white-space: nowrap;
      &:hover {
        box-shadow: 0 4px 12px 0 #ddd;
        transition: all .2s linear;
        transform: translateY(-2px);
      }
    }
    .catch-me {
      padding: 12px 0 8px;
      margin-top: -2px;
      text-align: center;
      .sweet {
        width: 90%;
        height: 200px;
        min-height: 150px;
        margin: 0 auto;
        background: url("https://wx1.sinaimg.cn/mw690/a2117cdbly1fnu2qzu0v1j20k00baaas.jpg") no-repeat top center;
        background-size: cover;
        border-radius: 6px;
      }
      h2 {
        font-size: 20px;
        color: #ee7878;
        line-height: 2.5;
      }
      .catch-item {
        user-select: none;
        .item-a {
          width: 35px;
          height: 35px;
        }
      }
    }
    .want-a-star {
      padding: 15px;
      .like {
        font-size: 22px;
        font-weight: bold;
        color: lightcoral;
        text-align: center;
        border-radius: 5px;
        padding: 5px 8px;
        line-height: 35px;
        display: block;
        .zh {
          font-size: 18px;
        }
      }
      &:hover {
        .like {
          color: #fff;
          background-color: lightcoral;
        }
      }
    }
    .switch {
      text-align: center;
      line-height: 2.2;
      color: lightcoral;
      font-weight: bold;
      font-size: 18px;
    }
  }
  .btn-hover {
    display: inline-block;
    margin: 0 2px 5px 2px;
    color: #fff;
    background-color: rgba(32, 188, 182,0.8);
    outline: none;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    position: relative;
  }
  .btn-hover:hover {
    background-color: rgb(32,188,182);
    opacity: 1;
  }
  .btn-hover:before,
  .btn-hover:after {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    left: 50%;
    transform: translate(-50%, -150px);
    transition: all .18s ease-out .18s;
  }
  .btn-hover:before {
    content: "";
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-top: 9px solid #666;
  }
  .btn-hover:after {
    content: attr(data-tip);
    transform: translate(-50%, -100px);
    padding: 3px 10px;
    line-height: 26px;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    background-color: #666;
    border-radius: 5px;
    text-align: center;
    white-space: nowrap;

  }
  .btn-hover-slide:before {
    transform: translate(-50%, 14px);
  }
  .btn-hover-slide:after {
    transform: translate(-50%, -14px);
  }
  .btn-hover-slide:hover:before {
    transform: translate(-50%, -12px);
    opacity: 1;
  }
  .btn-hover-slide:hover:after {
    transform: translate(-50%, -43px);
    opacity: 1;
  }
  .icon-rss {
    margin-left: 5px;
  }
</style>

<template>
  <div class="sidebar" v-if="open">
    <section class="catch-me sidebar-item">
      <div class="sweet"></div>
      <h2>Can u catch me ?</h2>
      <div class="catch-item">
        <a href="https://github.com/luyilin" target="_blank" class="item-a btn-hover btn-hover-slide" data-tip="Github"
           @mousedown="clickStatistics('github')">
          <i class="iconfont icon-github"></i>
        </a>
        <a href="https://www.zhihu.com/people/yilin-lu-12/activities" target="_blank" class="item-a btn-hover btn-hover-slide"
           data-tip="知乎" @mousedown="clickStatistics('知乎')">
          <i class="iconfont icon-zhihu"></i>
        </a>
        <a href="http://weibo.com/2719055067/profile?topnav=1&wvr=6&is_all=1" target="_blank" class="item-a btn-hover btn-hover-slide"
           data-tip="Weibo" @mousedown="clickStatistics('weibo')">
          <i class="iconfont icon-weibo"></i>
        </a>
        <a href="https://segmentfault.com/u/yilind" target="_blank" class="item-a btn-hover btn-hover-slide"
           data-tip="Segmentfault" @mousedown="clickStatistics('Segmentfault')">
          <i class="iconfont icon-iconsf"></i>
        </a>
      </div>
      <div class="catch-item">
        <a href="https://www.instagram.com/yilinkkk/" target="_blank" class="item-a btn-hover btn-hover-slide"
           data-tip="Instagram" @mousedown="clickStatistics('Instagram')">
          <i class="iconfont icon-instagram"></i>
        </a>
        <a href="https://t.me/luyilin" target="_blank" class="item-a btn-hover btn-hover-slide"
           data-tip="Telegram" @mousedown="clickStatistics('Telegram')">
          <i class="iconfont icon-telegram"></i>
        </a>
        <a :href="`https://twitter.com/${$themeConfig.twitter}`" target="_blank" class="item-a btn-hover btn-hover-slide"
           data-tip="Twitter" @mousedown="clickStatistics('Twitter')">
          <i class="iconfont icon-twitter"></i>
        </a>
        <!--<a href="https://juejin.im/user/58808d3f570c350062ad010d" target="_blank" class="item-a btn-hover btn-hover-slide"-->
           <!--data-tip="掘金" @mousedown="clickStatistics('掘金')">-->
          <!--<i class="iconfont icon-juejin"></i>-->
        <!--</a>-->
        <!--<a href="http://www.jianshu.com/u/898cb5706881" target="_blank" class="item-a btn-hover btn-hover-slide" data-tip="简书">-->
          <!--<i class="iconfont icon-jian"></i>-->
        <!--</a>-->
        <a href="/feed.json" class="item-a btn-hover btn-hover-slide" target="_blank" data-tip="RSS"
           @mousedown="clickStatistics('RSS')">
          <i class="iconfont icon-rss"></i>
        </a>
        <a href="mailto:luyilin12@gmail.com" target="_blank" class="item-a btn-hover btn-hover-slide" data-tip="Email me!"
           @mousedown="clickStatistics('邮箱')">
          <i class="iconfont icon-email"></i>
        </a>
      </div>
    </section>
    <section class="sidebar-item switch pointer" @click="closeSidebar">Close the sidebar</section>
  </div>
</template>

<script>
export default{
  data() {
    return{
      open: true
    }
  },
  methods: {
    closeSidebar() {
      this.open = false
      this.$emit('closeSidebar')
    },
    clickStatistics (i) {
    }
  }
}
</script>
