<template>
  <div>
    <div class="home">
      <el-row :gutter="20" v-for="(index) in subjects" :key="index" class="row">
        <el-col :span="6" v-for="(value, key) in index" :key="key">
          <card @click="jump" :name="value">{{value}}</card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    card
  },
  data: function () {
    return {
      sub: ['体育', '大学语文', '英语', '一元函数微积分', '多元函数微积分/场论',
        '大学物理实验', '大学物理Ⅰ', '大学物理Ⅱ', '大学物理Ⅲ', '大学物理Ⅳ',
        '思想道德修养与法律基础', '马克思主义基本原理', '近现代史纲要', '毛泽东思想理论体系概论',
        'C/C++', 'Java', '数字逻辑', '数据库', '数据结构', '离散数学', '线性代数', '计算机概论',
        '计算机组成原理', '高级语言编程实训'],
      subjects: []
    }
  },
  created () {
    for (let cc = 0; cc < this.sub.length; cc += 4) {
      this.subjects.push(this.sub.slice(cc, cc + 4))
    }
  },
  methods: {
    jump (name) {
      this.$router.push({ name: name })
    }
  }
}
</script>

<style>
.home {
  width: 70%;
  margin-left: 30px;
}
.row {
  margin-top: 20px;
}
</style>
