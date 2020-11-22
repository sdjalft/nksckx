<!--计算机组成原理-->
<template>
  <div class="ziHome">
    <p class="ziTitle">计算机组成原理资料汇总</p>
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
        key: '计算机组成原理课件.zip',
        value: 'https://gitee.com/nksckx/jisuanjizuchengyuanli/raw/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BB%84%E6%88%90%E5%8E%9F%E7%90%86%E8%AF%BE%E4%BB%B6.zip'
      },
      {
        key: '计算机组成原理第二版-唐朔飞.pdf',
        value: 'https://gitee.com/nksckx/jisuanjizuchengyuanli/raw/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BB%84%E6%88%90%E5%8E%9F%E7%90%86%E7%AC%AC%E4%BA%8C%E7%89%88-%E5%94%90%E6%9C%94%E9%A3%9E.pdf'
      },
      {
        key: '期末复习大ppt',
        value: 'https://gitee.com/nksckx/jisuanjizuchengyuanli/raw/master/%E6%9C%9F%E6%9C%AB.pptx'
      },
      {
        key: '组成原理_测验.doc',
        value: 'https://gitee.com/nksckx/jisuanjizuchengyuanli/raw/master/%E7%BB%84%E6%88%90%E5%8E%9F%E7%90%86_%E6%B5%8B%E9%AA%8C.doc'
      },
      {
        key: ' 组成原理_测验答案.doc',
        value: 'https://gitee.com/nksckx/jisuanjizuchengyuanli/raw/master/%E7%BB%84%E6%88%90%E5%8E%9F%E7%90%86_%E6%B5%8B%E9%AA%8C%E7%AD%94%E6%A1%88.doc'
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
