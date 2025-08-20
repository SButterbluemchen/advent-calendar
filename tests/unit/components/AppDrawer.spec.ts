import type { VueWrapper } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import AppDrawer from '~/components/AppDrawer.vue'

vi.mock('~/utils/calendar.utils', () => ({
  calendarYears: vi.fn(),
}))

describe('appDrawer', () => {
  let wrapper: VueWrapper

  const mountAppDrawerComponent = () =>
    shallowMount(AppDrawer, {
      global: {
        stubs: {
          'router-link': { template: '<a><slot /></a>' },
        },
      },
    })

  beforeEach(() => {
    wrapper = mountAppDrawerComponent()
  })

  it('renders properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('hides the open drawer button when drawer is open', async () => {
    (wrapper as any).vm.visible = true

    await nextTick()

    const openButton = wrapper.findComponent('[data-testid="open-drawer-button"]')

    expect(openButton.exists()).toBe(true)
    expect(openButton.classes()).toContain('invisible')
  })
})
