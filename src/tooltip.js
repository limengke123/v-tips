import Vue from 'vue'
import Tooltip from './tooltip.vue'

const TipsConstruct = Vue.extend(Tooltip)

export const getInstance = function () {

  let div

  if (!document.getElementById('$$tipscontainner')) {
    div = document.createElement('div')
    div.setAttribute('id', '$$tipscontainner')
    document.body.appendChild(div)
  } else {
    div = document.getElementById('$$tipscontainner')
  }

  const instance = new TipsConstruct().$mount()
  div.appendChild(instance.$el)

  return instance
}
