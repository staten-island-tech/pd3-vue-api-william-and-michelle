<template>
  <div class="container">
    <Doughnut class="doughnutchart" id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  data:()=> ({
    chartData: {
      chartOptions: {
        responsive: true,

    },
    loaded: false,
    chartData: {
      labels: [
        '1st',
      '2nd',
      '3rd',
      '4th',
      '5th',
      '6th',
      '7th',
      '8th',
      '9th',
      '10th'
    ],
    datasets: [
      {
        label: 'Count of Each Ranked Name'},
      backgroundColor: [
      '#b6feff',
            '#92feff',
            '#80feff',
            '#6dfdff',
            '#5bfdff',
            '#28fdff',
            '#07fcff',
            '#00e3e6',
            '#00c3c5',
            '#00a2a4',
            '#008283',
            '#006162'

      ],
    data: [131,109,88,71,71,60,57,53,48,43,42]
      }
    }
  })
    try {
      const { data } = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
      console.log(data)
      this.chartdata = data

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
  mounted: function () {}
}
</script>

<style scoped></style>
