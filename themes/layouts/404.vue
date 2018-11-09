<style lang="less">
  html, body, #app {
    width: 100%;
    height: 100%;
  }
  .no-auth {
    background-color: #34495e;
    color: #fff;
    font-weight: bold;
    text-align: center;
    width: 100%;
    height: 100%;
    .main {
      background: url('../assets/img/no-auth-bg.png') center 45% no-repeat;
      background-size: 50%;
      height: 100%;
      position: relative;
      @media (max-width: 730px) {
        background-size: 90%;
      }
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 42%;
        left: 50%;
        transform: translateX(-50%);
        img {
          width: 20%;
          min-width: 80px;
          max-width: 150px;
          margin-right: 5px;
        }
        span {
          font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
          font-size: 60px;
          letter-spacing: 2px;
        }
      }
      .tip {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 16px;
        line-height: 2;
      }
      .connect-wrap {
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        img {
          width: 50%;
        }
        p {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
<template>
  <div class="no-auth">
    <div class="main">
      <div class="title">
        <img class="circle" src="../assets/img/circle.png">
        <span>ops!</span>
      </div>
      <p class="tip">404 error ...</p>
      <router-link class="connect-wrap" to="/">
        <p>Go back to minemine.</p>
        <img src="../assets/img/rocket.png">
      </router-link>
    </div>
  </div>
</template>
