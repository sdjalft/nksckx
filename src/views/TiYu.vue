<!--体育-->
<template>
  <div class="ziHome">
    <p class="ziTitle">体育学习资料汇总</p>
    <p>这里有南开体育理论测试原题，涵盖各科，一定有你需要的!</p>
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
        key: '乒乓球考试资料',
        value: 'https://gitee.com/nksckx/tiyu/raw/master/%E4%B9%92%E4%B9%93%E7%90%83.zip'
      },
      {
        key: '啦啦操考试资料',
        value: 'https://gitee.com/nksckx/tiyu/raw/master/%E5%95%A6%E5%95%A6%E6%93%8D.zip'
      },
      {
        key: '国际象棋考试资料',
        value: 'https://gitee.com/nksckx/tiyu/raw/master/%E5%9B%BD%E9%99%85%E8%B1%A1%E6%A3%8B.zip'
      },
      {
        key: '太极拳考试资料',
        value: 'https://gitee.com/nksckx/tiyu/raw/master/%E5%A4%AA%E6%9E%81%E6%8B%B3.zip'
      },
      {
        key: '女子防身术考试资料',
        value: 'https://gitee.com/nksckx/tiyu/raw/master/%E5%A5%B3%E5%AD%90%E9%98%B2%E8%BA%AB%E6%9C%AF.zip'
      },
      {
        key: '武术套路考试资料',
        value: 'https://gitee.com/nksckx/tiyu/raw/master/%E6%AD%A6%E6%9C%AF%E5%A5%97%E8%B7%AF.zip'
      },
      {
        key: '游泳考试资料',
        value: 'https://gitee.com/nksckx/tiyu/raw/master/%E6%B8%B8%E6%B3%B3.zip'
      },
      {
        key: '篮球考试资料',
        value: 'https://gitee.com/nksckx/tiyu/raw/master/%E7%AF%AE%E7%90%83.zip'
      },
      {
        key: '网球考试资料',
        value: 'https://gitee.com/nksckx/tiyu/raw/master/%E7%BD%91%E7%90%83.zip'
      },
      {
        key: '羽毛球考试资料',
        value: 'https://gitee.com/nksckx/tiyu/raw/master/%E7%BE%BD%E6%AF%9B%E7%90%83.zip'
      },
      {
        key: '综合题库',
        value: 'https://gitee.com/nksckx/tiyu/raw/master/%E7%BB%BC%E5%90%88%E9%A2%98%E5%BA%93.zip'
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
