<template>
  <div class="chart">
    <PieChart v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import PieChart from '../components/PieChart.vue'

export default {
  name: 'PieView',
  components: { PieChart },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: ['']
      }
    }
  },

  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json?')
      let data = await res.json()
      const first = data.filter((name) => name.rank === '1')
      this.chartData.datasets[0].data.push(first.name.cnt.value)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style></style>
