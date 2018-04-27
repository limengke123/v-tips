<template lang="pug">
  .hello
    .box1(v-tips="'tip文字'") 测试文字
    br
    //.box1(v-tips="'tip文字2'") 测试文字2
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
  .box1
    background-color #efefef
</style>
