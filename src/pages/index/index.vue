<template>
  <div class="container">
    <button class="p10" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" v-if="!isAgree">获取权限</button>
    <image class="user-logo" :src="userInfo.avatarUrl" mode="widthFix" v-if="userInfo.avatarUrl &&  userInfo.avatarUrl != ''" />
    <p class="text-center mb20">{{userInfo.nickName}}</p>
    <div>计数结果：{{count}}</div>
    <a class="navlink mt10" href="/pages/test1/main?test='test'">进入计数器页面</a>
    <button class="mt10 p10" @click="routerLink('/pages/test1/main?test=test')">跳转计数器页面</button>
    <button type="primary" class="mt10 p10" @click="testApi">http测试</button>
    <button type="primary" class="mt10 p10" @click="routerLink('/pages/imgtest/main')">图片测试</button>
  </div>
</template>

<script>
import globalStore from '../../stores/global-store'

export default {
  data: function () {
    return {
      userInfo: {},
      code: '',
      isAgree: true
    }
  },
  onLoad () {
    this.getUserInfo()
  },
  mounted () {
    this.getSetting()
  },
  methods: {
    // 页面跳转
    routerLink (path) {
      wx.navigateTo({url: path})
    },
    bindGetUserInfo (e) {
      // console.log(e.mp.detail.rawData)
      if (e.mp.detail.rawData) {
        this.isAgree = true
        // 用户按了允许授权按钮
        console.log('用户按了允许授权按钮')
      } else {
        // 用户按了拒绝按钮
        console.log('用户按了拒绝按钮')
      }
    },
    // 查看用户是否授权
    getSetting () {
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: (res) => {
                this.isAgree = true
                console.log(res.userInfo)
                // 用户已经授权过
                console.log('用户已经授权过')
              }
            })
          } else {
            this.isAgree = false
            console.log('用户还未授权过')
          }
        }
      })
    },
    // 获取用户信息
    getUserInfo () {
      wx.login({
        success: (res) => {
          // 返回code
          this.code = res.code
          console.log('code', this.code)
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = this.$new(res.userInfo)
              console.log('user', this.userInfo)
            }
          })
        }
      })
    },
    // 测试api
    async testApi () {
      let datas = await this.$get('https://api.weixin.qq.com/sns/jscode2session', {
        appid: 'wx084b1e5fc068635c',
        secret: '0df3179f4469b584e97310551bf0cc69',
        js_code: this.code,
        grant_type: 'authorization_code'
      })
      console.log('userKey', datas)
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
.container{
  .user-logo{
    width: 132px;
  }
  .navlink {
    text-decoration: underline;
  }
}
</style>