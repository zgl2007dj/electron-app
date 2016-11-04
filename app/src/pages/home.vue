<style scoped lang="stylus">
  .home
    display flex
    flex-direction column
    width 100%
    height 100%
    .content
      flex 1
      padding 20px 20px
      overflow-y auto
      li
        display flex
        padding 10px
        + li
          border-top 1px dashed #eee
        &:hover
          background-color rgba(32, 160, 255, 0.18)
        .name
          flex 1
          text-align left
          font-size 18px
          color rgb(132, 146, 166)
        .state 
          font-size 12px
          height 14px
          line-height 1
          margin-left 5px
        .opera
          font-size 14px
          color rgb(132, 146, 166)
          line-height 26px
          cursor pointer
          margin-right 20px
          &:hover
            color #20a0ff 
    footer
      padding 10px
      bottom 0
      left 0
      right 0
      .buttons
        display flex
        align-items flex-end
        flex-direction column
</style>

<template>
  <div class="home"> 
    <ul class="content">
      <li v-for="item in arr" stagger="100" track-by="id">
        <span class="name">
          {{item.name}}
          <el-tag class="state">success</el-tag>  
        </span>
        <i class="opera el-icon-edit"></i>
        <i class="opera el-icon-share"></i>
        <i class="opera el-icon-delete"></i>
        <!-- <el-tag class="state" type="gray">success_{{item.id}}</el-tag>
        <el-tag class="state" type="primary">success_{{item.id}}</el-tag>
        <el-tag class="state" type="success">success_{{item.id}}</el-tag>
        <el-tag class="state" type="warning">success_{{item.id}}</el-tag> -->
      </li>
    </ul>
    <footer>
      <el-row>
        <!-- <el-col :span="4">
          <div class="grid-content bg-purple-light">

          </div>
        </el-col> -->
        <el-col :span="24" class="buttons">
          <div class="grid-content bg-purple">
            <el-button type="primary" @click="showtips">showtips</el-button>
            <el-button type="primary" @click="showmsg">showmsg</el-button>
            <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
              <el-button>tips</el-button>
            </el-tooltip>
          </div>
        </el-col>
      </el-row>
    </footer>
  </div>
</template>

<script>
  import base from './base'
  import pageMenu from '../menu'

  export default {
    mixins: base,
    components: {
      pageMenu
    },
    data () {
      return {
        arr: [
          {name: '云之家', id: 1},
          {name: '在线进销存', id: 2},
          {name: '在线会计', id: 3},
          {name: '官网', id: 4}
        ]
      }
    },
    ready () {
    },
    methods: {
      showtips () {
        this.$notify({
          title: 'tip title',
          message: 'tip点击测试内容'
        })
      },
      showmsg () {
        this.$message('这是一条消息提示')
      }
    }
  }
</script>
