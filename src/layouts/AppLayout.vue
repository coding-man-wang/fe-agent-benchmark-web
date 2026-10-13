<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
</script>
<template>
  <AppHeader />
  <div class="shell"><AppSidebar /><main class="content"><RouterView /></main></div>
</template>
<style scoped>
.shell { display: flex; }.content { flex: 1; min-width: 0; padding: 24px; }
</style>
