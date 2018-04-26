// eslint-disable
import {destroy, getInstance} from './tooltip.js'

const mouseenterHandler = function () {
  const instance = getInstance()
  instance.isShow = true
}

const mouseleaveHandler = function () {
  const instance = getInstance()
  instance.isShow = false
}

const install = function (Vue, options = {}) {
  // 指令名字
  /** @namespace options.directiveName */
  const name = options.directiveName || 'tips'
  Vue.directive(name, {
    bind (el,binding) {
      el._mouseenterhandler = function () {
        const instance = getInstance()
        instance.$props.content = binding.value
        instance.$data.isShow = true
      }
      el._mouseleavehandler = function () {
        const instance = getInstance()
        instance.$props.isShow = false
      }
      el.addEventListener('mouseenter',el._mouseenterhandler)
      el.addEventListener('mouseleave',el._mouseleavehandler)
    },
    unbind (el) {
      el.removeEventListener('mouseenter',el._mouseenterhandler)
      el.removeEventListener('mouseleave',el._mouseleavehandler)
    }
  })
}

export default install
