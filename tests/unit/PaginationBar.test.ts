import { mount } from '@vue/test-utils'
import PaginationBar from '@/components/PaginationBar.vue'

describe('PaginationBar', () => {
  it('emits the next page', async () => {
    const wrapper = mount(PaginationBar, { props: { page: 1, totalPages: 3 } })
    await wrapper.findAll('button')[1].trigger('click')
    expect(wrapper.emitted('change')?.[0]).toEqual([2])
  })
})
