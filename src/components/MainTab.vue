<!--导航菜单栏-->
<template>
  <div class="mainTab">
    <el-image
      class="logo"
      src="https://gitee.com/nksckx/images/raw/master/logo.png"
      @click="toHome">
    </el-image>
    <a class="title" @click="toHome">南开软件双创中心</a>
    <el-menu mode="horizontal"
      style="display: flex; height: 80px !important; background-color: rgba(0,0,0,0);"
      router="true">
      <el-submenu index="1">
        <span slot="title" class="submenuText">通识必修课</span>
        <el-menu-item index="/tiyu">体育</el-menu-item>
        <el-menu-item index="/yuwen">大学语文</el-menu-item>
        <el-menu-item index="/yingyu">英语</el-menu-item>
        <el-submenu index="1-4">
          <span slot="title">高等数学</span>
          <el-menu-item index="/gaoshu1">一元函数微积分</el-menu-item>
          <el-menu-item index="/gaoshu2">多元函数微积分/场论</el-menu-item>
        </el-submenu>
        <el-submenu index="1-5">
          <span slot="title">大学物理/实验</span>
          <el-menu-item index="/dawu1">大学物理Ⅰ</el-menu-item>
          <el-menu-item index="/dawu2">大学物理Ⅱ</el-menu-item>
          <el-menu-item index="/dawu3">大学物理Ⅲ</el-menu-item>
          <el-menu-item index="/dawu4">大学物理Ⅳ</el-menu-item>
          <el-menu-item index="/dawulab">大学物理实验</el-menu-item>
        </el-submenu>
        <el-submenu index="1-6">
          <span slot="title">思政类</span>
          <el-menu-item index="/sixiu">思想道德修养与法律基础</el-menu-item>
          <el-menu-item index="/mayuan">马克思主义基本原理</el-menu-item>
          <el-menu-item index="/shigang">近现代史纲要</el-menu-item>
          <el-menu-item index="/maogai">毛泽东思想理论体系概论</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <span slot="title" class="submenuText">专业必修课</span>
        <el-menu-item index="/c">C/C++</el-menu-item>
        <el-menu-item index="/java">Java</el-menu-item>
        <el-menu-item index="/shuziluoji">数字逻辑</el-menu-item>
        <el-menu-item index="/shujuku">数据库</el-menu-item>
        <el-menu-item index="/shujujiegou">数据结构</el-menu-item>
        <el-menu-item index="/lisan">离散数学</el-menu-item>
        <el-menu-item index="/xiandai">线性代数</el-menu-item>
        <el-menu-item index="/jigai">计算机概论</el-menu-item>
        <el-menu-item index="/jizu">计算机组成原理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <span slot="title" class="submenuText">专业选修课</span>
        <el-menu-item index="/qt">高级语言编程实训</el-menu-item>
      </el-submenu>
      <el-menu-item index="/about">
        <span class="submenuText">关于</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      aClass: []
    }
  },
  methods: {
    toHome: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.mainTab {
  display: flex;
  flex-direction: row;
  height: 80px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.logo {
  width: 50px;
  height: 50px;
  margin-left: 60px;
  align-self: center;
}
.title {
  font-size: 20px;
  font-weight: 600;
  margin-left: 15px;
  margin-right: 60px;
  align-self: center;
  text-decoration: none;
  color: black;
  font-family:
    PingFang SC,
    Verdana,
    Helvetica Neue,
    Microsoft Yahei,
    Hiragino Sans GB,
    Microsoft Sans serif,
    WenQuanYi Micro Hei,
    sans-serif;
}
.el-menu {
  align-items: center !important;
}
.submenuText {
  font-size: 20px;
  font-weight: 500;
  font-family:
    PingFang SC,
    Verdana,
    Helvetica Neue,
    Microsoft Yahei,
    Hiragino Sans GB,
    Microsoft Sans serif,
    WenQuanYi Micro Hei,
    sans-serif;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border-bottom: 0px !important;
}
.el-menu.el-menu--horizontal {
    border-bottom: 0px !important;
}
.el-menu-item.is-active {
    border-bottom: 0px !important;
    color: #303133;
}
</style>
