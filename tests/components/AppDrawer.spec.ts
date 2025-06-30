import type { VueWrapper } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import AppDrawer from '~/components/AppDrawer.vue'

describe('appDrawer', () => {
  let wrapper: VueWrapper

  const mountAppDrawerComponent = () =>
    shallowMount(AppDrawer, {
      // global: {
      //   plugins: [createTestingPinia(testingPinia), router],
      // },
    })

  beforeEach(() => {
    wrapper = mountAppDrawerComponent()
  })

  it('renders properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
