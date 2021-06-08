<template>
  <div class="container">
    <headerSim></headerSim>
    <!-- 验证码 -->
    <div class="codeContent">
      <div class="text-area">
        <div class="title">
          <span>验证码已发送至153****5259,请在下方输入4位数字验证码</span>
        </div>
        <van-password-input :value="value"
                            :length="4"
                            :mask="false"
                            :focused="showKeyboard"
                            @focus="showKeyboard = true" />
        <!-- 数字键盘 -->
        <van-number-keyboard v-model="value"
                             :show="showKeyboard"
                             @blur="showKeyboard = false" />
      </div>
      <div class="clockTime">
        <van-count-down :time="time"
                        @finish="onFinish"
                        ref="countDown" />
        <span v-if="showTime">剩余</span>
        <span @click="getCode"
              v-else>{{code_ts}}</span>
      </div>
      <div class="contact">
        <a href="javascript:;">联系客服</a>
      </div>
      <div class="error_message"
           v-if="errorInfo">验证码错误,请重新输入</div>
      <div class="backOrNext">
        <van-button plain
                    type="primary"
                    @click="back">返回</van-button>
        <van-button type="primary"
                    :disabled="attcode"
                    @click="ToNext">下一步</van-button>
      </div>

    </div>
  </div>
</template>
<script>
import { reactive, ref, toRefs, watch } from 'vue'
import { useRouter } from 'vue-router'
import headerSim from '@/components/comHeader'
export default {
  name: "CodeInput",
  components: {
    headerSim
  },
  setup () {
    const value = ref('');
    const showKeyboard = ref(true);
    const time = ref(60 * 1000)
    const router = useRouter()
    const state = reactive({
      showTime: true,//展示获取验证码及倒计时判断,
      attcode: true,//判断下一步按钮是否可用
      code_ts: '重新获取验证码',
      errorInfo: false,
      count: 0
    })
    const param = reactive({
      phone: '',//手机号
    })
    const getCode = () => {
      time.value = 60000
      console.log(time);
    };
    const onFinish = () => {
      time.value = state.count
      state.showTime = false;
    }
    const back = () => {
      router.go(-1)
    }
    const ToNext = () => {
      router.push('/regcompleted')
    }
    watch(time, (newVal) => {
      console.log(newVal);

    });

    // 验证输入验证码
    watch(value, (newVal) => {
      console.log(newVal.length);
      if (newVal.length === 4 && newVal) {
        state.errorInfo = false;
        state.attcode = false
      } else {
        state.errorInfo = true;
        state.attcode = true
      }
    });
    return {
      ...toRefs(state, param),
      back,
      getCode,
      time,
      ToNext,
      value,
      onFinish,
      showKeyboard,
    }
  }
}
</script>
<style lang="less" scoped>
.codeContent {
  height: 420px;
  margin: 36px 40px 0 40px;
  position: relative;
  .text-area {
    .title {
      font-size: 18px;
      margin-right: 35px;
      margin-bottom: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 30px;
      color: #423b41;
      opacity: 1;
    }
  }
  .clockTime {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;

    & i {
      margin-right: 9px;
    }
    & span {
      margin-left: 9px;
      font-size: 15px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      line-height: 26px;
      color: #383434;
      opacity: 1;
    }
  }
  .contact {
    text-align: center;
    > a {
      text-decoration: none;
      color: #06a2ff;
      font-size: 15px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      color: #06a2ff;
      opacity: 1;
    }
  }
  .error_message {
    text-align: center;
    height: 75px;
    width: 295px;
    font-size: 15px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    line-height: 75px;
    color: #ff0606;
    opacity: 1;
  }
  .backOrNext {
    position: absolute;
    text-align: center;
    bottom: 0;
    margin: 50px 0;
    & button {
      margin: 0 8px;
      width: 130px;
      border-radius: 15px;
    }
  }
}
</style>