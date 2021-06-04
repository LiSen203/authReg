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
        <van-icon name="clock-o"
                  size="16" />
        <van-count-down :time="time" />
        <span v-if="time>0">剩余</span>
        <span v-if="time===0">重新获取验证码</span>
      </div>
      <div class="contact">
        <a href="javascript:;">联系客服</a>
      </div>
      <div class="error_message">验证码错误,请重新输入</div>
      <div class="backOrNext">
        <van-button plain
                    type="primary"
                    @click="back">返回</van-button>
        <van-button type="primary"
                    @click="ToNext">下一步</van-button>
      </div>
      <!-- <van-field v-model="phone"
                 clearable
                 maxlength="15"
                 label="手机号"
                 left-icon="phone-circle-o"
                 placeholder="请输入手机号">
        <van-button v-if='phone.length >= 6 && showCountdown == true'
                    ref="smsCode"
                    size="mini">
          <van-count-down :time="state.time"
                          style="color:#777"
                          @finish='countDownFinish'
                          format=" ss 秒后重试" />
        </van-button>
        <van-button v-else-if="phone.length >=6"
                    @click="getSmsCode"
                    size="mini">获取验证码</van-button>
        <van-button v-else
                    disabled
                    size="mini">获取验证码</van-button>
      </van-field> -->

    </div>

  </div>
</template>
<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import headerSim from '@/components/comHeader'
export default {
  name: "CodeInput",
  components: {
    headerSim,
  },
  setup () {
    const value = ref('');
    const showKeyboard = ref(true);
    const time = ref(60 * 1000)
    const router = useRouter()
    const state = reactive({
      show: true,
      phone: '',//手机号
      showCountdown: false//是否显示倒计时
    })
    const getSmsCode = () => {
      state.showCountdown = true//这里只是简单的显示倒计时逻辑获取验证码需要具体的接口
    }
    const countDownFinish = () => {//倒计时结束后的方法
      state.showCountdown = false ////隐藏倒计时
    }
    const sendCode = () => {
      if (state.time == 0) {
        state.show = false
      }
    }
    const back = () => {
      router.go(-1)
    }
    const ToNext = () => {
      router.push('/regcompleted')
    }
    return {
      state,
      getSmsCode,
      countDownFinish,
      sendCode,
      back,
      time,
      ToNext,
      value,
      showKeyboard,
    }
  }
}
</script>
<style lang="less" scoped>
.codeContent {
  margin: 36px 40px 0 40px;
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
    margin-top: 41px;
    font-size: 15px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    line-height: 26px;
    color: #ff0606;
    opacity: 1;
  }
  .backOrNext {
    margin-top: 50px;
    text-align: center;
    & button {
      margin: 0 8px;
      width: 130px;
      opacity: 1;
      border-radius: 15px;
    }
  }
}
</style>