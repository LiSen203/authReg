<template>
  <div class="container">

    <div class="warpper">
      <van-form @submit="onSubmit"
                autocomplete="off">
        <h2>实名信息</h2>
        <div class="item">
          <label>姓名</label>
          <van-field v-model="state.username"
                     name="username"
                     autocomplete="off"
                     placeholder="用户名"
                     :rules="[{ required: true, message: '请填写用户名' }]" />
        </div>
        <div class="item">
          <label>身份证</label>
          <van-field v-model="state.IdCard"
                     type="digit"
                     name="IdCard"
                     label="身份证"
                     placeholder="身份证信息"
                     :rules="[{ required: true, message: '请填写身份证号' },{validator, message: '身份证号码格式错误！'}]" />
        </div>
        <div class="item">
          <label>归属地</label>
          <van-field v-model="state.placeAttr"
                     type="text"
                     name="placeAttr"
                     label="归属地"
                     placeholder="请输入归属地"
                     :rules="[{ required: true, message: '请填写归属地' }]" />
        </div>
        <div class="item SexBox">
          <label>性别</label>
          <div class="selectSex">
            <van-radio-group v-model="checked"
                             direction="horizontal">
              <van-radio name="1">
                <img :src="require('@/assets/images/boy.png')" /><span>男</span>
              </van-radio>
              <van-radio name="2">
                <img :src="require('@/assets/images/girl.png')" /><span>女</span>
              </van-radio>
            </van-radio-group>
          </div>
        </div>
        <div class="item">
          <label>年龄</label>
          <van-field v-model="state.age"
                     type="number"
                     name="age"
                     maxlength="2"
                     placeholder="年龄"
                     label="年龄"
                     :rules="[{ required: true, message: '请输入年龄' }]" />
        </div>

        <div class="submitBtn">
          <van-button round
                      block
                      type="primary"
                      native-type="submit">下一步
          </van-button>
        </div>
      </van-form>
    </div>

  </div>
</template>
<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'
export default {
  setup () {
    const checked = ref('1')
    const router = useRouter()
    const state = reactive({
      username: '',
      IdCard: '420323199901220132',
      placeAttr: '',
      age: '',
    })
    // 身份证校验
    const validator = (val) => {
      const card15 = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$/
      const card18 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
      return card15.test(val) || card18.test(val)
    }
    const onSubmit = (values) => {
      if (!values) {
        return
      } else {
        router.push('/phoneauth')
      }
    }
    return {
      state,
      validator,
      checked,
      onSubmit
    }
  }

}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  overflow: hidden;
}
.warpper {
  padding: 21px 18px 0px;
  .item {
    height: 110px;
    > label {
      display: block;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      padding: 5px 0 5px;
      line-height: 30px;
      color: #1c1c1c;
      opacity: 1;
    }
  }
  .SexBox {
    height: 80px;
  }
  .selectSex {
    display: flex;
    align-items: center;
    & label {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #1c1c1c;
      opacity: 1;
    }
  }
}
/deep/ .van-cell {
  padding: 3px 0rem;
}
/deep/.van-field__label {
  display: none !important;
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

/deep/.van-field__error-message {
  color: #ee0a24;
  margin-top: 3px;
  font-size: 0.32rem;
  text-align: left;
  margin-left: 8px;
}
/deep/.van-radio__label {
  > img {
    display: inline-block;
    line-height: 32px;
    margin-right: 5px;
    margin-top: 5px;
  }
}
.submitBtn {
  margin-top: 15px;
}
</style>