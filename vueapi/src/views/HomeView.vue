<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted } from 'vue'
const name = ref('')
async function getName() {
  let res = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  let data = await res.json()
  let 2019 = data.filter(year)
  let sorted2019 = 2019.sort()
  name.value = sorted2019
}

onMounted(() => {
  getName()
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
