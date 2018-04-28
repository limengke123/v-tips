<template lang="pug">
  .hello
    .box1(v-tips="options") 关关雎鸠
    br
    br
    .box1(v-tips="options1") 窈窕淑女，君子好逑。
    br
    br
    .box1(v-tips="options2") 窈窕淑女
    br
    br
    .box1(v-tips="options3") 求之不得
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      options: {
        content: '在河之洲',
        placement: 'top-start'
      },
      options1: {
        content: '参差荇菜，左右流之。',
        placement: 'right'
      },
      options2: {
        content: '寤寐求之',
        placement: 'left'
      },
      options3: {
        content: '寤寐思服',
        placement: 'bottom-end'
      }
    }
  }
}
</script>

<style lang="stylus">
  .box1
    //background-color #efefef
    display inline-block
</style>
