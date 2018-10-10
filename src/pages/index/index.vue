<template>
  <div class="container">
    <img :src="userInfo.avatarUrl">
    <div>计数结果：{{count}}</div>
    <a class="navlink mt10" href="/pages/test1/main">进入计数器页面</a>
    <button class="mt10 p10" @click="routerLink">跳转计数器页面</button>
    <button type="primary" class="mt10 p10" @click="testApi">http测试</button>
  </div>
</template>

<script>
import globalStore from '../../stores/global-store'

export default {
  data: function () {
    return {
      userInfo: null
    }
  },
  onLoad () {
    this.getUserInfo()
  },
  methods: {
    // 页面跳转
    routerLink () {
      const url = '/pages/test1/main'
      wx.navigateTo({url})
    },
    // 获取用户信息
    getUserInfo () {
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
              console.log('user', res)
            }
          })
        }
      })
    },
    // 测试api
    async testApi () {
      let datas = await this.$get('https://api.weixin.qq.com/sns/jscode2session', {
        appid: 'wx7d02ffbda9059d21',
        secret: '273b5b39e3ac123cd2b85eb43137da7b',
        js_code: 'JSCODE',
        grant_type: 'authorization_code'
      })
      console.log('http', datas)
    }
  },
  computed: {
    count () {
      return globalStore.state.count
    }
  }
}
</script>

<style lang="scss" scoped>
.navlink {
  text-decoration: underline;
}
</style>