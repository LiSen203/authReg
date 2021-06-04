<template>
  <div class="container">
    <headerSim />
    <div class="phoneAuth">
      <van-form @submit="onSubmit">
        <div class="item">
          <label for="phone">手机认证</label>
          <van-field v-model="state.phone"
                     name="phone"
                     type="tel"
                     autocomplete="off"
                     placeholder="账号/手机号"
                     :rules="[{ required: true, message: '请填写手机号码' },{validator, message: '手机号码格式错误'}]" />
        </div>
        <div class="getCodeNext">
          <van-button round
                      block
                      type="primary"
                      native-type="submit">提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import headerSim from '@/components/comHeader'
import { Toast } from 'vant';
export default {
  name: 'header',
  components: {
    headerSim,
  },
  setup () {
    const router = useRouter()
    const state = reactive({
      phone: "",
      // 手机号码校验
    })
    // 身份证校验
    const validator = (value) => {
      return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(
        value)
    }
    const onSubmit = (value) => {
      if (!value) {
        return Toast('请输入手机号码')
      } else {
        router.push('/phonecode')
      }
    }
    return {
      state,
      onSubmit,
      validator,
    }
  }
}
</script>
<style lang="less" scoped>
.phoneAuth {
  padding: 51px 18px 0px;
  .item {
    height: 120px;
    > label {
      display: block;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      padding: 12px 0 13px;
      line-height: 34px;
      color: #1c1c1c;
      opacity: 1;
    }
    /deep/.van-field__body {
      width: 339px;
      height: 35px;
      margin-left: 3px;
      line-height: 35px;
      border: none;
      background: #f4f5f7;
      opacity: 1;
      padding-left: 6px;
      outline: none;
      border-radius: 9px;
    }
  }
  .getCodeNext {
    margin-top: 50px;
  }
}
</style>