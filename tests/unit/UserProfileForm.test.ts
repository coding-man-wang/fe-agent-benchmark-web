import { mount } from '@vue/test-utils'
import UserProfileForm from '@/components/UserProfileForm.vue'

describe('UserProfileForm', () => {
  it('rejects names longer than 20 characters', async () => {
    const wrapper = mount(UserProfileForm, { props: { initialName: 'A', initialEmail: 'a@example.com' } })
    await wrapper.get('input[aria-label="Name"]').setValue('123456789012345678901')
    expect(wrapper.text()).toContain('Name must be 20 characters or less')
    expect(wrapper.get('button').attributes('disabled')).toBeDefined()
  })

  it('emits a normalized payload when valid', async () => {
    const wrapper = mount(UserProfileForm, { props: { initialName: 'A', initialEmail: 'a@example.com' } })
    await wrapper.get('input[aria-label="Name"]').setValue(' Alice ')
    await wrapper.get('form').trigger('submit')
    expect(wrapper.emitted('submit')?.[0]).toEqual([{ name: 'Alice', email: 'a@example.com' }])
  })
})
