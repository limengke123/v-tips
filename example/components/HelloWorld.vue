<template lang="pug">
  .hello
    .box1(v-tips="options") 测试很长很长很擦汗那个的文字
    br
    br
    br
    br
    br
    br
    .box1(v-tips="options1") 测试文字2
    br
    br
    br
    br
    br
    br
    .box1(v-tips="options2") 测试文字32
    br
    br
    br
    br
    br
    br
    .box1(v-tips="options3") 测试文字32
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      options: {
        content: 'tip测试文字',
        placement: 'top-start'
      },
      options1: {
        content: '测试文字111111111',
        placement: 'right'
      },
      options2: {
        content: '测试文字',
        placement: 'bottom-end'
      },
      options3: {
        content: '测试文字',
        placement: 'left'
      }
    }
  }
}
</script>

<style lang="stylus">
  .box1
    background-color #efefef
    display inline-block
</style>
