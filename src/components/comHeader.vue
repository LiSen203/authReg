<template>
  <header class="simple-header">
    <div class="header-content">
      <div class="back"
           @click="goBack">
        <div v-if="!isback"
             class="backArrow">
        </div>
      </div>
    </div>

  </header>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    back: {
      type: String,
      default: '',
    },
    noback: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: true,
    },
    pointShow: {
      type: Boolean,
      default: true,
    },
    centertext: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['callback'],
  setup (props, ctx) {
    const isback = ref(props.noback);
    const router = useRouter();
    const goBack = () => {
      if (!props.back) {
        router.go(-1);
      } else {
        router.push({ path: props.back });
      }
      ctx.emit('callback');
    };
    return {
      goBack,
      isback,
    };
  },
};
</script>

<style lang="less" scoped>
.simple-header {
  width: 100%;
  height: auto;
  overflow: hidden;
  .header-content {
    height: 40px;
    margin: 10px 13px;
    .back {
      width: 25px;
      height: 25px;
      background: #333;
      border-radius: 50%;
      position: relative;
      .backArrow {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -3px;
        margin-left: -3px;
        width: 6px;
        height: 6px;
        border-bottom: 1px solid #fff;
        border-left: 1px solid #fff;
        transform: rotate(45deg);
      }
    }
  }
}
</style>