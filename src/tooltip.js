import Vue from 'vue'
import Tooltip from './tooltip.vue'

const TipsConstruct = Vue.extend(Tooltip)

export const getInstance = function () {
  const div = document.createElement('div')

  div.setAttribute('id', '$$tipscontainner')
  document.body.appendChild(div)

  return new TipsConstruct().$mount(div)
}
