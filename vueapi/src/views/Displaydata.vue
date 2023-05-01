<template>
  <div></div>
</template>

<script>
import { ref, onMounted } from 'vue'
const names = ref('')
async function getAppData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  let data = await res.json()
  names.value = data
}
onMounted(() => {
  getAppData()
})
</script>

<style lang="scss" scoped></style>
