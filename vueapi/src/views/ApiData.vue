<template>
  <div class="container">
    <NameCard
      v-for="babies in names"
      :key="babies"
      :firstname="babies.nm"
      :rank="babies.rnk"
      :birthyear="babies.brth_yr"
      :count="babies.cnt"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NameCard from '../components/NameCard.vue'
const names = ref('')
async function getNames() {
  let res = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json?')
  let data = await res.json()
  names.value = data
  console.log(names)
}
onMounted(() => {
  getNames()
})
</script>
