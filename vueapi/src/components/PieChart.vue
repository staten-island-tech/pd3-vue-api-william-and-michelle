<template>
  <div>
    Top 5 Popular Baby Names
    <Pie id="PieChart" :options="chartOptions" :data="chartData"></Pie>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChart',
  components: { Pie },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => ({
        responsive: true,
        maintainAspectRatio: true
      })
    }
  }
}
</script>

<style scoped></style>
