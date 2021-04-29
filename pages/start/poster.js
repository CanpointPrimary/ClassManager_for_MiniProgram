// pages/start/poster.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp()
    wx.request({
      url: app.globalData.baseUrl + 'api/start',
      success: ({
        data
      }) => {
        this.setData({
          postSrc: data.src
        })
        wx.login({
          success: (res) => {
            // 先保存接口后修改
            wx.setStorage({
              data: res.code,
              key: 'code',
            })
          }
        })
        setTimeout(() => {
          wx.getStorage({
            key: 'currentUser',
            success: () => {
              wx.switchTab({
                url: '/pages/homePage/homePage',
              })
            },
            fail: () => {
              wx.reLaunch({
                url: './guide',
              })
            }
          })
        }, 3000)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})