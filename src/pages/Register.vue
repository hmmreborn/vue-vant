<template>
  <div class="register">
    <van-row>
      <van-cell-group>
        <van-field
          v-model="phone"
          center
          clearable
          :error-message="sms"
          :error="error"
          label="手机号"
          placeholder="请输入手机号码"
        >
        </van-field>
        <van-field
          v-model="sms"
          center
          clearable
          label="验证码"
          placeholder="请输入验证码"
        >
          <van-button slot="button" size="small" type="info" disabled>发送验证码</van-button>
        </van-field>
        <van-field
          v-model="password"
          type="password"
          label="密码"
          error-message=""
          placeholder="请输入密码"
        />
      </van-cell-group>
      <van-checkbox v-model="checked" style="margin-top: 1rem;font-size: .85rem">同意隐私政策</van-checkbox>
      <van-button size="normal" type="info" block class="register-btn">下一步</van-button>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      phone: '',
      sms: '',
      password: '',
      error: false,
      checked: true
    }
  }
}
</script>

<style scoped lang="scss">
.register{
  padding: 1rem;
  .register-btn{
    margin: 2rem 0;
  }
}
.van-hairline--top-bottom::after{
  border-width: 0px 0px 1px 0;
}
</style>
