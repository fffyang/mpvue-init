var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()

// 添加拦截器
fly.interceptors.request.use((config, promise) => {
  // 给所有请求添加自定义header
  config.headers['X-Tag'] = 'flyio'
  return config
})

const api = {
  // get
  async get (url, getData = {}) {
    let params = JSON.parse(JSON.stringify(getData))
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(
        response => {
          if (response.status === 200) {
            resolve(response.data)
          }
        },
        error => {
          reject(error)
        }
      )
    })
  },
  // post
  async post (url, postData = {}) {
    let datas = JSON.parse(JSON.stringify(postData))
    return new Promise((resolve, reject) => {
      fly.post(url, datas).then(
        response => {
          if (response.status === 200) {
            resolve(response.data)
          }
        },
        error => {
          reject(error)
        }
      )
    })
  }
}

export { api }
