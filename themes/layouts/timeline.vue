<template>
  <div id="app">
    <Main>
      <div class="essay-item" slot="content">
        <timeline timelineTheme="#FFD9C9">
          <timeline-title>2018</timeline-title>
          <timeline-item>
            <span>01-29</span>
            <a href="/2018/01/29/create-react-component-like-a-pro">流畅地开发一个 react 组件</a>
          </timeline-item>
          <timeline-title>2017</timeline-title>
          <timeline-item>
            <span>12-06</span>
            <a href="/2017/12/06/aoba-resume">为凉风青叶做的简历生成工具</a>
          </timeline-item>
          <timeline-item>
            <span>12-01</span>
            <a href="/2017/12/01/internet-novel">一名曾经沉迷网络小说的少女的自白</a>
          </timeline-item>
          <timeline-item>
            <span>11-28</span>
            <a href="/2017/11/28/old-time">旧时光</a>
          </timeline-item>
          <timeline-item>
            <span>06-29</span>
            <a href="/2017/06/29/ombres">读偷影子的人 Le voleur d'ombres</a>
          </timeline-item>
          <timeline-item>
            <span>04-19</span>
            <a href="/2017/04/19/vue-pagination">使用 vue2.0 实现一个简洁的分页组件</a>
          </timeline-item>
          <timeline-item>
            <span>01-29</span>
            <a href="/2017/01/29/git">记在小本本上的 git 操作</a>
          </timeline-item>
        </timeline>
      </div>
    </Main>
  </div>
</template>

<script>
import Main from './main'
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'

export default {
  props: ['page'],

  components: {
    Main,
    Timeline,
    TimelineItem,
    TimelineTitle
  }
}
</script>
