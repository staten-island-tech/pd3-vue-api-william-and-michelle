<template>
  <router-link :to="bbPath" class="card">
    <h2>{{ babyname }}</h2>
    <h3>{{ count }}</h3>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
props = defineProps({
  babies: Object,
  rnk: Number
})
const bbPath = computed(() => {
  return `./BabyData/${props.babies.babyname}`
})
</script>

<style scoped>
.card {
  width: 28%;
  height: 500px;
  background-color: grey;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
}
</style>
