let header = {
  "Content-type": "application/x-www-form-urlencoded"
}
let request = function (url, method, token, data) {
  if (token) {
    header['Authorization'] = token
    wx.request({
      url,
      data,
      method,
      header
    })
  }
}
module.exports = {
  request
}