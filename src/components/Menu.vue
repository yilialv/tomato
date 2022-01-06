<template>
  <el-menu
    :default-active=index
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    style="border-bottom: 0;"
  >
    <el-menu-item index="/" @click="transaction" style="height: 100%;"><p style="font-size:22px;">事务列表</p></el-menu-item>
    <el-menu-item index="/statistics" @click="statistics" style="height: 100%;"><p style="font-size:22px;">统计</p></el-menu-item>
    <el-menu-item index="/calendar" @click="calendar" style="height: 100%;"><p style="font-size:22px;">日历</p></el-menu-item>
    <el-menu-item index="/tomato" @click="tomato" style="height: 100%;"><p style="font-size:22px;">番茄钟</p></el-menu-item>
    <el-menu-item index="/gant" @click="gant" style="height: 100%;"><p style="font-size:22px;">甘特图</p></el-menu-item>
    <el-menu-item index="/logout" @click="logout" style="height: 100%;"><p style="font-size:22px;">登出</p></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      index: this.$route.path
    }
  },
  methods: {
    transaction: function () {
      this.$router.push('/')
    },
    statistics: function () {
      this.$router.push('/statistics')
    },
    calendar: function () {
      this.$router.push('/calendar')
    },
    tomato: function () {
      this.$router.push('/tomato')
    },
    gant: function () {
      this.$router.push('/gant')
    },
    logout: function () {
      window.localStorage.setItem('login_status', '0')
      this.$router.push('/login')
    }
  },
  watch: {
    $route: function () {
      this.index = this.$route.path
    }
  }
}
</script>

<style scoped>

</style>