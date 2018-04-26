<template lang="pug">
  div.tooltip-container
    .content
      .tooltip-arrow
      .tooltip-inner {{content}}
</template>

<script>
import popper from 'popper.js'
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
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    createPopper () {

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
