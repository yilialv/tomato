<template>
  <el-main style="background-color: gray;height: 100%;">
    <el-row justify="center" class="login-input" style="margin-top: 100px;">
      <el-col :span="6">
        <p style="font-size: 22px;">新用户注册</p>
        <el-input v-model="username" maxlength=20 placeholder="用户名" style="margin-bottom: 20px;" />
        <el-input v-model="password" placeholder="密码" show-password style="margin-bottom: 20px;" />
        <el-button type="primary" @click="register">注册</el-button>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  name: 'Register',
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    register: function () {
      ElMessage({
        message: '注册成功',
        type: 'success'
      })
      let user_data = window.localStorage.getItem('user_data')
      if (user_data !== null) {
        user_data = JSON.parse(user_data)
        let id = user_data['id'] + 1
        user_data['data'].append({id: id, username: this.username, password: this.password})
      } else
        user_data = {data: [{id: 0, username: this.username, password: this.password}], id: 0}
      window.localStorage.setItem('user_data', JSON.stringify(user_data))
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
