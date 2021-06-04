<template>
  <div class="warpper">
    <div class="content">
      <div class="tores">
        <div class="live">
          <img src="@/assets/images/home/call.png"
               alt="">
          <span></span>
          <span></span>
        </div>
        <router-link to="realname">
          <span>立即注册</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.content {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../../../assets/images/home/homebg.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  .tores {
    position: absolute;
    left: 50%;
    bottom: 80px;
    text-align: center;
    transform: translateX(-50%);
    .callBg {
      padding-bottom: 10px;
      > img {
        width: 120px;
        height: 120px;
        background: none;
      }
    }
    a {
      color: #fff;
      text-decoration: none;
    }
    > span {
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #fff;
      display: inline-block;
    }
  }
}
.live {
  position: relative;
  width: 90px;
  height: 90px;
  margin-bottom: 25px;
}
.live img {
  width: 90px;
  height: 90px;
  z-index: 0;
}
@keyframes living {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 0; /*圆形放大的同时，透明度逐渐减小为0*/
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}
.live span {
  position: absolute;
  width: 90px;
  height: 90px;
  left: 0;
  bottom: 0;
  background: #fff;
  border-radius: 50%;
  -webkit-animation: living 3s linear infinite;
  z-index: -1;
}
.live span:nth-child(2) {
  -webkit-animation-delay: 1.5s; /*第二个span动画延迟1.5秒*/
}
</style>