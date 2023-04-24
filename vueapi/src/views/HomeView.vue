<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted } from 'vue'
const data = ref('')
async function getName() {
  let res = await fetch(
    'https://data.cityofnewyork.us/resource/25th-nujf.json?$query=SELECT%20%60brth_yr%60%2C%20%60gndr%60%2C%20%60ethcty%60%2C%20%60nm%60%2C%20%60cnt%60%2C%20%60rnk%60%0AORDER%20BY%0A%20%20%60brth_yr%60%20DESC%20NULL%20LAST%2C%0A%20%20%60gndr%60%20ASC%20NULL%20LAST%2C%0A%20%20%60ethcty%60%20ASC%20NULL%20LAST%2C%0A%20%20%60rnk%60%20ASC%20NULL%20LAST'
  )
}
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
