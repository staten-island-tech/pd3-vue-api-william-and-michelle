<template>
  <router-link :to="bbPath" class="card">
    <h2>{{ babies.nm }}</h2>
    <h3>{{ babies.rnk }}</h3>
  </router-link>
</template>

<!-- <script setup>
import { computed } from 'vue'
props = defineProps({
  babies: Object
})

const bbPath = computed(() => {
  return `./BabyData/${props.babies.babyname}`
})
</script> -->
<script>
import { computed } from 'vue'
export default {
  props: {
    babies: Object,
    rnk: String
  }
}
const bbPath = computed(() => {
  return `/BabyData/${props.babies.nm}`
})
</script>
<style scoped>
.card {
  width: 28%;
  height: 500px;
  background-color: powderblue;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
}
</style>
