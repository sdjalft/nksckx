<template>
  <div class="app">
    <main-tab></main-tab>
    <div class="bgimage"></div>
    <el-backtop>
    </el-backtop>
    <router-view/>
    <footman></footman>
    <div class="texiao">
      <div class="snow" v-for="(item) in 200" :key="item" wmode="transparent"></div>
    </div>
  </div>
</template>

<script>
import footman from './components/Footman.vue'
import mainTab from './components/MainTab.vue'
export default {
  name: 'app',
  components: {
    mainTab,
    footman
  },
  data: function () {
    return {
      url: './assets/blogBg.jpg'
    }
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  z-index: 11;
}
.bgimage {
  height: 420px;
  background: url('./assets/blogBg.jpg') no-repeat;
  background-size:100% 420px;
  z-index: 5;
}
</style>
