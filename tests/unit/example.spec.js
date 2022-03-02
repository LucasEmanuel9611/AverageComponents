import { mount } from '@vue/test-utils'
import VueApexCharts from 'vue-apexcharts'
import flushPromises from "flush-promises";
import App from '@/App.vue'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe('Render test', () => {
  it('renders App components', async () => {

    const wrapper = mount(App,{ propsData: {
      score: [4]
    }})

    await flushPromises()
    await wrapper.vm.$nextTick()
    const textStatus = wrapper.find(".text-status");
    // expect(textStatus).toBeTruthy()
    expect(textStatus.element.textContent).toContain('Baixo')

    
  })
})
