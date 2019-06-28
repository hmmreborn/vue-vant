<template>
  <div class="login">
    <van-row class="text-center" style="margin-bottom: 2rem">
      <van-icon name="bulb-o" size="10em" color="#1989fa"/>
    </van-row>
    <van-row>
      <van-cell-group>
        <van-field
          v-model="username"
          clearable
          left-icon="contact"
          error-message=""
          placeholder="请输入用户名"
        />
        <van-field
          v-model="password"
          type="password"
          left-icon="other-pay"
          error-message=""
          placeholder="请输入密码"
        />
      </van-cell-group>
      <van-button size="normal" type="info" block class="login-btn">登录</van-button>
    </van-row>
    <van-row>
      <van-col span="12" class="text-left">
        <router-link to="/register">立即注册</router-link>
      </van-col>
      <van-col span="12" class="text-right">
        <router-link to="/">忘记密码？</router-link>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      sms: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .login{
    padding: 1rem;
    .text-center{text-align: center}
    .text-left{text-align: left;}
    .text-right{text-align: right;}
    a{color: #666;font-size: .85rem}
    .login-btn{
      margin: 2rem 0 .5rem;
    }
  }
</style>
