<!--每个科目的卡片-->
<template>
  <div @click="click">
    <el-card shadow="hover" class="card">
      <span class="innerText">
        {{ name }}
      </span>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  },
  methods: {
    click () {
      this.$emit('click', this.name)
    }
  }
}
</script>

<style>
.card {
  background: url(https://gitee.com/nksckx/images/raw/master/cardBg.jpg) no-repeat;
  background-size: 100% 100%;
  height: 120px;
  position: relative;
  z-index: -1;
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
