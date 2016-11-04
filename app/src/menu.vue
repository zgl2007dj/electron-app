<style lang="stylus">
  // overwrite menu style
  $menu-height = 50px
  .el-menu
    border-radius 0
  .el-menu--horizontal
    .el-menu-item
     height $menu-height
     line-height @height
    .el-submenu
      .el-submenu__title 
        height $menu-height
        line-height @height
      & >.el-menu
        top $menu-height + 5
</style>
<style scoped lang="stylus">
  .menu-wrap
    width 100%
    background-color #324057
    display flex
    .tools
      padding 0 10px
      display flex
      align-items center
      &.left-tools
      &.right-tools
        color #fff
      .el-button
        background-color #42526b //#5a5a5a
        border none
        padding 6px 12px
        font-size 18px
        color #fff
        border-radius 3px
        &:active, &:hover
          color #20a0ff
          background-color lighten(@background-color, 10%)
        &:focus, &.focus
          background-color lighten(@background-color, 30%)
        + .el-button
          margin-left 10px
    .menu
      flex 1
      display flex
      align-items center
      .el-menu
        margin auto
</style>

<template>
  <div class="menu-wrap">
    <div class="tools left-tools">
      <el-button type="primary" icon="setting"></el-button>
    </div>
    <el-row class="menu">
      <el-menu :router=true theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleselect">
        <el-menu-item index="/">项目状态</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">我的任务</el-menu-item>
          <el-menu-item index="/baoxiao">报销</el-menu-item>
          <el-menu-item index="2-3">我的机器</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">FTP管理</el-menu-item>
      </el-menu>
    </el-row>
    <div class="tools right-tools">
      <el-button type="primary" icon="upload2"></el-button>
      <el-button type="primary" icon="more"></el-button> 
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    ready () {
    },
    methods: {
      handleselect () {
        console.log('handleselect')
      }
    }
  }
</script>
