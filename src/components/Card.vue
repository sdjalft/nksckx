<!--每个科目的卡片-->
<template>
  <el-card shadow="hover" class="card">
    <span class="innerText">
      <slot></slot>
    </span>
  </el-card>
</template>

<style>
.card {
  background: url(../assets/cardBg.jpg) no-repeat;
  background-size: 100% 100%;
  height: 120px;
  position: relative;
}
.innerText {
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  top: 10px;
  left: 10px;
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
</style>
