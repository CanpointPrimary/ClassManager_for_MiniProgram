let header = {
  "Content-type": "application/x-www-form-urlencoded"
}
let request = function (url, method, token, data) {
  return new Promise((resolve, reject) => {
    if (token) {
      header['Authorization'] = token
      wx.request({
        url: 'http://demo.hackedin.cn' + url,
        data,
        method: method ? method : 'get',
        header,
        success: (res) => {
          resolve(res.data)
        },
        fail: (res) => {
          reject(res)
        }
      })
    }
  })

}
module.exports = {
  request
}