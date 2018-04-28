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

      el._mouseenterhandler = function () {
        const instance = _getInstance()
        instance.$props.reference = el
        if (typeof binding.value === 'object') {
          // 这里有单例模式的缺点 每次修改 我都要去把popper里面的值给修改了,因为所有用这个指令的节点都用的一个popper
          if( "placement" in binding.value) {
            Object.assign(instance.$props, binding.value)
            instance.updatePlacement(binding.value.placement)
          } else if (instance.popper && instance.popper.options.placement !== instance.$options.props.placement.default) {
              Object.assign(instance.$props, binding.value)
              instance.updatePlacement(instance.$options.props.placement.default)
          }
        } else {
          if (instance.popper && instance.popper.options.placement !== instance.$options.props.placement.default) {
            instance.updatePlacement(instance.$options.props.placement.default)
          }
          instance.$props.content = binding.value
        }
        instance.show()
      }
      el._mouseleavehandler = function () {
        const instance = _getInstance()
        instance.hide()
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
