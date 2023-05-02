<template>
  <div>
    <canvas id="case-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

async function api() {
  let res = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  let data = await res.json()

  let a = data.map((e) => {
    return e.brth_yr
  })

  let b = data.map((e) => {
    return e.rnk
  })

  new Chart(document.getElementById('case-chart'), {
    data: {
      datasets: [
        {
          type: 'bar',
          label: 'Popular Baby Names',
          data: b
        }
      ],
      labels: a
    }
  })
}

export default {}
</script>

<style scoped></style>
