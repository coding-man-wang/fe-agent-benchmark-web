<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{ initialName: string; initialEmail: string }>()
const emit = defineEmits<{ submit: [payload: { name: string; email: string }] }>()
const name = ref(props.initialName)
const email = ref(props.initialEmail)
const nameError = computed(() => !name.value.trim() ? 'Name is required' : name.value.length > 20 ? 'Name must be 20 characters or less' : '')
const emailError = computed(() => /.+@.+\..+/.test(email.value) ? '' : 'Enter a valid email')
const valid = computed(() => !nameError.value && !emailError.value)
function submit() { if (valid.value) emit('submit', { name: name.value.trim(), email: email.value.trim() }) }
</script>
<template>
  <form class="grid" @submit.prevent="submit">
    <label>Name <input aria-label="Name" v-model="name" /></label>
    <span v-if="nameError" class="error">{{ nameError }}</span>
    <label>Email <input aria-label="Email" v-model="email" /></label>
    <span v-if="emailError" class="error">{{ emailError }}</span>
    <button class="primary" :disabled="!valid" type="submit">Save</button>
  </form>
</template>
