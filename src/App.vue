<template>
  <div id="indicators">
    <span class="indicator-left">0</span>
    <div class="chart">
      <apexchart
        type="radialBar"
        :options="chartOptions"
        :series="[score[0] * 10]"
        class="my-chart"
      />
      <h1 class="text-status">{{ msg }}</h1>
    </div>
    <span class="indicator-right">10</span>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "App",
  props: {
    score: {
      type: Array,
      default: () => [9.0],
    },
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      msg: "",
      series: [1],
      chartOptions: {
        colors: ["#000"],
        chart: {
          type: "radialBar",
          offsetY: -60,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
              margin: 0,
              size: "40%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
            track: {
              background: "#fff",
              strokeWidth: "-10%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: 10,
                show: false,
                color: "#888",
                fontSize: "17px",
              },
              value: {
                offsetY: -10,
                formatter: function (val) {
                  return val / 10;
                },
                color: "#333",
                fontSize: "100px",
                show: true,
              },
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
      },
    };
  },
  created() {
    if (this.score <= 4.4) {
      this.msg = "Baixo";
    } else if (this.score > 4.4 && this.score <= 5.4) {
      this.msg = "Ok";
    } else if (this.score > 5.4 && this.score <= 7.4) {
      this.msg = "Bom";
    } else if (this.score > 7.4 && this.score <= 8.9) {
      this.msg = "Muito Bom";
    } else if (this.score > 8.9 && this.score <= 10.0) {
      this.msg = "Incrível";
    }

    if (this.score >= 0 && this.score < 5) {
      this.chartOptions.colors = ["#E02721"];
    } else if (this.score < 7.5) {
      this.chartOptions.colors = ["#F7CA14"];
    } else if (this.score <= 10) {
      this.chartOptions.colors = ["#31EB70"];
    }
  },
};
</script>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #222;
}

#indicators {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 70%;
  height: 90%;
  margin-top: -50px;
  padding-top: -50px;
  /* background: red; */
  margin: 0 auto;
}

.chart {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.mychart {
  width: 100px;
}

.text-status {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #222;
  font-size: 50px;
  margin-top: -50px;
}

.indicator-left {
  position: relative;
  left: 20%;
  font-size: 30px;
  color: #222;
}

.indicator-right {
  position: relative;
  right: 20%;
  font-size: 30px;
  color: #222;
}
</style>
