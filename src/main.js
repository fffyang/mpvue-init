import Vue from 'vue'
import App from './App'

import { api } from '@/utils/http'
import { newData, getDifferent } from '@/utils/public'
import '@/utils/weui.css'

Vue.prototype.$get = api.get
Vue.prototype.$post = api.post
Vue.prototype.$new = newData
Vue.prototype.$getDifferent = getDifferent

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: [],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '第一个小程序',
      navigationBarTextStyle: 'black'
    }
  }
}
