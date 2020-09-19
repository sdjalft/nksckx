<!--C/C++-->
<template>
  <div class="ziHome">
    <p class="ziTitle">C/C++资料汇总</p>
    <p>记得2018年12月25日，那是一个惨绝人寰的圣诞节。
那一天。C语言。上机考试。
如果你误以为自己终于可以摆脱c的苦海，不好意思弟弟，1月我们将迎来更加惨绝人寰的c！语！言！笔！试！
兄弟稳住，我们能carry！
海量复习资料，免费送！历年真题配高清答案，免费送！现在点开还送张波老师亲手设计的复习ppt，你还在等什么？！还不打开资料，开（默）心（默）复（偷）习（学）！</p>
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
        key: 'C语言上机课课件.zip',
        value: 'https://gitee.com/nksckx/cyuyan/raw/master/C%E8%AF%AD%E8%A8%80%E4%B8%8A%E6%9C%BA%E8%AF%BE%E8%AF%BE%E4%BB%B6.zip'
      },
      {
        key: 'C语言课件.zip',
        value: 'https://gitee.com/nksckx/cyuyan/raw/master/C%E8%AF%AD%E8%A8%80%E8%AF%BE%E4%BB%B6.zip'
      },
      {
        key: 'C语言题目.zip',
        value: 'https://gitee.com/nksckx/cyuyan/raw/master/C%E8%AF%AD%E8%A8%80%E9%A2%98%E7%9B%AE.zip'
      },
      {
        key: 'C陷阱与缺陷.pdf',
        value: 'https://gitee.com/nksckx/cyuyan/raw/master/C%E9%99%B7%E9%98%B1%E4%B8%8E%E7%BC%BA%E9%99%B7.pdf'
      },
      {
        key: '《C程序设计语言》第2版_非扫描版.pdf',
        value: 'https://gitee.com/nksckx/cyuyan/raw/master/%E3%80%8AC%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E8%AF%AD%E8%A8%80%E3%80%8B%E7%AC%AC2%E7%89%88_%E9%9D%9E%E6%89%AB%E6%8F%8F%E7%89%88.pdf'
      },
      {
        key: 'C++语言上机课课件.zip',
        value: 'https://gitee.com/nksckx/cyuyan/raw/master/C++%E8%AF%AD%E8%A8%80%E4%B8%8A%E6%9C%BA%E8%AF%BE%E8%AF%BE%E4%BB%B6.zip'
      },
      {
        key: 'C++语言课件.zip',
        value: 'https://gitee.com/nksckx/cyuyan/raw/master/C++%E8%AF%AD%E8%A8%80%E8%AF%BE%E4%BB%B6.zip'
      },
      {
        key: 'Thinking in C++.pdf',
        value: 'https://gitee.com/nksckx/cyuyan/raw/master/Thinking%20in%20C++.pdf'
      },
      {
        key: '往年考题.zip',
        value: 'https://gitee.com/nksckx/cyuyan/raw/master/%E5%BE%80%E5%B9%B4%E8%80%83%E9%A2%98.zip'
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
