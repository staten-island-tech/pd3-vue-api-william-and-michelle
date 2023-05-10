<script>
import { RouterLink, RouterView } from 'vue-router'

import BarChart from '../src/components/BarChart.vue'

export default {
  name: 'App',
  components: { BarChart }
}
</script>

<template>
  <nav>
    <RouterLink to="/"></RouterLink>
    <RouterView />
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 5rem;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav {
  margin-left: -1rem;
  font-size: 5rem;

  padding: 1rem 0;
  margin-top: 1rem;
}
</style>
