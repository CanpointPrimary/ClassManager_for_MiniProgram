// pages/login/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: -1,
    realName:'',
    array: [{
        id: 0,
        subject: "语文"
      },
      {
        id: 1,
        subject: "数学"
      },
      {
        id: 2,
        subject: "英语"
      },
      {
        id: 3,
        subject: "美术"
      },
    ]
  },
  bindPickerChange: function (e) {
    wx.hideKeyboard()
    this.setData({
      index: e.detail.value
    })
  },
  bindKeyInput: function(e){
    this.setData({
      realName: e.detail.value
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