<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navTab">
    <NavTab />
  </div>
</template>

<script setup>
import NavTab from '.components/NavTab.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>