<template>
  <el-main>
    <el-card class="box-card">
      <el-row>
        <el-col :span="3" style="height: 30px;line-height: 30px;">总事务：10</el-col>
        <el-col :span="3" style="height: 30px;line-height: 30px;">已完成：3</el-col>
        <el-col :span="3" style="height: 30px;line-height: 30px;">使用天数：7</el-col>
        <el-col :span="3" :offset="12" style="height: 30px;line-height: 30px;">你比<el-tag type="success">1%</el-tag>的用户更勤奋。</el-col>
      </el-row>
    </el-card>
    <el-row>
      <el-col :span="12" style="padding-top: 5px;padding-right: 5px;padding-bottom: 5px;">
        <el-card class="box-card">
          <el-row style="height: 175px">
            <el-col :span="8" style="height: 100px;line-height: 100px;"><p style="font-size: 60px; margin: 0">0</p><p style="color: lightblue; margin-top: -50px">今日已完成</p></el-col>
            <el-col :span="8" style="height: 100px;line-height: 100px;"><p style="font-size: 60px; margin: 0">0</p><p style="color: lightblue; margin-top: -50px">今日番茄</p></el-col>
            <el-col :span="8" style="height: 100px;line-height: 100px;"><p style="font-size: 60px; margin: 0">0h0m</p><p style="color: lightblue; margin-top: -50px">今日专注时长</p></el-col>
          </el-row>
          <el-row style="height: 175px">
            <el-col :span="8" style="height: 100px;line-height: 100px;"><p style="font-size: 60px; margin: 0">3</p><p style="color: lightblue; margin-top: -50px">总已完成</p></el-col>
            <el-col :span="8" style="height: 100px;line-height: 100px;"><p style="font-size: 60px; margin: 0">0</p><p style="color: lightblue; margin-top: -50px">总番茄</p></el-col>
            <el-col :span="8" style="height: 100px;line-height: 100px;"><p style="font-size: 60px; margin: 0">0h0m</p><p style="color: lightblue; margin-top: -50px">总专注时长</p></el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding-top: 5px;padding-left: 5px;padding-bottom: 5px;">
        <el-card class="box-card">
          <div id="chart_1" style="width: 100%;height:350px;"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" style="padding-top: 5px;padding-right: 5px;padding-bottom: 5px;">
        <el-card class="box-card">
          <div id="chart_2" style="width: 100%;height:350px;"></div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding-top: 5px;padding-left: 5px;padding-bottom: 5px;">
        <el-card class="box-card">
          <div id="chart_3" style="width: 100%;height:350px;"></div>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "Statistics",
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart_1 = echarts.init(document.getElementById('chart_1'));
    let myChart_2 = echarts.init(document.getElementById('chart_2'));
    let myChart_3 = echarts.init(document.getElementById('chart_3'));
    // 绘制图表
    myChart_1.setOption({
      title: {
        text: '最近已完成趋势'
      },
      tooltip: {},
      xAxis: {
        data: ['30日', '31日', '1日', '2日', '3日', '4日', '今天']
      },
      yAxis: {
        name: '单位: 个'
      },
      series: [
        {
          name: '事务数',
          type: 'line',
          data: [1, 3, 0, 1, 2, 1, 0]
        }
      ]
    })

    myChart_2.setOption({
      title: {
        text: '最近番茄数趋势'
      },
      tooltip: {},
      xAxis: {
        data: ['30日', '31日', '1日', '2日', '3日', '4日', '今天']
      },
      yAxis: {
        name: '单位: 个'
      },
      series: [
        {
          name: '番茄数',
          type: 'line',
          data: [2, 5, 0, 1, 1, 3, 2]
        }
      ]
    })

    myChart_3.setOption({
      title: {
        text: '最近专注时长趋势'
      },
      tooltip: {},
      xAxis: {
        data: ['30日', '31日', '1日', '2日', '3日', '4日', '今天']
      },
      yAxis: {
        name: '单位: h'
      },
      series: [
        {
          name: '专注时长',
          type: 'bar',
          data: [0.83, 2.08, 0, 0.41, 0.41, 1.25, 0.83]
        }
      ]
    })
  }
}
</script>

<style scoped>
.el-main {
  background-color: lightgray;
}
</style>