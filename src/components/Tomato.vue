<template>
  <el-main>
    <el-form style="margin-top: 100px">
      <el-form-item>
        <el-row justify="space-around">
          <el-col :span="4">
          <el-select v-model="value1" placeholder="选择事务组" style="width: 100%">
            <el-option
              v-for="item in options1"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-col>
          <el-col :span="4">
            <el-select v-model="value2" placeholder="选择事务" style="width: 100%">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-col :span="12">
                <p style="font-size: 18px;line-height: 40px;margin: 0">番茄钟个数: </p>
              </el-col>
              <el-col :span="12">
                <el-input-number v-model="num" :min="1" :max="10" style="width: 100%" />
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-button type="primary">开始番茄钟</el-button>
            <el-button type="danger">停止</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <el-row style="margin-top: 100px">
      <el-col :span="12">
        <el-progress type="dashboard" :percentage="80" width="600" stroke-width="60">
          <template #default="">
            <span class="percentage-value">5:00</span>
          </template>
        </el-progress>
      </el-col>
      <el-col :span="12">
        <el-image
          style="width: 600px; height: 600px"
          :src="url"
          fit="fill"
        ></el-image>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: "Tomato",
  data() {
    return {
      value1: '考试安排',
      value2: '高数考试',
      options1: ['今日工作', '全部工作', '考试安排', '读书清单'],
      options2: ['英语考试', '高数考试', '人工智能考试', '工程实践二答辩', '数字图像处理考试', '计算机图形学考试'],
      num: 1,
      url: require('../assets/tomato.jpeg')
    }
  }
}
</script>

<style scoped>

.el-main {
  line-height: 200px;
  background-color:orangered;
}
</style>