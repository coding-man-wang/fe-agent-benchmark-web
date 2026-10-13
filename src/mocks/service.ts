import { orders, users } from './database'
import type { Order, PageResult, User, UserQuery } from '@/types/domain'

const delay = (ms = 80) => new Promise((resolve) => setTimeout(resolve, ms))

export async function mockListUsers(query: UserQuery): Promise<PageResult<User>> {
  await delay()
  const keyword = query.keyword?.trim().toLowerCase() ?? ''
  let result = users.filter((user) => !keyword || `${user.name} ${user.email}`.toLowerCase().includes(keyword))
  if (query.status && query.status !== 'all') result = result.filter((user) => user.status === query.status)
  const start = (query.page - 1) * query.pageSize
  return { items: result.slice(start, start + query.pageSize), total: result.length, page: query.page, pageSize: query.pageSize }
}

export async function mockGetUser(id: string): Promise<User> {
  await delay()
  const user = users.find((item) => item.id === id)
  if (!user) throw new Error('User not found')
  return user
}

export async function mockListOrders(): Promise<Order[]> {
  await delay()
  return [...orders]
}
