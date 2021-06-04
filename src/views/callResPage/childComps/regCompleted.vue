<template>
  <div class="container">
    <headerSim />
    <div class="content">
      <p>
        <van-icon name="success" />
      </p>
      <h2>注册成功</h2>
      <span>请稍等5分钟后再进行拨打</span>
    </div>

  </div>

</template>
<script>
import headerSim from '@/components/comHeader'
export default {
  name: 'comHeader',
  components: {
    headerSim
  },
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100vh;
  .content {
    padding: 150px 95px 0;
    text-align: center;
    & p {
      background: #06a2ff;
      width: 32px;
      height: 32px;
      line-height: 32px;
      color: #fff;
      font-weight: 600;
      font-size: 30px;
      margin: 0 auto;
      border-radius: 50%;
    }
    & h2 {
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      line-height: 51px;
      color: #383434;
      opacity: 1;
    }
    & span {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      line-height: 27px;
      color: #707070;
      opacity: 1;
    }
  }
}
</style>