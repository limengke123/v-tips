import Vue from 'vue'
import Tooltip from './tooltip.vue'

const TipsConstruct = Vue.extend(Tooltip)

let instance

export const getInstance = function () {
  if (instance) {
    return instance
  }

  console.log(instance)

  const div = document.createElement('div')

  // div.setAttribute('id', '$$tipscontainner')

  // document.appendChild(div)

  instance = new TipsConstruct().$mount(div)

  console.log(instance)

  return instance

}

export const destroy = function () {
  const instance = getInstance()
  instance.$destroy()
  document.removeChild(document.getElementById('$$tipscontainner'))
}
