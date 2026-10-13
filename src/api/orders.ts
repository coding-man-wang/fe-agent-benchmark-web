import { request } from './requestClient'
import { mockListOrders } from '@/mocks/service'
import type { Order } from '@/types/domain'

const useMock = import.meta.env.VITE_API_MODE !== 'remote'

export function listOrders(): Promise<Order[]> {
  if (useMock) return mockListOrders()
  return request<Order[]>({ method: 'GET', url: '/orders' })
}
