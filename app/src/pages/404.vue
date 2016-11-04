<style scoped lang="stylus">
  .error-404
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    span
      font-size: 200px;
      font-weight: 900;
      color: #20a0ff;
      margin auto
</style>

<template>
  <div class="error-404"> 
    <span>404</span>
    <!-- <small>page not found</small> -->
  </div>
</template>

<script>
  import base from './base'

  export default {
    mixins: base,
    data () {
      return {
      }
    },
    ready () {
    }
  }
</script>
