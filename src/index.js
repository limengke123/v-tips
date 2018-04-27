// eslint-disable
import {getInstance} from './tooltip.js'

let _instance

// const a = getInstance()
// console.log(a)

const _getInstance = function () {
  _instance = _instance || getInstance()
  return _instance
}

const _destroy = function () {
  if (!_instance) return
  _instance.$destroy()
  document.removeChild(document.getElementById('$$tipscontainner'))
}

const clearEvent = function () {
  this._mouseenterhandler && (this._mouseenterhandler = null)
  this._mouseleavehandler && (this._mouseleavehandler= null)
}

const install = function (Vue, options = {}) {
  // 指令名字
  /** @namespace options.directiveName */
  const name = options.directiveName || 'tips'
  Vue.directive(name, {
    bind (el,binding) {

      clearEvent.call(el)
      console.log(_getInstance())

      el._mouseenterhandler = function () {
        const instance = _getInstance()
        instance.$props.reference = el
        instance.$props.content = binding.value
        instance.$data.isShow = true
      }
      el._mouseleavehandler = function () {
        const instance = _getInstance()
        instance.$data.isShow = false
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
