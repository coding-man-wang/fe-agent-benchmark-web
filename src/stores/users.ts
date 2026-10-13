import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { listUsers } from '@/api/users'
import type { User, UserQuery, UserStatus } from '@/types/domain'

export const useUsersStore = defineStore('users', () => {
  const items = ref<User[]>([])
  const total = ref(0)
  const loading = ref(false)
  const error = ref('')
  const keyword = ref('')
  const status = ref<UserStatus | 'all'>('all')
  const page = ref(1)
  const pageSize = ref(10)
  const totalPages = computed(() => Math.max(1, Math.ceil(total.value / pageSize.value)))

  async function fetchUsers() {
    loading.value = true
    error.value = ''
    try {
      const query: UserQuery = { keyword: keyword.value, status: status.value, page: page.value, pageSize: pageSize.value }
      const result = await listUsers(query)
      items.value = result.items
      total.value = result.total
    } catch (cause) {
      error.value = cause instanceof Error ? cause.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  function setKeyword(value: string) {
    keyword.value = value
    page.value = 1
  }

  function setStatus(value: UserStatus | 'all') {
    status.value = value
    page.value = 1
  }

  function setPage(value: number) {
    page.value = Math.min(Math.max(1, value), totalPages.value)
  }

  return { items, total, loading, error, keyword, status, page, pageSize, totalPages, fetchUsers, setKeyword, setStatus, setPage }
})
