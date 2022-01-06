<template>
  <el-main id="gant">Main</el-main>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "Gant",
  mounted() {
    let HEIGHT_RATIO = 0.6;
    let DIM_CATEGORY_INDEX = 0;
    let DIM_TIME_ARRIVAL = 1;
    let DIM_TIME_DEPARTURE = 2;
    let _cartesianXBounds = [];
    let _cartesianYBounds = [];
    let _rawData = {
      flight: {
        data: [
          [8, 1640966400000, 1641352800000, '学习机器学习'],
          [7, 1641066400000, 1641152800000, '看西瓜书'],
          [6, 1640966400000, 1641252800000, '健身'],
          [5, 1640976400000, 1641252800000, '学游泳'],
          [4, 1640966400000, 1641252800000, '读书'],
          [3, 1640966400000, 1641052800000, '英语考试'],
          [2, 1641312000000, 1641398400000, '高数考试'],
          [1, 1640966400000, 1641398400000, '背单词']
        ],
        dimensions: ["Parking Apron Index", "Arrival Time", "Departure Time","Flight Number"]
      },
      parkingApron: {
        data: [
          ["AB94", "W", true],
          ["AB95", "W", true],
          ["AB95", "W", true],
          ["AB95", "W", true],
          ["AB95", "W", true],
          ["AB95", "W", true],
          ["AB95", "W", true],
          ["AB95", "W", true],
          ["AB95", "W", true],
        ],
        dimensions: ["Name", "Type", "Near Bridge"]
      }
    }
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('gant'));
    // 绘制图表
    myChart.setOption(makeOption())
    function makeOption() {
      return {
        animation: false,
        toolbox: {
          left: 20,
          top: 0,
          itemSize: 20,
          feature: {
          }
        },
        title: {
          text: '事务系统甘特图',
          left: 'center'
        },
        grid: {
          show: true,
          top: 70,
          bottom: 20,
          left: 100,
          right: 20,
          backgroundColor: '#fff',
          borderWidth: 0
        },
        xAxis: {
          type: 'time',
          position: 'bottom',
          splitLine: {
            lineStyle: {
              color: ['#E9EDFF']
            }
          },
          axisLine: {
            show: true
          },
          axisTick: {
            lineStyle: {
              color: '#929ABA'
            }
          },
          axisLabel: {
            color: '#929ABA',
            inside: true,
            align: 'center',
            fontSize: 18
          }
        },
        yAxis: {
          axisTick: { show: false },
          splitLine: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false },
          min: 0,
          max: _rawData.parkingApron.data.length
        },
        series: [
          {
            id: 'flightData',
            type: 'custom',
            renderItem: renderGanttItem,
            dimensions: _rawData.flight.dimensions,
            encode: {
              x: [DIM_TIME_ARRIVAL, DIM_TIME_DEPARTURE],
              y: DIM_CATEGORY_INDEX
            },
            data: _rawData.flight.data
          }
        ]
      };
    }
    function renderGanttItem(params, api) {
      var categoryIndex = api.value(DIM_CATEGORY_INDEX);
      var timeArrival = api.coord([api.value(DIM_TIME_ARRIVAL), categoryIndex]);
      var timeDeparture = api.coord([api.value(DIM_TIME_DEPARTURE), categoryIndex]);
      var coordSys = params.coordSys;
      _cartesianXBounds[0] = coordSys.x;
      _cartesianXBounds[1] = coordSys.x + coordSys.width;
      _cartesianYBounds[0] = coordSys.y;
      _cartesianYBounds[1] = coordSys.y + coordSys.height;
      var barLength = timeDeparture[0] - timeArrival[0];
      // Get the heigth corresponds to length 1 on y axis.
      var barHeight = api.size([0, 1])[1] * HEIGHT_RATIO;
      var x = timeArrival[0];
      var y = timeArrival[1] - barHeight;
      var flightNumber = api.value(3) + '';
      var flightNumberWidth = echarts.format.getTextRect(flightNumber).width;
      var text =
        barLength > flightNumberWidth + 40 && x + barLength >= 180
          ? flightNumber
          : '';
      var rectNormal = clipRectByRect(params, {
        x: x,
        y: y,
        width: barLength,
        height: barHeight
      });
      var rectText = clipRectByRect(params, {
        x: x,
        y: y,
        width: barLength,
        height: barHeight
      });
      return {
        type: 'group',
        children: [
          {
            type: 'rect',
            ignore: !rectNormal,
            shape: rectNormal,
            style: api.style({ fill: 'CornflowerBlue' })
          },
          {
            type: 'rect',
            ignore: !rectText,
            shape: rectText,
            style: api.style({
              fill: 'transparent',
              stroke: 'transparent',
              text: text,
              fontSize: 22,
              textFill: 'yellow'
            })
          }
        ]
      };
    }
    function clipRectByRect(params, rect) {
      return echarts.graphic.clipRectByRect(rect, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
      });
    }
    // -------------
    //  Enable Drag
    // -------------
  }
}
</script>

<style scoped>
.el-main {
}
</style>