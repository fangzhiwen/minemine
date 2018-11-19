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

let loadDisqus = () => {
  (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://minemine-2.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })()
}

export default {
  props: ['page'],

  components: {
    Main,
    MainPage,
    Disqus
  },

  mounted() {
    loadDisqus()
  },

  data() {
    return {
      linkList: [
        {
          "author": "DIYgod",
          "email": "i@html.love",
          "url": "https://www.anotherhome.net",
          "avatar": "https://s.gravatar.com/avatar/2c0e7571f32704cc893de555a669865b?s=100&r=x&d=retro",
          "desc": "Write the Code. Change the World."
        },
        {
          "author": "笈川可可",
          "email": "0xbbc@0xbbc.com",
          "url": "https://blog.0xbbc.com/",
          "avatar": "https://s.gravatar.com/avatar/a9556814c9b7e1a180bcc0f0032c6a77?s=100&r=x&d=retro",
          "desc": "神楽坂碧玺 -> 笈川可可"
        },
        {
          "author": "初夏小朋友",
          "email": "janervy@qq.com",
          "url": "http://www.61cx.cn",
          "avatar": "https://s.gravatar.com/avatar/102feee3704a0e8869426524dc3a1360?s=100&r=x&d=retro",
          "desc": "一个可爱的狗博主2333"
        },
        {
          "author": "Mashiro",
          "email": "adadam@qq.com",
          "url": "https://2heng.xin",
          "avatar": "https://s.gravatar.com/avatar/cd2b3a164c977539712929f66cad335c?s=100&r=x&d=retro",
          "desc": "樱花庄的白猫"
        },
        {
          "author": "蝉時雨",
          "email": "1124590931@qq.com",
          "url": "https://chanshiyu.com/#/",
          "avatar": "https://dn-coding-net-production-pp.qbox.me/2af1a90f-4b60-4abd-a7b3-a64a903aa921.png",
          "desc": "蝉鸣如雨 花宵道中"
        },
        {
          "author": "lovesnowbest",
          "email": "lovesnowbest@gmail.com",
          "url": "https://lovesnowbest.site",
          "avatar": "https://view.moezx.cc/images/2018/02/01/favicon.jpg",
          "desc": "愿你成为自己想成为的人"
        },
        {
          "author": "siphils",
          "email": "",
          "url": "https://siphils.com",
          "avatar": "https://secure.gravatar.com/avatar/86a41c9425019d1651a6717021a8ca83?s=200&r=G&d=",
          "desc": "Life is what you make it."
        },
        {
          "author": "墨心",
          "email": "i@lituo.im",
          "url": "https://autre.me",
          "avatar": "https://c.disquscdn.com/uploads/users/27712/6232/avatar92.jpg?1516026838",
          "desc": "墨墨的来，看一看这里的精彩"
        },
        {
          "author": "立花水",
          "email": "958142428@qq.com",
          "url": "https://i.onesan.org",
          "avatar": "https://s.gravatar.com/avatar/d43602b3fc54c761def75893e37ed6fc?s=100&r=x&d=retro",
          "desc": "一个喜欢化学， 改样式写前端的 phper"
        },
        {
          "author": "Loren",
          "email": "1351207341@qq.com",
          "url": "https://lozz.cc",
          "avatar": "https://s.gravatar.com/avatar/e85ef1bf149c19e972692d00f0771669?s=100&r=x&d=retro",
          "desc": "coding使我快乐！！！"
        },
        {
          "author": "MonoLogueChi",
          "email": "xxwhite@foxmail.com",
          "url": "https://www.xxwhite.com",
          "avatar": "https://s.gravatar.com/avatar/a70ed099981735ebdf3d7c71dc507559?s=100&r=x&d=retro",
          "desc": "一个小白搞机的记事本"
        },
        {
          "author": "姬长信",
          "email": "192666378@qq.com",
          "url": "https://blog.isoyu.com/",
          "avatar": "https://s.gravatar.com/avatar/d3b99ff0b01d1e9f4272aef67678d374?s=100&r=x&d=retro",
          "desc": "有个东西貌似很有趣 要不然做一个吧！"
        },
        {
          "author": "援军",
          "email": "menhood@menhood.wang",
          "url": "http://www.menhood.wang/",
          "avatar": "https://s.gravatar.com/avatar/17842af77c9727c64e6468ad6d9d3f96?s=100&r=x&d=retro",
          "desc": "生命在于折腾 (ง •̀_•́)ง"
        },
        {
          "author": "寒枫秋叶",
          "email": "admin@maplefeng.com",
          "url": "https://www.maplefeng.com",
          "avatar": "https://s.gravatar.com/avatar/69acc2a50f42572754c776482af2490e?s=100&r=x&d=retro",
          "desc": ""
        },
        {
          "author": "十载北林",
          "email": "1143524493@qq.com",
          "url": "https://blog.kingsr.cc",
          "avatar": "https://s.gravatar.com/avatar/dce77d27fc8bd42ef671230baf5795a8?s=100&r=x&d=retro",
          "desc": ""
        },
        {
          "author": "浅生",
          "email": "767612931@qq.com",
          "url": "http://www.yimmei.com",
          "avatar": "https://s.gravatar.com/avatar/d629c0771a45b3a22de68ec434d55bf5?s=100&r=x&d=retro",
          "desc": "一枚小运营"
        },
        {
          "author": "jckhao",
          "email": "jkchaom@gmail.com",
          "url": "https://jkchao.cn",
          "avatar": "https://s.gravatar.com/avatar/e80cd8ae02976201e5b5db4870db5ebf?s=100&r=x&d=retro",
          "desc": "Code, read, and music."
        },
        {
          "author": "重庆崽儿Brand",
          "email": "2769536052@qq.com",
          "url": "http://www.brandhuang.com",
          "avatar": "https://tvax1.sinaimg.cn/crop.0.0.996.996.50/a9819918ly8fig6d3odcaj20ro0ro10j.jpg",
          "desc": "前端菜鸟进阶中。。。"
        },
        {
          "author": "白裤衩",
          "email": "",
          "url": "http://www.neverlove.me/",
          "avatar": "https://s.gravatar.com/avatar/33e858394ac4f2c236808f22517d8ded?s=100&r=x&d=retro",
          "desc": "最痛苦的事 不是失败 是我本可以"
        },
        {
          "author": "miiiku",
          "email": "",
          "url": "https://miiiku.xyz/",
          "avatar": "https://s.gravatar.com/avatar/7b5a0b07a98895278cfa862b1f32ae8f?s=100&r=x&d=retro",
          "desc": "我在这里"
        },
        {
          "author": "乱码",
          "email": "",
          "url": "https://luan.ma/",
          "avatar": "https://en.gravatar.com/userimage/146884562/1b76133191c006b7e0d549b0ed73a23c.jpg",
          "desc": ""
        }
      ]
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
