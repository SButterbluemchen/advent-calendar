import type { VueWrapper } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import CalendarCountdown from '~/components/calendar/CalendarCountdown.vue'

describe('calendarCountdown', () => {
  let wrapper: VueWrapper

  const mountCalendarCountdownComponent = () =>
    shallowMount(CalendarCountdown, {
    })

  beforeEach(() => {
    vi.useFakeTimers()
    wrapper = mountCalendarCountdownComponent()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('with countdown', () => {
    beforeEach(() => {
      vi.setSystemTime(new Date('2025-11-30T00:00:00Z'))
      wrapper = mountCalendarCountdownComponent()
    })

    it('should render properly', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('should show the right title', async () => {
      await nextTick()

      const title = wrapper.find('[data-testid="countdown-title"]')

      expect(title.exists()).toBe(true)
    })
  })

  describe('without countdown', () => {
    beforeEach(() => {
      vi.setSystemTime(new Date('2025-12-01T00:00:00Z'))
      wrapper = mountCalendarCountdownComponent()
    })

    it('should render properly', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('should show the right title', async () => {
      await nextTick()

      const title = wrapper.find('[data-testid="countdown-finished"]')

      expect(title.exists()).toBe(true)
    })
  })
})
