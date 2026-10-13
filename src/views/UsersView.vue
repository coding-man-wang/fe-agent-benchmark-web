<script setup lang="ts">
import { onMounted } from 'vue'
import UserFilters from '@/components/UserFilters.vue'
import UserTable from '@/components/UserTable.vue'
import PaginationBar from '@/components/PaginationBar.vue'
import { useUsersStore } from '@/stores/users'
import type { UserStatus } from '@/types/domain'

const store = useUsersStore()
async function changeStatus(value: UserStatus | 'all') { store.setStatus(value); await store.fetchUsers() }
async function changePage(page: number) { store.setPage(page); await store.fetchUsers() }
async function search(value: string) { store.setKeyword(value); await store.fetchUsers() }
onMounted(() => store.fetchUsers())
</script>
<template>
  <section class="grid">
    <div><h1>Users</h1><p class="muted">Search, filter and inspect application users.</p></div>
    <div class="card grid">
      <UserFilters :keyword="store.keyword" :status="store.status" @update:keyword="search" @update:status="changeStatus" />
      <p v-if="store.error" class="error">{{ store.error }}</p>
      <p v-if="store.loading" class="muted">Loading...</p>
      <UserTable v-else :users="store.items" />
      <PaginationBar :page="store.page" :total-pages="store.totalPages" @change="changePage" />
    </div>
  </section>
</template>
