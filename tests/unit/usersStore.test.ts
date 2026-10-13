import { createPinia, setActivePinia } from 'pinia'
import { useUsersStore } from '@/stores/users'

describe('users store', () => {
  beforeEach(() => setActivePinia(createPinia()))
  it('resets page when changing filters', () => {
    const store = useUsersStore()
    store.page = 3
    store.setKeyword('alice')
    expect(store.page).toBe(1)
    store.page = 2
    store.setStatus('active')
    expect(store.page).toBe(1)
  })
})
