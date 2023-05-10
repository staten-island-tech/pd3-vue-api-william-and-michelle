<template>
  <div class="container">
    <h3>Rank of Top 10 Names in the US</h3>
    <BarChart></BarChart>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BarChart from '../components/BarChart.vue'
const babies = ref('')
async function getBabies() {
  let res = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  let data = await res.json()
  console.log(data)
}
onMounted(async () => {
  await getBabies()
})
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
