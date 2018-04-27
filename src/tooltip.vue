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
      // required: true
    },
    popperOption: {
      type: Object
    },
    content: {
      type: String,
      default: ""
    },
    placement:{
      type: String,
      default: 'bottom'
    },
    options: {
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
        let options = this.$props.options
        options.placement = this.$props.placement
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
    }
  },
  watch: {
    isShow () {
      this.updatePopper()
    }
  }
}
</script>

<style lang="stylus" scoped>
.tooltip-container
  font-family: Monospaced Number,Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif
  font-size: 14px
  line-height: 1.5
  color: rgba(0,0,0,.65)
  -webkit-box-sizing: border-box
  box-sizing: border-box
  margin: 0
  padding: 0
  list-style: none
  position: absolute
  z-index: 1060
  display: block
  visibility: visible
</style>
