<!--思想道德修养与法律基础-->
<template>
  <div class="ziHome">
    <p class="ziTitle">思想道德修养与法律基础资料汇总</p>
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
        key: '思修范围张长虹老师.docx',
        value: 'https://gitee.com/nksckx/sixiu/raw/master/%E6%80%9D%E4%BF%AE%E8%8C%83%E5%9B%B4%20%E5%BC%A0%E9%95%BF%E8%99%B9%E8%80%81%E5%B8%88.docx'
      },
      {
        key: '思修重点.rar',
        value: 'https://gitee.com/nksckx/sixiu/raw/master/%E6%80%9D%E4%BF%AE%E9%87%8D%E7%82%B9.rar'
      },
      {
        key: '考试试题.rar',
        value: 'https://gitee.com/nksckx/sixiu/raw/master/%E8%80%83%E8%AF%95%E8%AF%95%E9%A2%98.rar'
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
