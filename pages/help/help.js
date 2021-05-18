// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    helpList: [{
      value: "如何新建班级",
      herf: ""
    }, {
      value: "如何加入班级",
      herf: ""
    }, {
      value: "二维码失效",
      herf: ""
    }, {
      value: "班级消息订阅如何订阅",
      herf: ""
    }]
  },
  navToFeedback() {
    wx.navigateTo({
      url: '/pages/help/feedback/feedback',
    })
  },
  changetab(e) {
    let data = e.target.dataset
    if (!this.data.current == data.index) {
      this.animate('.underline', [{
        width: '64rpx'
      }, {
        width: '226rpx',
        left: '54rpx',
        ease: 'ease-out'
      }, {
        width: '64rpx',
        left: this.data.current ? '54rpx' : '218rpx',
        ease: 'ease-out'
      }], 200)
    }
    this.setData({
      current: data.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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