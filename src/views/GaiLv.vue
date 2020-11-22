<!--概率论与数理统计-->
<template>
  <div class="ziHome">
    <p class="ziTitle">概率论与数理统计资料汇总</p>
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
        key: '试题.zip',
        value: 'https://gitee.com/nksckx/gailvlun/raw/master/%E8%AF%95%E9%A2%98.zip'
      },
      {
        key: '课件.zip',
        value: 'https://gitee.com/nksckx/gailvlun/raw/master/%E8%AF%BE%E4%BB%B6.zip'
      },
      {
        key: '概率论与数理统计.pdf',
        value: 'https://gitee.com/nksckx/gailvlun/raw/master/%E6%A6%82%E7%8E%87%E8%AE%BA%E4%B8%8E%E6%95%B0%E7%90%86%E7%BB%9F%E8%AE%A1.pdf'
      },
      {
        key: '概率论与数理统计-习题全解指南(浙大第四版).pdf',
        value: 'https://gitee.com/nksckx/gailvlun/raw/master/%E6%A6%82%E7%8E%87%E8%AE%BA%E4%B8%8E%E6%95%B0%E7%90%86%E7%BB%9F%E8%AE%A1-%E4%B9%A0%E9%A2%98%E5%85%A8%E8%A7%A3%E6%8C%87%E5%8D%97(%E6%B5%99%E5%A4%A7%E7%AC%AC%E5%9B%9B%E7%89%88).pdf'
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
