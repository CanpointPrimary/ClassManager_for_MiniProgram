// app.js
App({
  globalData: {
    baseUrl: 'http://canpoint/'
  },
  onShow(e) {
    if (e.path.indexOf('pages/start') == -1) {
      wx.getClipboardData({
        success: (option) => {
          wx.hideToast()
          if (option.data.indexOf('班级口令') != -1) {
            wx.showToast({
              title: '检测到班级口令',
              icon: 'none',
              duration: 2000
            })
            setTimeout(() => {
              wx.setClipboardData({
                data: ' ',
                success() {
                  wx.navigateTo({
                    url: '/pages/joinClass/joinClass?invited=1'
                  })
                  wx.hideToast()
                }
              })
            }, 2000)
          }
        },
      })
    }

  }
})