<template>
  <div>
    <div class="container">
      <span>404</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notfound',
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
}
</style>