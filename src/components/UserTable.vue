<script setup lang="ts">
import type { User } from '@/types/domain'
defineProps<{ users: User[] }>()
</script>
<template>
  <table>
    <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th></tr></thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td><RouterLink :to="`/users/${user.id}`">{{ user.name }}</RouterLink></td>
        <td>{{ user.email }}</td><td>{{ user.role }}</td><td>{{ user.status }}</td>
      </tr>
    </tbody>
  </table>
  <p v-if="users.length === 0" class="muted">No users found.</p>
</template>
