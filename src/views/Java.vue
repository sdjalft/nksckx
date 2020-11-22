<!--Java-->
<template>
  <div class="ziHome">
    <p class="ziTitle">Java资料汇总</p>
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
        key: 'java课件.zip',
        value: 'https://gitee.com/nksckx/javayuyan/raw/master/java%E8%AF%BE%E4%BB%B6.zip'
      },
      {
        key: '对象序列化文件解析.docx',
        value: 'https://gitee.com/nksckx/javayuyan/raw/master/%E5%AF%B9%E8%B1%A1%E5%BA%8F%E5%88%97%E5%8C%96%E6%96%87%E4%BB%B6%E8%A7%A3%E6%9E%90.docx'
      },
      {
        key: '线程大作业.zip',
        value: 'https://gitee.com/nksckx/javayuyan/raw/master/%E7%BA%BF%E7%A8%8B%E5%A4%A7%E4%BD%9C%E4%B8%9A.zip'
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
