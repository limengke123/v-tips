<template lang="pug">
  .hello
    .box1(v-tips="options") 测试很长很长很擦汗那个的文字
    br
    br
    br
    br
    br
    br
    .box1(v-tips="'这是一个tip'") 测试文字2
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      options: {
        content: 'tip测试文字'
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
