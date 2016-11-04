<style scoped lang="stylus">
  .baoxiao
    display flex
    flex-direction column
    width 100%
    height 100%
    .content
      flex 1
</style>

<template>
  <div class="baoxiao">
    <iframe class="content" src="http://hpcomp.tunnel.qydev.com/ys/"></iframe>
  </div>
</template>

<script>
  import base from '../base'

  export default {
    mixins: base,
    data () {
      return {
      }
    },
    ready () {
    },
    methods: {
    }
  }
</script>
