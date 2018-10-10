<template>
  <div class="container btns">
    <camera device-position="back" flash="off" binderror="error" v-if="showCamera" style="width: 100%; height: 300px;"></camera>
    <button type="primary" class="p10 mt10" @click="chosePhoto">选取相册</button>
    <button type="primary" class="p10 mt10" @click="showPhoto">拍照</button>
    <button type="primary" class="p10 mt10" @click="takePhoto">咔嚓</button>
    <button type="primary" class="p10 mt10" @click="startRecord">开始录像</button>
    <button type="primary" class="p10 mt10" @click="stopRecord">结束录像</button>
    <div class="mt10" @click="preview">预览</div>
    <img :src="img" v-if="img != ''" @click="preview">
    <video class="video" :src="videoSrc" v-if="videoSrc != ''"></video>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      img: '',
      videoSrc: '',
      ctx: null,
      showCamera: false
    }
  },
  onLoad () {
    this.ctx = wx.createCameraContext()
  },
  methods: {
    // 选取文件
    chosePhoto () {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          this.img = res.tempFilePaths
        }
      })
    },
    showPhoto () {
      this.showCamera = true
    },
    takePhoto () {
      this.ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          this.img = res.tempImagePath
        }
      })
    },
    preview () {
      if (this.img === '') {
        wx.showToast({
          title: '无图片可预览',
          icon: 'none'
        })
        return
      }
      wx.previewImage({
        urls: [this.img]
      })
    },
    startRecord () {
      this.ctx.startRecord({
        success: (res) => {
          console.log('startRecord')
        }
      })
    },
    stopRecord () {
      this.ctx.stopRecord({
        success: (res) => {
          debugger
          this.img = res.tempThumbPath
          this.videoSrc = res.tempVideoPath
        }
      })
    },
    error (e) {
      console.log(e.detail)
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  align-items: center;
}
</style>