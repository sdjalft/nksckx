<!--英语-->
<template>
  <div class="ziHome">
    <p class="ziTitle">英语学习资料</p>
    <p>这里包含了大学英语课程的学习资料以及考级需要的真题。</p>
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
        key: '2017级2018-2019年第一学期英语题型.docx',
        value: 'https://gitee.com/nksckx/yingyu/raw/master/2017%E7%BA%A72018-2019%E5%B9%B4%E7%AC%AC%E4%B8%80%E5%AD%A6%E6%9C%9F%E8%8B%B1%E8%AF%AD%E9%A2%98%E5%9E%8B.docx'
      },
      {
        key: '2017六级真题全.doc',
        value: 'https://gitee.com/nksckx/yingyu/raw/master/2017%E5%85%AD%E7%BA%A7%E7%9C%9F%E9%A2%98%E5%85%A8.doc'
      },
      {
        key: '四级真题.zip',
        value: 'https://gitee.com/nksckx/yingyu/raw/master/%E5%9B%9B%E7%BA%A7%E7%9C%9F%E9%A2%98.zip'
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
