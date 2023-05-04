<template>
  <router-link :to="nmPath" class="card">
    <h2>{{ name }}</h2>
    <h3>{{ firstname }}</h3>
    <h3>{{ rank }}</h3>
    <h3>{{ birthyear }}</h3>
    <h3>{{ count }}</h3>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  name: String,
  firstname: String,
  rank: String,
  birthyear: String,
  count: String
})
const nmPath = computed(() => {
  return `/ApiData/${props.data.nm}`
})
</script>

<style scoped>
.card {
  width: 7%;
  height: 55px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
