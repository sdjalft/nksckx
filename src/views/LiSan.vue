<!--离散数学-->
<template>
  <div class="ziHome">
    <p class="ziTitle">离散数学资料汇总</p>
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
        key: '离散数学课件.zip',
        value: 'https://gitee.com/nksckx/lisanshuxue/raw/master/%E7%A6%BB%E6%95%A3%E6%95%B0%E5%AD%A6%E8%AF%BE%E4%BB%B6.zip'
      },
      {
        key: '离散数学习题及部分历届试题.zip',
        value: 'https://gitee.com/nksckx/lisanshuxue/raw/master/%E7%A6%BB%E6%95%A3%E6%95%B0%E5%AD%A6%E4%B9%A0%E9%A2%98%E5%8F%8A%E9%83%A8%E5%88%86%E5%8E%86%E5%B1%8A%E8%AF%95%E9%A2%98.zip'
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
