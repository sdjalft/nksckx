import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TiYu from '../views/TiYu.vue'
import YuWen from '../views/YuWen.vue'
import YingYu from '../views/YingYu.vue'
import GaoShu1 from '../views/GaoShu1.vue'
import GaoShu2 from '../views/GaoShu2.vue'
import DaWuLab from '../views/DaWuLab.vue'
import DaWu1 from '../views/DaWu1.vue'
import DaWu2 from '../views/DaWu2.vue'
import DaWu3 from '../views/DaWu3.vue'
import DaWu4 from '../views/DaWu4.vue'
import SiXiu from '../views/SiXiu.vue'
import MaYuan from '../views/MaYuan.vue'
import ShiGang from '../views/ShiGang.vue'
import MaoGai from '../views/MaoGai.vue'
import C from '../views/C.vue'
import ShuZiLuoJi from '../views/ShuZiLuoJi.vue'
import ShuJuKu from '../views/ShuJuKu.vue'
import ShuJuJieGou from '../views/ShuJuJieGou.vue'
import LiSan from '../views/LiSan.vue'
import Java from '../views/Java.vue'
import XianDai from '../views/XianDai.vue'
import JiGai from '../views/JiGai.vue'
import JiZu from '../views/JiZu.vue'
import QT from '../views/QT.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tiyu',
    name: '体育',
    component: TiYu
  },
  {
    path: '/yuwen',
    name: '大学语文',
    component: YuWen
  },
  {
    path: '/yingyu',
    name: '英语',
    component: YingYu
  },
  {
    path: '/gaoshu1',
    name: '一元函数微积分',
    component: GaoShu1
  },
  {
    path: '/gaoshu2',
    name: '多元函数微积分/场论',
    component: GaoShu2
  },
  {
    path: '/dawulab',
    name: '大学物理实验',
    component: DaWuLab
  },
  {
    path: '/dawu1',
    name: '大学物理Ⅰ',
    component: DaWu1
  },
  {
    path: '/dawu2',
    name: '大学物理Ⅱ',
    component: DaWu2
  },
  {
    path: '/dawu3',
    name: '大学物理Ⅲ',
    component: DaWu3
  },
  {
    path: '/dawu4',
    name: '大学物理Ⅳ',
    component: DaWu4
  },
  {
    path: '/sixiu',
    name: '思想道德修养与法律基础',
    component: SiXiu
  },
  {
    path: '/mayuan',
    name: '马克思主义基本原理',
    component: MaYuan
  },
  {
    path: '/shigang',
    name: '近现代史纲要',
    component: ShiGang
  },
  {
    path: '/maogai',
    name: '毛泽东思想理论体系概论',
    component: MaoGai
  },
  {
    path: '/c',
    name: 'C/C++',
    component: C
  },
  {
    path: '/shuziluoji',
    name: '数字逻辑',
    component: ShuZiLuoJi
  },
  {
    path: '/shujuku',
    name: '数据库',
    component: ShuJuKu
  },
  {
    path: '/shujujiegou',
    name: '数据结构',
    component: ShuJuJieGou
  },
  {
    path: '/lisan',
    name: '离散数学',
    component: LiSan
  },
  {
    path: '/java',
    name: 'Java',
    component: Java
  },
  {
    path: '/xiandai',
    name: '线性代数',
    component: XianDai
  },
  {
    path: '/jigai',
    name: '计算机概论',
    component: JiGai
  },
  {
    path: '/jizu',
    name: '计算机组成原理',
    component: JiZu
  },
  {
    path: '/qt',
    name: '高级语言编程实训',
    component: QT
  },
  {
    path: '/about',
    name: '关于',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
