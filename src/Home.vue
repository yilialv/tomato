<template>
  <el-container style="height: 100%">
      <el-header height="10%"><Menu style="height: 100%;"/></el-header>
      <el-container>
        <router-view name="home"></router-view>
      </el-container>
    </el-container>
</template>

<script>
import Menu from './components/Menu'

export default {
  name: 'Home',
  components: {
    Menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  line-height: 600px;
  padding: 0;
}
</style>
