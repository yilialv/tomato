<template>
  <el-container id="login">
    <el-header height="30%">
      <p>个人事务管理系统</p>
    </el-header>
    <el-main>
      <el-row justify="center" class="login-input">
        <el-col :span="6">
          <el-input v-model="username" maxlength=20 placeholder="用户名" style="margin-bottom: 20px;" />
          <el-input v-model="password" placeholder="密码" show-password style="margin-bottom: 20px;" />
          <el-button type="primary" @click="login">登录</el-button>
          <router-link style="margin-left: 10px;color: cornflowerblue;" to="/register">去注册</router-link>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>

import {ElMessage} from "element-plus";

export default {
  name: 'Login',
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login: function () {
      const that = this
      let message = '用户名或密码错误'
      let type = 'error'
      let user_data = window.localStorage.getItem('user_data')
      if (user_data !== null) {
        JSON.parse(user_data)['data'].forEach(function(value) {
          if (value['username'] === that.username && value['password'] === that.password) {
            message = '登录成功'
            type = 'success'
            window.localStorage.setItem('login_status', '1')
            that.$router.push('/')
          }
        })
      }
      ElMessage({
        message: message,
        type: type
      })
    }
  }
}
</script>

<style>
#login {
  height: 100%;
  background-color: gray;
}
#login .el-header {
  background-color: black;
}
#login .el-header p {
  font-size: 64px;
  color: white;
}
#login .login-input{
  margin-top: 60px;
}
</style>
