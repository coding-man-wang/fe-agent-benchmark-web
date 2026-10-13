<script setup lang="ts">
import type { UserStatus } from '@/types/domain'

defineProps<{ keyword: string; status: UserStatus | 'all' }>()
const emit = defineEmits<{ 'update:keyword': [value: string]; 'update:status': [value: UserStatus | 'all'] }>()
</script>
<template>
  <div class="row">
    <input aria-label="Search users" :value="keyword" placeholder="Search users" @input="emit('update:keyword', ($event.target as HTMLInputElement).value)" />
    <select aria-label="User status" :value="status" @change="emit('update:status', ($event.target as HTMLSelectElement).value as UserStatus | 'all')">
      <option value="all">All statuses</option><option value="active">Active</option><option value="disabled">Disabled</option>
    </select>
  </div>
</template>
