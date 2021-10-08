<template>
  <el-container>
    <el-aside width="auto">
      <el-menu :collapse="isCollapse" default-active="/dashboard" router class="el-menu-vertical-demo">
        <el-menu-item index="/dashboard">
          <i class="el-icon-location"/>
          <span slot="title">控制面板</span>
        </el-menu-item>
        <el-submenu>
          <template slot="title">
            <i class="el-icon-menu"/>
            <span slot="title">文档</span>
          </template>
          <el-menu-item index="/documentation/index">
            <span slot="title">文档一</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="/guide">
          <i class="el-icon-document"/>
          <span slot="title">引导页</span>
        </el-menu-item>
        <el-menu-item index="/profile">
          <i class="el-icon-setting"/>
          <span slot="title">配置文件</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header height="50px">
        <span :class="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" class="header-fold" @click="isCollapse = !isCollapse"/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      list: { value: '1' }
    }
  },
  methods: {
    open() {
      const fn = (res) => {
        return console(res)
      }
      fn().then(res => [
        console.log(res)
      ])
    }
  }
}
</script>
<style lang="scss" scoped>
.el-header {
  line-height: 50px;
  .header-fold {
    display: inline-block;
    cursor: pointer;
    font-size: 20px;
  }
}
.el-main {
  padding: 24px !important;
}
</style>
