<script setup lang="ts">
import { useSessionStore } from '@/stores/session'
const session = useSessionStore()
</script>
<template>
  <header class="header">
    <strong>FE Agent Benchmark Console</strong>
    <span class="muted">{{ session.userName }} · {{ session.role }}</span>
  </header>
</template>
<style scoped>
.header { height: 58px; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; background: #fff; border-bottom: 1px solid #e5e9f0; }
</style>
