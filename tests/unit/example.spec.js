import { mount } from '@vue/test-utils'
import VueApexCharts from 'vue-apexcharts'
import flushPromises from "flush-promises";
import App from '@/App.vue'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe('Render correct message for each score  ', () => {

  test('render the correct msg:"Baixo" para score <= 4.4', async () => {

    const wrapper = mount(App,{ propsData: {
      score: [4]
    }})

    await flushPromises()
    await wrapper.vm.$nextTick()
    const textStatus = wrapper.find(".text-status");
    // expect(textStatus).toBeTruthy()
    expect(textStatus.element.textContent).toContain('Baixo')
  })

  test('render the correct msg: OK para score > 4.4 e <= 5.4', async () => {

    const wrapper = mount(App,{ propsData: {
      score: [5]
    }})

    await flushPromises()
    await wrapper.vm.$nextTick()
    const textStatus = wrapper.find(".text-status");
    // expect(textStatus).toBeTruthy()
    expect(textStatus.element.textContent).toContain('Ok')
  })

  test('render the correct msg: "Bom" para score > 5.4 e <= 7.4', async () => {

    const wrapper = mount(App,{ propsData: {
      score: [7.4]
    }})

    await flushPromises()
    await wrapper.vm.$nextTick()
    const textStatus = wrapper.find(".text-status");
    // expect(textStatus).toBeTruthy()
    expect(textStatus.element.textContent).toContain('Bom')
  })

  test('render the correct msg: "Muito Bom" para score > 7.4 e <= 8.9', async () => {

    const wrapper = mount(App,{ propsData: {
      score: [7.5]
    }})

    await flushPromises()
    await wrapper.vm.$nextTick()
    const textStatus = wrapper.find(".text-status");
    // expect(textStatus).toBeTruthy()
    expect(textStatus.element.textContent).toContain('Muito Bom')
  })

  test('render the correct msg:  "Incrível" para score > 8.9 e <= 10.0', async () => {

    const wrapper = mount(App,{ propsData: {
      score: [9.0]
    }})

    await flushPromises()
    await wrapper.vm.$nextTick()
    const textStatus = wrapper.find(".text-status");
    // expect(textStatus).toBeTruthy()
    expect(textStatus.element.textContent).toContain('Incrível')
  }) 
})

describe('test render corretct color in chart', () => {
  test('score >= 0 && score < 5 = vermelho ', async () => {
    const wrapper = mount(App, {
      propsData: {
        score: [4]
      }
    })

    await flushPromises()
    await wrapper.vm.$nextTick()
    const Chart = wrapper.find(".my-chart");
    // expect(textStatus).toBeTruthy()
    expect(JSON.stringify(Chart.props().options.colors)).toContain(`["#E02721"]`)
  })
  
  test('(score < 7.5) = amarelo', async() => {
    const wrapper = mount(App, { propsData: {
      score: [6]
    }})

    
    const Chart = wrapper.find(".my-chart");
    // expect(textStatus).toBeTruthy()
    expect(JSON.stringify(Chart.props().options.colors)).toContain(`["#F7CA14"]`)
  })

  test(' (score <= 10) = verde. ', async() => {
    const wrapper = mount(App, { propsData: {
      score: [9]
    }})

    await flushPromises()
    await wrapper.vm.$nextTick()
    const Chart = wrapper.find(".my-chart");
    // expect(textStatus).toBeTruthy()
    expect(JSON.stringify(Chart.props().options.colors)).toContain(`["#31EB70"]`)
  })

})
