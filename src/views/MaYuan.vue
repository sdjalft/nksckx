<!--马克思主义基本原理-->
<template>
  <div class="ziHome">
    <p class="ziTitle">马克思主义基本原理资料汇总</p>
    <p></p>
    <div v-for="(key) in ref" :key='key.key' class="lianjie">
      <a :href="key.value">
        {{key.key}}
      </a>
    </div>
    <p class="ziIdea">意见</p>
    <p>如果您对双创中心的这个网站有什么宝贵的意见，或者对我们可以举办的活动有什么想法的话，
      请将您的提议发送至下面的邮箱，
      对于好的提议，我们将会有礼品送上哦~所有请附上您的学院，年级，以及姓名。
    </p>
    <div>
      <span style="font-weight: 600;">邮箱：</span>
      <span>nksckx@163.com</span>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      ref: [{
        key: '2011年南开大学马基范围电子版.doc',
        value: 'https://gitee.com/nksckx/makesizhuyijibenyuanli/raw/master/2011%E5%B9%B4%E5%8D%97%E5%BC%80%E5%A4%A7%E5%AD%A6%E9%A9%AC%E5%9F%BA%E8%8C%83%E5%9B%B4%E7%94%B5%E5%AD%90%E7%89%88.doc'
      },
      {
        key: '马克思主义基本原理复习指南2018.doc',
        value: 'https://gitee.com/nksckx/makesizhuyijibenyuanli/raw/master/%E9%A9%AC%E5%85%8B%E6%80%9D%E4%B8%BB%E4%B9%89%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86%E5%A4%8D%E4%B9%A0%E6%8C%87%E5%8D%972018.doc'
      },
      {
        key: '马基前半册知识点.doc',
        value: 'https://gitee.com/nksckx/makesizhuyijibenyuanli/raw/master/%E9%A9%AC%E5%9F%BA%E5%89%8D%E5%8D%8A%E5%86%8C%E7%9F%A5%E8%AF%86%E7%82%B9.doc'
      },
      {
        key: '马基后半册知识点.docx',
        value: 'https://gitee.com/nksckx/makesizhuyijibenyuanli/raw/master/%E9%A9%AC%E5%9F%BA%E5%90%8E%E5%8D%8A%E5%86%8C%E7%9F%A5%E8%AF%86%E7%82%B9.docx'
      }
      ]
    }
  }
}
</script>

<style>
.ziHome {
  width: 40%;
  margin-left: 25%;
  margin-top: 70px;
  font-size: 20px;
  font-family:
    PingFang SC,
    Verdana,
    Helvetica Neue,
    Microsoft Yahei,
    Hiragino Sans GB,
    Microsoft Sans serif,
    WenQuanYi Micro Hei,
    sans-serif;
  text-align: left;
}
.ziTitle {
  font-size: 40px;
  text-align: center;
  font-weight: 600;
}
.lianjie {
  margin-top: 10px;
}
.lianjie a {
  color: red;
  text-decoration: none;
}
.ziIdea {
  font-size: 40px;
  font-weight: 600;
}
</style>
