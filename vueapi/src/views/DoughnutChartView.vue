<template>
  <div class="container">
    Top 5 Baby Names
    <Doughnut class="doughnutchart" id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import PieChart from '../components/PieChart.vue'
import {} from 'vue'

export default {
  name: 'DoughnutChart',
  components: { PieChart },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['1st', '2nd', '3rd', '4th', '5th'],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: ['#caf0f8', '#ADD8f9', '#caf', '#add', 'rgb(39, 101, 152)']
      }
    }
  },

  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
      let data = await res.json()
      console.log(res)
      const first = data.filter((name) => name.rnk === '1')
      this.chartData.datasets[0].data.push(first.nm.value)
      /*  const second = data.filter((name) => name.rnk === '2')
      this.chartData.datasets[0].data.push(second.nm.cnt.value)
      const third = data.filter((name) => name.rnk === '3')
      this.chartData.datasets[0].data.push(third.nm.cnt.value)
      const fourth = data.filter((name) => name.rnk === '4')
      this.chartData.datasets[0].data.push(fourth.nm.cnt.value)
      const fifth = data.filter((name) => name.rnk === '5')
      this.chartData.datasets[0].data.push(fifth.nm.cnt.value) */
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space around;
}
</style>
