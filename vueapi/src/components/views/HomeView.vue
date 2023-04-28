<script>
import TheWelcome from '../components/TheWelcome.vue'
import Chart from 'chart.js/auto'
import { ref } from 'vue'
const name = ref('')
async function getName() {
  let res = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  name.value = await res.json()
  let data = name.value
  // let sorted2019 = data2019.sort()

  console.log(data)
  return data
}
export default{
  async mounted() {
    let x = await getName()
    let a = x.map((e) => {
      return e.nm
    })
    console.log(a)
    let b = x.map((e) => {
      return e.cnt
    })
    console.log(b)
    new Chart(document.getElementbyId('chart'), {
      type: 'bar',
      data: {
        labels: a,
        datasets: [
          {
            label: 'Aashds',
            data: b
          }
        ]
      }
    })
  }
}
</script>

<template>
  <main>
    <canvas id="chart"></canvas>
  </main>
</template>
