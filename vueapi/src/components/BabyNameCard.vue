<template>
  <router-link :to="bbnmPath" class="card">
    <h2>{{ babyname }}</h2>
    <h3>{{ count }}</h3>
  </router-link>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'BabyNameCard',
  props: {
    babyname: String,
    count: Number
  }
}
const bbnmPath = computed(() => {})
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
