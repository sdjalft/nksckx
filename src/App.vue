<template>
  <div id="app">
    <div class="texiao">
      <div class="snow" v-for="(item) in 300" :key="item"></div>
    </div>
    <main-tab></main-tab>
    <div class="bgimage"></div>
    <router-view/>
    <footman></footman>
  </div>
</template>

<script>
import mainTab from './components/MainTab.vue'
import footman from './components/Footman.vue'
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.bgimage {
  height: 420px;
  background: url('./assets/blogBg.jpg') no-repeat;
  background-size:100% 420px;
}
</style>
