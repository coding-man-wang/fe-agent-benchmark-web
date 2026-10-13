<template>
  <aside class="sidebar">
    <RouterLink to="/">Dashboard</RouterLink>
    <RouterLink to="/users">Users</RouterLink>
    <RouterLink to="/orders">Orders</RouterLink>
  </aside>
</template>
<style scoped>
.sidebar { width: 190px; padding: 20px; background: #111827; color: #fff; min-height: calc(100vh - 58px); display: flex; flex-direction: column; gap: 14px; }
.router-link-active { font-weight: 700; }
</style>
