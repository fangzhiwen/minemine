<template>
  <div class="nav-wrap headroom">
    <nav>
      <div class="tab-wrap">
        <saber-link to="/" class="tab tab-item">
          <div class="a">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-folder"></use>
            </svg>
            <span>Mine</span>
          </div>
        </saber-link>
        <saber-link to="/timeline" class="tab tab-item">
          <div class="a">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pencil"></use>
            </svg>
            <span>时间轴</span>
          </div>
        </saber-link>
        <div class="tab tab-item" @mouseenter="textShow = true" @mouseleave="textShow = false">
          <div class="a" @click="textShowFn">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-notebook"></use>
            </svg>
            <span>文字</span>
          </div>
          <div class="tab-1" v-show="textShow">
            <saber-link v-for="(item, index) in $themeConfig.tags" :key="index" :to="'/tags/' + item.path" class="li-1 tab-item">
              <div class="a">{{ item.name }}</div>
            </saber-link>
          </div>
        </div>
        <div class="tab tab-item" @mouseenter="codeShow = true" @mouseleave="codeShow = false">
          <div class="a" @click="codeShowFn">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-computer"></use>
            </svg>
            <span>code</span>
          </div>
          <ul class="tab-1" v-show="codeShow">
            <li v-for="(item, index) in $themeConfig.codeDemo" class="li-1" :key="index">
              <a :href="item.link" target="_blank">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <saber-link class="tab tab-item" to="/friends">
          <div class="a">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-doughnut"></use>
            </svg>
            <span>友人账</span>
          </div>
        </saber-link>
        <saber-link class="tab tab-item" to="/comment">
          <div class="a">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chat"></use>
            </svg>
            <span>留言板</span>
          </div>
        </saber-link>
        <saber-link class="tab tab-item" to="/admire">
          <div class="a">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-beer"></use>
            </svg>
            <span>赞赏</span>
          </div>
        </saber-link>
        <saber-link class="tab tab-item" to="/about">
          <div class="a">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-girl"></use>
            </svg>
            <span>关于我</span>
          </div>
        </saber-link>
      </div>
    </nav>
  </div>
</template>
<script>
let Headroom
// fix: ReferenceError: document is not defined
if (process.browser) {
  Headroom = require('headroom.js')
}

export default{
  mounted() {
    const myElement = document.querySelector('.nav-wrap')
    const headroom  = new Headroom(myElement, {
      "tolerance": 10,
      "offset": 300
    })

    headroom.init();
  },
  data(){
    return {
      textShow: false,
      codeShow: false
    }
  },
  methods: {
    textShowFn() {
      this.textShow = !this.textShow
    },
    codeShowFn() {
      this.codeShow = !this.codeShow
    }
  }
}
</script>

<style lang="less">
.nav-wrap {
  font-weight: lighter;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  background-color: #fa9289;
  opacity: 0.8;
  z-index: 10;
  letter-spacing: 1px;
  nav {
    max-width: 80%;
    margin: 0 auto;
    font-family: 'Indie Flower', PingFangSC-Light, Avenir, Helvetica, 'Hiragino Sans GB', Arial, 'Microsoft YaHei', sans-serif;
    @media screen and (max-width: 1075px) {
      max-width: 100% !important;
    }
    .tab-wrap {
      float: left;
      line-height: 0;
      color: #fff;
      @media screen and (max-width: 1075px) {
        display: flex;
        float: none;
      }
      .tab {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        font-weight: bold;
        position: relative;
        &:hover {
          background: #f87468;
        }
        .a {
          display: inline-block;
          padding: 0 15px;
          white-space: nowrap;
          @media screen and (max-width: 1075px) {
            width: 100%;
            padding: 0;
            text-align: center;
          }
          .icon {
            @media screen and (max-width: 685px) {
              display: none;
            }
          }
        }
        .tab-1 {
          width: 100%;
          list-style: none;
          background-color: #f87468;
          position: absolute;
          top: 40px;
          .li-1 {
            display: block;
            text-align: left;
            &:hover {
              background-color: #fa9289;
            }
            a, .a {
              display: block;
              text-align: center;
              padding: 0;
            }
          }
        }
      }
      .tab-item {
        cursor: pointer;
        &:nth-child(3), &:nth-child(4) {
          @media screen and (max-width: 685px) {
            display: none;
          }
        }
        @media screen and (max-width: 1075px) {
          -webkit-box-flex: 1;
          flex: 1;
        }
      }
      .ripple-click {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        z-index: 1;
        .wave {
          position: absolute;
          border-radius: 100%;
          z-index: -1;
          animation: wave .75s ease-out both;
          transform: scale(0);
          pointer-events: none;
        }
        @keyframes wave {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      }
    }
  }
}
.nav-slide-enter-active, .nav-slide-leave-active {
  transition: all .3s linear;
}
.nav-slide-enter, .nav-slide-leave-active {
  transform: translateY(-40px);
}
</style>
