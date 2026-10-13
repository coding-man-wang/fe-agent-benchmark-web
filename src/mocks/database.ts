import type { Order, User } from '@/types/domain'

export const users: User[] = Array.from({ length: 37 }, (_, index) => ({
  id: `U${String(index + 1).padStart(3, '0')}`,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index === 0 ? 'admin' : index % 3 === 0 ? 'operator' : 'viewer',
  status: index % 7 === 0 ? 'disabled' : 'active',
  createdAt: new Date(Date.UTC(2026, 0, (index % 28) + 1)).toISOString(),
}))

export const orders: Order[] = Array.from({ length: 24 }, (_, index) => ({
  id: `O${String(index + 1).padStart(3, '0')}`,
  userId: users[index % users.length].id,
  total: 20 + index * 3.5,
  status: index % 5 === 0 ? 'cancelled' : index % 2 === 0 ? 'paid' : 'pending',
  createdAt: new Date(Date.UTC(2026, 1, (index % 28) + 1)).toISOString(),
}))
