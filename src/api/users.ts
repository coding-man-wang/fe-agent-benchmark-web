import { request } from './requestClient'
import { mockGetUser, mockListUsers } from '@/mocks/service'
import type { PageResult, User, UserQuery } from '@/types/domain'

const useMock = import.meta.env.VITE_API_MODE !== 'remote'

export function listUsers(query: UserQuery): Promise<PageResult<User>> {
  if (useMock) return mockListUsers(query)
  return request<PageResult<User>>({ method: 'GET', url: '/users', params: query })
}

export function getUser(id: string): Promise<User> {
  if (useMock) return mockGetUser(id)
  return request<User>({ method: 'GET', url: `/users/${id}` })
}
