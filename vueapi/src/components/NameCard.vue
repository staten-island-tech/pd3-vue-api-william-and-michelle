<template>
  <div class="card">
    <h2>{{ names.nm }}</h2>
    <h3>{{ names.rnk }}</h3>
    <h3>{{ names.brth_yr }}</h3>
    <h3>{{ names.cnt }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    names: Object,
    nm: String,
    rnk: Number,
    brth_yr: Number,
    cnt: Number
  }
}
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
