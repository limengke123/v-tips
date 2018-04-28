// eslint-disable
import {getInstance} from './tooltip.js'


/**
 * 2.0 这里不做单例处理
 * 每一次都去生成对应的组件
 * */

let instanceList = []

let index = 0

const generateInstance = function (index) {
  /**
   * 不能用JSON.stringify(instance)
   * 报错说instance是有循环引用
   * 大概是因为instance内部有一个_self属性引用自身
   * */
  // const instance_string = JSON.stringify(getInstance())
  // this.setAttribute('data-instance',instance_string)
  this.setAttribute('data-index', index)
  instanceList.push(getInstance())
}

const _getInstance = function () {
  // const instance_string = this.getAttribute('data-instance')
  // return JSON.parse(instance_string)
  console.log(this)
  const index = this.getAttribute('data-index')
  return instanceList[index]
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


      generateInstance.call(el, index++)

      clearEvent.call(el)

      el._mouseenterhandler = function () {
        const instance = _getInstance.call(el)
        instance.$props.reference = el
        if (typeof binding.value === 'object') {
          // 这里有单例模式的缺点 每次修改 我都要去把popper里面的值给修改了,因为所有用这个指令的节点都用的一个popper
          // if( "placement" in binding.value) {
          //   Object.assign(instance.$props, binding.value)
          //   instance.updatePlacement(binding.value.placement)
          // } else if (instance.popper && instance.popper.options.placement !== instance.$options.props.placement.default) {
          //     Object.assign(instance.$props, binding.value)
          //     instance.updatePlacement(instance.$options.props.placement.default)
          // }
          Object.assign(instance.$props, binding.value)
        } else {
          // if (instance.popper && instance.popper.options.placement !== instance.$options.props.placement.default) {
          //   instance.updatePlacement(instance.$options.props.placement.default)
          // }
          /**
           * 如果是字符串,直接处理
           * */
          instance.$props.content = binding.value
        }
        instance.show()
      }
      el._mouseleavehandler = function () {
        const instance = _getInstance.call(el)
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
