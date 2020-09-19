<!--数字逻辑-->
<template>
  <div class="ziHome">
    <p class="ziTitle">数字逻辑学习资料</p>
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
        key: '数字逻辑课件.zip',
        value: 'https://gitee.com/nksckx/shuzuluoji/raw/master/%E6%95%B0%E5%AD%97%E9%80%BB%E8%BE%91%E8%AF%BE%E4%BB%B6.zip'
      },
      {
        key: '数字逻辑书后题.zip',
        value: 'https://gitee.com/nksckx/shuzuluoji/raw/master/%E6%95%B0%E5%AD%97%E9%80%BB%E8%BE%91%E4%B9%A6%E5%90%8E%E9%A2%98.zip'
      },
      {
        key: '其他院校数字逻辑题目.zip',
        value: 'https://gitee.com/nksckx/shuzuluoji/raw/master/%E5%85%B6%E4%BB%96%E9%99%A2%E6%A0%A1%E6%95%B0%E5%AD%97%E9%80%BB%E8%BE%91%E9%A2%98%E7%9B%AE.zip'
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
