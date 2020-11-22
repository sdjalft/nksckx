<!--大学物理Ⅳ-->
<template>
  <div class="ziHome">
    <p class="ziTitle">大学物理Ⅳ资料汇总</p>
    <p>不知道各位是否还是被大物折磨得体无完肤，emmm…我似乎看见了牛顿的微笑…
接下来是重点.还有两点.. (￫ܫ￩)
emmm,有没有感觉云里雾里，就像学习大物一样○( ＾皿＾)っHiahiahia…
废话不多说，资源奉上..</p>
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
        key: '上帝掷骰子吗——量子物理史话.pdf',
        value: 'https://gitee.com/nksckx/daxuewuli/raw/master/%E4%B8%8A%E5%B8%9D%E6%8E%B7%E9%AA%B0%E5%AD%90%E5%90%97%E2%80%94%E2%80%94%E9%87%8F%E5%AD%90%E7%89%A9%E7%90%86%E5%8F%B2%E8%AF%9D.pdf'
      },
      {
        key: '99-07往年试卷.zip',
        value: 'https://gitee.com/nksckx/daxuewuli/raw/master/%E5%A4%A7%E7%89%A94%2099-07%E5%BE%80%E5%B9%B4%E8%AF%95%E5%8D%B7.zip'
      },
      {
        key: '大物4复习重点.rar',
        value: 'https://gitee.com/nksckx/daxuewuli/raw/master/%E5%A4%A7%E7%89%A94%E5%A4%8D%E4%B9%A0%E9%87%8D%E7%82%B9.rar'
      },
      {
        key: '大物4补充练习.rar',
        value: 'https://gitee.com/nksckx/daxuewuli/raw/master/%E5%A4%A7%E7%89%A94%E8%A1%A5%E5%85%85%E7%BB%83%E4%B9%A0.rar'
      },
      {
        key: '大物4课件.rar',
        value: 'https://gitee.com/nksckx/daxuewuli/raw/master/%E5%A4%A7%E7%89%A94%E8%AF%BE%E4%BB%B6.rar'
      },
      {
        key: '大物4课后题答案.zip',
        value: 'https://gitee.com/nksckx/daxuewuli/raw/master/%E5%A4%A7%E7%89%A94%E8%AF%BE%E5%90%8E%E9%A2%98%E7%AD%94%E6%A1%88.zip'
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
