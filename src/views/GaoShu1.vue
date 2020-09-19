<!--一元函数微积分-->
<template>
  <div class="ziHome">
    <p class="ziTitle">一元函数微积分资料汇总</p>
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
        key: '一元微分课件.rar',
        value: 'https://gitee.com/nksckx/gaodengshuxue/raw/master/%E4%B8%80%E5%85%83%E5%BE%AE%E5%88%86%E8%AF%BE%E4%BB%B6.rar'
      },
      {
        key: '第二、三章习题课.ppt',
        value: 'https://gitee.com/nksckx/gaodengshuxue/raw/master/%E7%AC%AC%E4%BA%8C%E3%80%81%E4%B8%89%E7%AB%A0%E4%B9%A0%E9%A2%98%E8%AF%BE.ppt'
      },
      {
        key: '一元函数微积分考试试卷.zip',
        value: 'https://gitee.com/nksckx/gaodengshuxue/raw/master/%E4%B8%80%E5%85%83%E5%87%BD%E6%95%B0%E5%BE%AE%E7%A7%AF%E5%88%86%E8%80%83%E8%AF%95%E8%AF%95%E5%8D%B7.zip'
      },
      {
        key: '一元积分课件.rar',
        value: 'https://gitee.com/nksckx/gaodengshuxue/raw/master/%E4%B8%80%E5%85%83%E7%A7%AF%E5%88%86%E8%AF%BE%E4%BB%B6.rar'
      },
      {
        key: '书后题答案.rar',
        value: 'https://gitee.com/nksckx/gaodengshuxue/raw/master/%E4%B9%A6%E5%90%8E%E9%A2%98%E7%AD%94%E6%A1%88.rar'
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
