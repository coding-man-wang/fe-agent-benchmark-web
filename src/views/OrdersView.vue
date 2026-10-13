<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { listOrders } from '@/api/orders'
import type { Order } from '@/types/domain'
const orders = ref<Order[]>([])
const loading = ref(true)
const error = ref('')
onMounted(async () => {
  try { orders.value = await listOrders() }
  catch (cause) { error.value = cause instanceof Error ? cause.message : 'Unable to load orders' }
  finally { loading.value = false }
})
</script>
<template>
  <section class="grid">
    <h1>Orders</h1><p v-if="loading">Loading...</p><p v-else-if="error" class="error">{{ error }}</p>
    <div v-else class="card"><table><thead><tr><th>ID</th><th>User</th><th>Total</th><th>Status</th></tr></thead><tbody><tr v-for="order in orders" :key="order.id"><td>{{ order.id }}</td><td>{{ order.userId }}</td><td>${{ order.total.toFixed(2) }}</td><td>{{ order.status }}</td></tr></tbody></table></div>
  </section>
</template>
