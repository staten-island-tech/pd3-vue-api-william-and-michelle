<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BarChart from '../src/components/BarChart.vue'
export default {
  name: 'App',
  components: { BarChart }
}
</script>

<template>
  <div>
    <RouterLink to="/about">hgtgtg</RouterLink>
    <RouterView />
  </div>
</template>

<script>
// import NavTab from '.components/NavTab.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
