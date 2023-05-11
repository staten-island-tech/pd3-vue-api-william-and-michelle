<template>
  <div>
    <h1>Top 5 Baby Names</h1>
    <DoughnutChart></DoughnutChart>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import DoughnutChart from '../components/DoughnutChart.vue'
const stuff = ref('') //with ref, if we need some data to update regularly like with an async function, ref lets you
async function getbabies() {
  let result = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  let data = await result.json()
  console.log(data)
}
onMounted(() => {
  //onMounted lets you run the async function once the componenet is mounted
  getbabies()
})
</script>

<style scoped></style>
