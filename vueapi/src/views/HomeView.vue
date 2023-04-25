<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const names = ref('')
async function getNames() {
  let res = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  let data = await res.json()
  names.value.values = data.results
}
onMounted(() => {
  getNames()
})
</script>

<style scoped></style>
