<!--导航菜单栏-->
<template>
  <div class="mainTab">
    <el-image
      class="logo"
      style="width: 60px; height: 60px"
      :src="url"
      :fit="fill">
    </el-image>
    <p class="title">南开软件双创中心</p>
    <el-menu mode="horizontal" style="display: flex;">
      <el-submenu index="1">
        <span slot="title" class="submenuText">通识必修课</span>
        <el-menu-item index="1-1">体育</el-menu-item>
        <el-menu-item index="1-2">大学语文</el-menu-item>
        <el-menu-item index="1-3">英语</el-menu-item>
        <el-submenu index="1-4">
          <span slot="title" class="submenuText">高等数学</span>
          <el-menu-item index="1-4-1">一元函数微积分</el-menu-item>
          <el-menu-item index="1-4-2">多元函数微积分/场论无穷级数</el-menu-item>
        </el-submenu>
        <el-submenu index="1-5">
          <span slot="title" class="submenuText">大学物理/实验</span>
          <el-menu-item index="1-5-1">大学物理Ⅰ</el-menu-item>
          <el-menu-item index="1-5-2">大学物理Ⅱ</el-menu-item>
          <el-menu-item index="1-5-3">大学物理Ⅲ</el-menu-item>
          <el-menu-item index="1-5-4">大学物理Ⅳ</el-menu-item>
          <el-menu-item index="1-5-5">大学物理实验</el-menu-item>
        </el-submenu>
        <el-submenu index="1-6">
          <span slot="title" class="submenuText">思政类</span>
          <el-menu-item index="1-6-1">思想道德修养与法律基础</el-menu-item>
          <el-menu-item index="1-6-2">马克思主义基本原理</el-menu-item>
          <el-menu-item index="1-6-3">近现代史纲要</el-menu-item>
          <el-menu-item index="1-6-4">毛泽东思想理论体系概论</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <span slot="title" class="submenuText">专业必修课</span>
        <el-menu-item index="2-1">C/C++</el-menu-item>
        <el-menu-item index="2-2">Java</el-menu-item>
        <el-menu-item index="2-3">数字逻辑</el-menu-item>
        <el-menu-item index="2-4">数据库</el-menu-item>
        <el-menu-item index="2-5">数据结构</el-menu-item>
        <el-menu-item index="2-6">离散数学</el-menu-item>
        <el-menu-item index="2-7">线性代数</el-menu-item>
        <el-menu-item index="2-8">计算机概论</el-menu-item>
        <el-menu-item index="2-9">计算机组成原理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <span slot="title" class="submenuText">专业选修课</span>
        <el-menu-item index="3-1">高级语言编程实训</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      aClass: []
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
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
}
.logo {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  align-self: center;
}
.title {
  font-size: 20px;
  font-weight: 600;
  margin-left: 15px;
  align-self: center;
}
.el-menu {
  height: 80px !important;
  align-items: center !important;
}
.submenuText {
  font-size: 20px;
}
</style>
