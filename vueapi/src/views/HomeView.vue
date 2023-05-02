<template>
  <div class="container">
    <BabyNameCard v-for="(baby, index) in babies" :key="baby.nm" :rnk="index + 1" :babies="baby" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BabyNameCard from '../components/BabyNameCard.vue'
const babies = ref('')
async function getBabies() {
  let res = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  let data = await res.json()
  babies.value = data
}
onMounted(() => {
  getBabies()
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
