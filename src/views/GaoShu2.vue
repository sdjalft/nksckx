<!--多元函数微积分/场论-->
<template>
  <div class="ziHome">
    <p class="ziTitle">多元函数微积分 场论和无穷级数资料汇总</p>
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
        key: '多元微积分课件.rar',
        value: 'https://gitee.com/nksckx/gaodengshuxue/raw/master/%E5%A4%9A%E5%85%83%E5%BE%AE%E7%A7%AF%E5%88%86%E8%AF%BE%E4%BB%B6.rar'
      },
      {
        key: '同济高等数学第六版上下全.pdf',
        value: 'https://gitee.com/nksckx/gaodengshuxue/raw/master/%E5%90%8C%E6%B5%8E%E9%AB%98%E7%AD%89%E6%95%B0%E5%AD%A6%E7%AC%AC%E5%85%AD%E7%89%88%E4%B8%8A%E4%B8%8B%E5%85%A8.pdf'
      },
      {
        key: '场论课件.rar',
        value: 'https://gitee.com/nksckx/gaodengshuxue/raw/master/%E5%9C%BA%E8%AE%BA%E8%AF%BE%E4%BB%B6.rar'
      },
      {
        key: '多元微积分场论和无穷级数习题.zip',
        value: 'https://gitee.com/nksckx/gaodengshuxue/raw/master/%E5%A4%9A%E5%85%83%E5%BE%AE%E7%A7%AF%E5%88%86%E5%9C%BA%E8%AE%BA%E5%92%8C%E6%97%A0%E7%A9%B7%E7%BA%A7%E6%95%B0%E4%B9%A0%E9%A2%98.zip'
      },
      {
        key: '多元微积分场论和无穷级数考试试卷.zip',
        value: 'https://gitee.com/nksckx/gaodengshuxue/raw/master/%E5%A4%9A%E5%85%83%E5%BE%AE%E7%A7%AF%E5%88%86%E5%9C%BA%E8%AE%BA%E5%92%8C%E6%97%A0%E7%A9%B7%E7%BA%A7%E6%95%B0%E8%80%83%E8%AF%95%E8%AF%95%E5%8D%B7.zip'
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
