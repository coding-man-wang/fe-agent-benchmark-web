export type Role = 'admin' | 'operator' | 'viewer'
export type UserStatus = 'active' | 'disabled'

export interface User {
  id: string
  name: string
  email: string
  role: Role
  status: UserStatus
  createdAt: string
}

export interface Order {
  id: string
  userId: string
  total: number
  status: 'pending' | 'paid' | 'cancelled'
  createdAt: string
}

export interface PageResult<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
}

export interface UserQuery {
  keyword?: string
  status?: UserStatus | 'all'
  page: number
  pageSize: number
}
