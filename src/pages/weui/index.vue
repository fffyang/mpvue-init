<template>
  <div class="page">
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" @change="swiperChange" @animationfinish="animationfinish">
      <div v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" />
        </swiper-item>
      </div>
    </swiper>
    <picker class="weui-btn mt20" mode="time" :value="time" start="09:01" end="21:01" @change="timeChange">
      <button type="default">时间选择器</button>
    </picker>
    <switch class="mt20" checked @change = "switchChange"/>
     <checkbox class="mt20" :value="check.value" :checked="check.checked" />
    <radio class="mt20" :value="check.value" :checked="check.checked" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      time: '12:01',
      check: {
        value: '0',
        checked: true
      }
    }
  },
  onLoad () {
  },
  methods: {
    swiperChange (e) {
      console.log('第' + e.mp.detail.current + '张轮播图发生了滑动')
    },
    animationfinish (e) {
      console.log('第' + e.mp.detail.current + '张轮播图滑动结束')
    },
    timeChange (e) {
      console.log('选中的时间为：' + e.mp.detail.value)
    },
    switchChange (e) {
      console.log('switch发生change事件，携带value值为：' + e.mp.detail.value)
    }
  }
}
</script>

<style lang="scss" scoped>
page {
  margin-top: 50px;
  .slide-image {
    width: 100%;
    height: 100%;
  }
}
</style>