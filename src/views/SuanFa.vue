<!--算法导论-->
<template>
  <div class="ziHome">
    <p class="ziTitle">算法导论资料汇总</p>
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
        key: '算法设计.pdf',
        value: 'https://gitee.com/nksckx/suanfa/raw/master/%E7%AE%97%E6%B3%95%E8%AE%BE%E8%AE%A1.pdf'
      },
      {
        key: '课程重点.pdf',
        value: 'https://gitee.com/nksckx/suanfa/raw/master/%E8%AF%BE%E7%A8%8B%E9%87%8D%E7%82%B9.pdf'
      },
      {
        key: '算法导论有笔记——by 张金毅.pdf',
        value: 'https://gitee.com/nksckx/suanfa/raw/master/%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA%E6%9C%89%E7%AC%94%E8%AE%B0.pdf'
      },
      {
        key: '算法设计英文版.pdf',
        value: 'https://gitee.com/nksckx/suanfa/raw/master/%E7%AE%97%E6%B3%95%E8%AE%BE%E8%AE%A1%E8%8B%B1%E6%96%87%E7%89%88.pdf'
      },
      {
        key: '课件.zip',
        value: 'https://gitee.com/nksckx/suanfa/raw/master/%E8%AF%BE%E4%BB%B6.zip'
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
