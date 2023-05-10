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
    <RouterLink to="/">Bar Chart</RouterLink>
    <RouterLink to="/doughnutchart">Doughnut Chart</RouterLink>
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

<<<<<<< HEAD
nav {
  margin-left: -1rem;
  font-size: 5rem;

  padding: 1rem 0;
  margin-top: 1rem;
=======
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
>>>>>>> linegraph
}
</style>
