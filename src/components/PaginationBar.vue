<script setup lang="ts">
defineProps<{ page: number; totalPages: number }>()
const emit = defineEmits<{ change: [page: number] }>()
</script>
<template>
  <div class="row" aria-label="pagination">
    <button :disabled="page <= 1" @click="emit('change', page - 1)">Previous</button>
    <span>Page {{ page }} / {{ totalPages }}</span>
    <button :disabled="page >= totalPages" @click="emit('change', page + 1)">Next</button>
  </div>
</template>
