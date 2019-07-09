<template>
  <div class="login">
    <van-row class="text-center" style="margin-bottom: 2rem">
      <van-icon name="fire" size="10em" color="#1989fa"/>
    </van-row>
    <van-row>
      <van-cell-group>
        <van-field
          v-model="username"
          clearable
          left-icon="contact"
          :error-message="smg_user"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="password"
          type="password"
          left-icon="other-pay"
          :error-message="smg_pwd"
          placeholder="请输入密码"
        />
      </van-cell-group>
      <van-button size="normal" type="info" block class="login-btn" @click="login">登录</van-button>
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
import api from '../api'
import { Toast } from 'vant'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      smg_user: '',
      smg_pwd: ''
    }
  },
  methods: {
    login () {
      if (this.username === '') {
        this.smg_user = '用户名不能为空'
        return false
      }
      if (this.password === '') {
        this.smg_pwd = '密码不能为空'
        return false
      }
      api.post('https://www.easy-mock.com/mock/5d1db50a7982c0572a9e79fb/jd/user')
        .then(res => {
          res = res.data.data
          let len = res.length
          let userNameArr = []
          let passWordArr = []
          let ses = window.sessionStorage
          console.log(ses)
          for (let i = 0; i < len; i++) {
            userNameArr.push(res[i].username)
            passWordArr.push(res[i].password)
          }
          if (userNameArr.indexOf(this.username) === -1) {
            Toast.fail('账号不存在')
          } else {
            let index = userNameArr.indexOf(this.username)
            if (passWordArr[index] === this.password) {
              ses.setItem('data', res[index].token)
              this.$parent.$data.userTitle = res[index].userTitle
              this.$router.push('/home')
            } else {
              Toast.fail('密码错误')
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
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
