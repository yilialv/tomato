<template>
  <el-aside width="25%" id="aside0">
    <el-table :data="table_data" style="width: 100%" :show-header="false" :row-style="rowStyle">
      <el-table-column prop="title" label="Title" />
      <el-table-column label="Operations" align="right">
        <template #default="scope">
          <el-button size="mini" @click="handle_edit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handle_delete(scope.$index, table_data)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button size="mini" type="primary" style="margin-top: 2px" @click="add_table_data">添加事务</el-button>
  </el-aside>
  <el-aside width="25%" id="aside1">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>考试安排</el-breadcrumb-item>
      <el-breadcrumb-item>具体事务</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="sub_table_data" style="width: 100%;margin-top: 2px;" :show-header="false" :row-style="subRowStyle">
      <el-table-column prop="title" label="Title" />
      <el-table-column label="Operations" align="right">
        <template #default="">
          <el-popover placement="right-start" :width="100" trigger="click">
            <template #reference>
              <el-button size="mini" type="primary">更多
              </el-button>
            </template>
            <el-table :data="operation_data" :show-header="false">
              <el-table-column
                property="operation"
                label="operation"
                width="90"
              >
                <template #default="scope"><el-button size="mini" type="primary">{{ scope.row.operation }}</el-button></template>
              </el-table-column>
            </el-table>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <el-button size="mini" type="primary" style="margin-top: 2px" @click="add_sub_table_data">添加具体事务</el-button>
  </el-aside>
  <el-main>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>考试安排</el-breadcrumb-item>
      <el-breadcrumb-item>高数考试</el-breadcrumb-item>
      <el-breadcrumb-item>事务描述</el-breadcrumb-item>
    </el-breadcrumb>
    <el-input
      v-model="textarea"
      :autosize="{ minRows: 10, maxRows: 20 }"
      type="textarea"
      placeholder="请输入事务描述" style="margin-top: 2px;"
    ></el-input>
    <el-row style="margin-top: 5px;">
      <el-col :span="6"><p>重要度(10最高, 1最低): </p></el-col>
      <el-col :span="6"><el-input-number v-model="num1" :min="1" :max="10" /></el-col>
      <el-col :span="6"><p>紧急度(10最高, 1最低): </p></el-col>
      <el-col :span="6"><el-input-number v-model="num2" :min="1" :max="10" /></el-col>
    </el-row>
    <div id="double_degree_chart" style="height: 500px;margin-top: 5px;"></div>
  </el-main>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "Transaction",
  data() {
    return {
      table_data: [{
        title: '今日工作'
      },
      {
        title: '全部工作'
      },
      {
        title: '考试安排'
      },
      {
        title: '读书清单'
      },
      ],
      sub_table_data: [{
        title: '英语考试'
      },
      {
        title: '高数考试'
      },
      {
        title: '人工智能考试'
      },
      {
        title: '工程实践二答辩'
      },
      {
        title: '数字图像处理考试'
      },
      {
        title: '计算机图形学考试'
      }
      ],
      operation_data: [{
        operation: '编辑'
      },
      {
        operation: '完成'
      },
      {
        operation: '时间'
      },
      {
        operation: '番茄钟'
      },
      {
        operation: '删除'
      }],
      textarea: '',
      num1: 8,
      num2: 8
    }
  },
  methods: {
    add_table_data: function () {
      this.table_data.push({
        title: 'new_title'
      })
    },
    handle_delete: function(index, rows) {
      rows.splice(index, 1)
    },
    rowStyle(row) {
      if (row.rowIndex === 2) {
        return 'background: lightblue'
      } else {
        return ''
      }},
    subRowStyle(row) {
      if (row.rowIndex === 1) {
        return 'background: lightblue'
      } else {
        return ''
      }},
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('double_degree_chart'));
    // 绘制图表
    myChart.setOption({
      xAxis: {
        min: 0,
        max: 10
      },
      yAxis: {
        min: 0,
        max: 10
      },
      series: [
        {
          symbolSize: 20,
          data: [
            [8, 8, '高数考试'],
          ],
          colorBy: 'series',
          type: 'scatter',
          label: {
            show: true,
            position: 'top',
            formatter: function(params) {
              return params.value[2]
              }}
        },
          {
          symbolSize: 20,
          data: [
            [6, 6],
            [3, 6],
            [10, 9],
            [2, 2]
          ],
          colorBy: 'series',
          type: 'scatter'
        },
      ]
    })
  }
}
</script>

<style scoped>
.el-aside#aside0 {
  padding: 5px;
}

.el-aside#aside1 {
  background-color: lightgray;
  padding: 5px;
}

.el-main {
  padding: 5px;
}
.select {
  background: red;
}
</style>