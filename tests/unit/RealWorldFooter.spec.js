import { shallowMount } from '@vue/test-utils'
import RealWorldFooter from '@/components/RealWorldFooter.vue'

describe('RealWorldFooter.vue', () => {
  it('renders footer text', () => {
    const wrapper = shallowMount(RealWorldFooter)
    expect(wrapper.text()).toMatch('conduit An Interactive learning project from Thinkster. Code & design licensed under MIT.')
  })
})

