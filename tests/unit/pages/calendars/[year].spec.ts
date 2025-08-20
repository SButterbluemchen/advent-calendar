import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useRoute } from 'vue-router'
import YearComponent from '~/pages/calendars/[year].vue'

vi.mock('vue-router')

vi.mock(import('~/utils/calendar.utils'), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    doesCalendarExist: vi.fn(),
  }
})

describe('[year]', () => {
  let wrapper: VueWrapper
  let mockRoute: any

  const mountYearComponentComponent = () =>
    mount(YearComponent, {
    })

  describe('is in the past', () => {
    beforeEach(() => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2025-06-01T00:00:00Z'))

      mockRoute = reactive({ params: { year: '2024' } });
      (useRoute as any).mockReturnValue(mockRoute);
      (doesCalendarExist as any).mockReturnValue(true)

      wrapper = mountYearComponentComponent()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('should render calendar properly', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render calendar component', async () => {
      const calendar = wrapper.find('[data-testid="calendar"]')

      await nextTick()

      expect(calendar.exists()).toBe(true)
    })
  })

  describe('is in the future', () => {
    beforeEach(() => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2025-06-01T00:00:00Z'))

      mockRoute = reactive({ params: { year: '2025' } });
      (useRoute as any).mockReturnValue(mockRoute);
      (doesCalendarExist as any).mockReturnValue(true)

      wrapper = mountYearComponentComponent()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('should render countdown properly', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render countdown component', async () => {
      const countdown = wrapper.find('[data-testid="countdown"]')

      await nextTick()

      expect(countdown.exists()).toBe(true)
    })
  })
})
