<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getUser } from '@/api/users'
import UserProfileForm from '@/components/UserProfileForm.vue'
import type { User } from '@/types/domain'

const route = useRoute()
const user = ref<User | null>(null)
const loading = ref(true)
const error = ref('')
const saved = ref(false)
onMounted(async () => {
  try { user.value = await getUser(String(route.params.id)) }
  catch (cause) { error.value = cause instanceof Error ? cause.message : 'Unable to load user' }
  finally { loading.value = false }
})
function save() { saved.value = true }
</script>
<template>
  <section class="grid">
    <h1>User detail</h1>
    <p v-if="loading" class="muted">Loading...</p>
    <p v-else-if="error" class="error">{{ error }}</p>
    <div v-else-if="user" class="card grid">
      <strong>{{ user.name }}</strong><span class="muted">{{ user.id }}</span>
      <UserProfileForm :initial-name="user.name" :initial-email="user.email" @submit="save" />
      <p v-if="saved" class="success">Saved locally for benchmark demo.</p>
    </div>
  </section>
</template>
