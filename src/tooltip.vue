<template lang="pug">
  div.tooltip-container(v-show="isShow", ref="popper")
    .content
      .tooltip-arrow
      .tooltip-inner {{content}}
</template>

<script>
import Popper from 'popper.js'
export default {
  props: {
    reference:{
      type: Object,
    },
    popper: {
      type: Object
    },
    content: {
      type: String,
      default: ""
    },
    placement:{
      type: String,
      default: 'auto'
    },
    delay: {
      type: Number,
      default: 100
    },
    popperOptions: {
      type: Object,
      default () {
        return {
          modifiers: {
            computeStyle: {
              gpuAcceleration: false
            },
            preventOverflow: {
              boundariesElement: 'viewport'
            }
          }
        }
      }
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    getPopper () {
      if (!this.popper) {
        let options = this.$props.popperOptions
        options.placement = this.$props.placement
        // options.modifiers.offset = 5
        options.onCreate = () => {
          console.log(`popper has been created`)
        }
        this.popper = new Popper(this.$props.reference, this.$refs.popper, options)
      }
      return this.popper
    },
    updatePopper () {
      this.getPopper().update()
    },
    destroy () {
      if (this.$data.isShow) return
      if (this.popper) {
        this.popper.destroy()
        this.popper = null
      }
    },
    show () {
      if (this.timer) clearTimeout(this.timer)

      this.updatePopper()

      this.timer = setTimeout(() => {
        this.isShow = true
      }, this.$props.delay)
    },
    hide () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.isShow = false
      }, this.$props.delay)
    }
  },
  watch: {
    isShow () {
      this.updatePopper()
    },
    reference () {
      if (this.popper) {
        this.popper.reference = this.$props.reference
        this.updatePopper()
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
.tooltip-container
  display block
  visibility visible
  font-size 12px
  line-height 1.5
  position absolute
  z-index 1060
  box-sizing border-box
  .content
    .tooltip-arrow
      position absolute
      width 0
      height 0
      border-color transparent
      border-style solid
      box-sizing border-box
    .tooltip-inner
      box-sizing border-box
      max-width 250px
      min-height 34px
      padding 8px 12px
      color #fff
      text-align left
      text-decoration none
      background-color rgba(70,76,91,.9)
      border-radius 4px
      box-shadow 0 1px 6px rgba(0,0,0,.2)
      white-space nowrap
</style>

<style lang="stylus" scoped>
  // 解决箭头问题
.tooltip-container
  &[x-placement^=top]
    padding 5px 0 8px
    .tooltip-arrow
      bottom 3px
      border-width 5px 5px 0
      border-top-color rgba(70,76,91,.9)
  &[x-placement^=left]
    padding 0 8px 0 5px
    .tooltip-arrow
      right 3px
      border-width 5px 0 5px 5px
      border-left-color rgba(70,76,91,.9)
  &[x-placement^=bottom]
    padding 8px 0 5px
    .tooltip-arrow
      top 3px
      border-width 0 5px 5px
      border-bottom-color rgba(70,76,91,.9)
  &[x-placement^=right]
    padding 0 5px 0 8px
    .tooltip-arrow
      left 3px
      border-width 5px 5px 5px 0
      border-right-color rgba(70,76,91,.9)

  // 顶部位置细调
  &[x-placement=top-start]
    .tooltip-arrow
      left 16px
  &[x-placement=top-end]
    .tooltip-arrow
      right 16px
  &[x-placement=top]
    .tooltip-arrow
      left 50%
      margin-left -5px

  // 左侧位置调整
  &[x-placement=left-start]
    .tooltip-arrow
      top 8px
  &[x-placement=left]
    .tooltip-arrow
      top 50%
      margin-top -5px
  &[x-placement=left-end]
    .tooltip-arrow
      bottom 8px

  // 底部位置调整
  &[x-placement=bottom-start]
    .tooltip-arrow
      left 16px
  &[x-placement=bottom-end]
    .tooltip-arrow
      right 16px
  &[x-placement=bottom]
    .tooltip-arrow
      left 50%
      margin-left -5px

  // 右侧位置调整
  &[x-placement=right-start]
    .tooltip-arrow
      top 8px
  &[x-placement=right]
    .tooltip-arrow
      top 50%
      margin-top -5px
  &[x-placement=right-end]
    .tooltip-arrow
      bottom 8px
</style>
