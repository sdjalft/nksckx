<!--机器学习导论-->
<template>
  <div class="ziHome">
    <p class="ziTitle">机器学习导论资料汇总</p>
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
      ref: [
        {
          key: 'ESLII_print12.pdf',
          value: 'https://gitee.com/nksckx/machinelearning/raw/master/ESLII_print12.pdf'
        },
        {
          key: 'Learning-with-local-and-global-consistency.pdf',
          value: 'https://gitee.com/nksckx/machinelearning/raw/master/Learning-with-local-and-global-consistency.pdf'
        },
        {
          key: 'Pattern Recognition and MachineLearning.pdf',
          value: 'https://gitee.com/nksckx/machinelearning/raw/master/Pattern%20Recognition%20and%20MachineLearning.pdf'
        },
        {
          key: 'fli-icml03.pdf',
          value: 'https://gitee.com/nksckx/machinelearning/raw/master/fli-icml03.pdf'
        },
        {
          key: 'mml-book.pdf',
          value: 'https://gitee.com/nksckx/machinelearning/raw/master/mml-book.pdf'
        },
        {
          key: 'nips01-discriminativegenerative.pdf',
          value: 'https://gitee.com/nksckx/machinelearning/raw/master/nips01-discriminativegenerative.pdf'
        },
        {
          key: '机器学习_周志华.pdf',
          value: 'https://gitee.com/nksckx/machinelearning/raw/master/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0_%E5%91%A8%E5%BF%97%E5%8D%8E.pdf'
        },
        {
          key: '统计学习方法-李航.pdf',
          value: 'https://gitee.com/nksckx/machinelearning/raw/master/%E7%BB%9F%E8%AE%A1%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95-%E6%9D%8E%E8%88%AA.pdf'
        },
        {
          key: '课件.zip',
          value: 'https://gitee.com/nksckx/machinelearning/raw/master/%E8%AF%BE%E4%BB%B6.zip'
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
