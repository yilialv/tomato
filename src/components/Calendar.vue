<template>
  <el-main>
    <el-calendar>
      <template #dateCell="{ data }">
        <p>
          {{ data.day.split('-').slice(1).join('-') }}
        </p>
        <p style="color: coral;">
          {{ data.day.split('-').slice(1).join('-') === '01-01' ? '买票回家': '' }}
          {{ data.day.split('-').slice(1).join('-') === '01-04' ? '英语考试': '' }}
          {{ data.day.split('-').slice(1).join('-') === '01-04' ? '复习微积分': '' }}
          {{ data.day.split('-').slice(1).join('-') === '01-10' ? '工程实践二答辩': '' }}
          {{ data.day.split('-').slice(1).join('-') === '01-17' ? '高数考试': '' }}
        </p>
      </template>
    </el-calendar>
  </el-main>
</template>

<script>
export default {
  name: "Calendar"
}
</script>

<style scoped>
.el-main {
}
</style>