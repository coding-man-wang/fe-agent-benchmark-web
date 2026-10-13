import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Role } from '@/types/domain'

export const useSessionStore = defineStore('session', () => {
  const userName = ref('Benchmark Admin')
  const role = ref<Role>('admin')
  const authenticated = ref(true)
  const canManageUsers = computed(() => role.value === 'admin')
  return { userName, role, authenticated, canManageUsers }
})
