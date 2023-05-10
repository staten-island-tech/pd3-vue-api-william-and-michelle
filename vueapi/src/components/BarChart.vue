<template>
  <div class="container">
    <Bar class="barchart" id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  async mounted() {
    this.loaded = false

    try {
      const { data } = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
      console.log(data)
      this.chartdata = data
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
  data: () => ({
    chartData: {
      labels: [
        'Chloe',
        'Olivia',
        'Mia',
        'Sophia',
        'Emma',
        'Amelia',
        'Charlotte',
        'Emily',
        'Grace',
        'Isabella',
        'Ella'
      ],
      datasets: [
        {
          label: 'Rank of Name',
          backgroundColor: [
            '#d20af5',
            '#dd9b22',
            '#94c738',
            '#3ec167',
            '#f20d3a',
            '#55a9aa',
            '#7a2ed1',
            '#3090cf',
            '#fbeb04',
            '#f66c09'
          ],
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
      ]
    }
  })
}
</script>
