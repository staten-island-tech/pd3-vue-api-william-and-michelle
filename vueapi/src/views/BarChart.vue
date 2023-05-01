<template>
  <h1>Popular Baby Names</h1>
  <div class="chart"><Bar v-if="loaded" :data="chartData" /></div>
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
  props :{

  }

  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted() {
    this.loaded = false

    try {
      const { userlist } = await fetch('/api/userlist')
      this.chartdata = userlist

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}


async mounted(){
    try{
        const res = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
        let data = await res.json()

    }
}
</script>
