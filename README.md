<template>
  <div id="chart">
    <apexchart type="radialBar" :options="chartOptions" :series="score" />
    <h1 class="text-status">{{ msg }}</h1>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "App",
  props: {
     msg: String
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      score: [4],
      chartOptions: {
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
              background: "#e7e7e7",
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
   mounted() {
     this.score <= 4.4 ? this.msg = 'Baixo' : this.score > 4.4 && this.score <= 5.4 ? this.msg = "Ok" : this.score > 5.4 && this.score <= 7.4 ? this.msg = "Bom" : this.score > 7.4 && this.score <= 8.9 ? this.msg = "Muito Bom" : this.score > 8.9 && this.score <= 10.0 ? this.msg = "Incrível" : null


  },
};
</script>

<style>
#chart {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  min-height: 90%;
  margin-top: -10px;
}
</style>
