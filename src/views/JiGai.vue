<!--计算机概论-->
<template>
  <div class="ziHome">
    <p class="ziTitle">计算机概论资料汇总</p>
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
        key: '中文课件.rar',
        value: 'https://gitee.com/nksckx/jisuanjigailun/raw/master/%E4%B8%AD%E6%96%87%E8%AF%BE%E4%BB%B6.rar'
      },
      {
        key: '英文课件.rar',
        value: 'https://gitee.com/nksckx/jisuanjigailun/raw/master/%E8%8B%B1%E6%96%87%E8%AF%BE%E4%BB%B6.rar'
      },
      {
        key: '计概知识点+试题.zip',
        value: 'https://gitee.com/nksckx/jisuanjigailun/raw/master/%E8%AE%A1%E6%A6%82%E7%9F%A5%E8%AF%86%E7%82%B9+%E8%AF%95%E9%A2%98.zip'
      },
      {
        key: '摘要.zip',
        value: 'https://gitee.com/nksckx/jisuanjigailun/raw/master/%E6%91%98%E8%A6%81.zip'
      },
      {
        key: '精华.zip',
        value: 'https://gitee.com/nksckx/jisuanjigailun/raw/master/%E7%B2%BE%E5%8D%8E.zip'
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
