<!--大学语文-->
<template>
  <div class="ziHome">
    <p class="ziTitle">大学语文学习资料汇总</p>
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
        key: '大学语文背诵篇目.docx',
        value: 'https://gitee.com/nksckx/daxueyuwen/raw/master/%E5%A4%A7%E5%AD%A6%E8%AF%AD%E6%96%87%E8%83%8C%E8%AF%B5%E7%AF%87%E7%9B%AE.docx'
      },
      {
        key: '大语.docx',
        value: 'https://gitee.com/nksckx/daxueyuwen/raw/master/%E5%A4%A7%E8%AF%AD.docx'
      },
      {
        key: '大语10-11试卷.docx',
        value: 'https://gitee.com/nksckx/daxueyuwen/raw/master/%E5%A4%A7%E8%AF%AD10-11%E8%AF%95%E5%8D%B7.docx'
      },
      {
        key: '大语答案.rar',
        value: 'https://gitee.com/nksckx/daxueyuwen/raw/master/%E5%A4%A7%E8%AF%AD%E7%AD%94%E6%A1%88.rar'
      },
      {
        key: '大语试卷.docx',
        value: 'https://gitee.com/nksckx/daxueyuwen/raw/master/%E5%A4%A7%E8%AF%AD%E8%AF%95%E5%8D%B7.docx'
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
