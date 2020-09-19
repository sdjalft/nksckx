<!--线性代数-->
<template>
  <div class="ziHome">
    <p class="ziTitle">线性代数资料汇总</p>
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
        key: '其他学校试题.rar',
        value: 'https://gitee.com/nksckx/xianxingdaishu/raw/master/%E5%85%B6%E4%BB%96%E5%AD%A6%E6%A0%A1%E8%AF%95%E9%A2%98.rar'
      },
      {
        key: '南开试题03-15.rar',
        value: 'https://gitee.com/nksckx/xianxingdaishu/raw/master/%E5%8D%97%E5%BC%80%E8%AF%95%E9%A2%9803-15.rar'
      },
      {
        key: '各章节练习.rar',
        value: 'https://gitee.com/nksckx/xianxingdaishu/raw/master/%E5%90%84%E7%AB%A0%E8%8A%82%E7%BB%83%E4%B9%A0.rar'
      },
      {
        key: '川大教材习题答案.doc',
        value: 'https://gitee.com/nksckx/xianxingdaishu/raw/master/%E5%B7%9D%E5%A4%A7%E6%95%99%E6%9D%90%E4%B9%A0%E9%A2%98%E7%AD%94%E6%A1%88.doc'
      },
      {
        key: '线代课件.rar',
        value: 'https://gitee.com/nksckx/xianxingdaishu/raw/master/%E7%BA%BF%E4%BB%A3%E8%AF%BE%E4%BB%B6.rar'
      },
      {
        key: '线性代数作业.zip',
        value: 'https://gitee.com/nksckx/xianxingdaishu/raw/master/%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0%E4%BD%9C%E4%B8%9A.zip'
      },
      {
        key: '线性代数课件.zip',
        value: 'https://gitee.com/nksckx/xianxingdaishu/raw/master/%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0%E8%AF%BE%E4%BB%B6.zip'
      },
      {
        key: 'Matlab Basic Knowledge.pdf',
        value: 'https://gitee.com/nksckx/xianxingdaishu/raw/master/Matlab%20Basic%20Knowledge.pdf'
      },
      {
        key: '线性代数-胡显佑-北京大学出版社.pdf',
        value: 'https://gitee.com/nksckx/xianxingdaishu/raw/master/%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0-%E8%83%A1%E6%98%BE%E4%BD%91-%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E5%87%BA%E7%89%88%E7%A4%BE.pdf'
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
