<style lang="stylus">
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: center;
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    display: flex;
    font-family: Lato, Helvetica, sans-serif;
    justify-content: center;
    text-align: center;
  }
  .page
    display flex
    flex-direction column
    width 100%
    height 100%
    .page-header
      background-color #324057
      display flex
      // overflow hidden
    .page-content
      flex 1
      overflow-y auto
</style>

<template>
  <div class="page">
    <div class="page-header">
      <page-menu></page-menu>
    </div>
    <router-view class="page-content"></router-view>
  </div>
</template>

<script>
  import store from 'src/vuex/store'
  import pageMenu from './menu'

  export default {
    store,
    components: {
      pageMenu
    }
  }
</script>
