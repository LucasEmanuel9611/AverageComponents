<template>
  <div id="chart">
    <apexchart
      v-if="this.cor"
      type="radialBar"
      :options="chartOptions"
      :series="score"
      :colors="['#E02721']"
    />
    <h1 class="text-status">{{ msg }}</h1>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "App",
  props: {
    msg: String,
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      score: [4],
    
      chartOptions: {
        colors: [this.cor],
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#f1f1f1",
              strokeWidth: "20%",
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2,
              },
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -2,
                fontSize: "22px",
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },

        labels: ["Average Results"],
      },
    };
  },
  created() {
    this.score <= 4.4
      ? (this.msg = "Baixo")
      : this.score > 4.4 && this.score <= 5.4
      ? (this.msg = "Ok")
      : this.score > 5.4 && this.score <= 7.4
      ? (this.msg = "Bom")
      : this.score > 7.4 && this.score <= 8.9
      ? (this.msg = "Muito Bom")
      : this.score > 8.9 && this.score <= 10.0
      ? (this.msg = "Incrível")
      : null;
  },
  computed: {
    cor:  () => {
      if (this.score >= 0 && this.score < 5) return "#E02721";
      if (this.score < 7.5) {
        return "#F7CA14";
      }
      if (this.score <= 10) {
        return "#31EB70";
      }
    },
  },
};
</script>

<style>
#chart {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 90%;
  margin-top: -10px;
}

.text-status {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
