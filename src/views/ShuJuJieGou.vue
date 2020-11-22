<!--数据结构-->
<template>
  <div class="ziHome">
    <p class="ziTitle">数据结构学习资料</p>
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
        key: '数据结构历届试卷.zip',
        value: 'https://gitee.com/nksckx/shujujiegou/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%8E%86%E5%B1%8A%E8%AF%95%E5%8D%B7.zip'
      },
      {
        key: '数据结构读我.txt',
        value: 'https://gitee.com/nksckx/shujujiegou/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E8%AF%BB%E6%88%91.txt'
      },
      {
        key: '数据结构课件.zip',
        value: 'https://gitee.com/nksckx/shujujiegou/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E8%AF%BE%E4%BB%B6.zip'
      },
      {
        key: '算法图解.pdf',
        value: 'https://gitee.com/nksckx/shujujiegou/raw/master/%E7%AE%97%E6%B3%95%E5%9B%BE%E8%A7%A3.pdf'
      },
      {
        key: '葵花宝典.rar',
        value: 'https://gitee.com/nksckx/shujujiegou/raw/master/%E8%91%B5%E8%8A%B1%E5%AE%9D%E5%85%B8.rar'
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
