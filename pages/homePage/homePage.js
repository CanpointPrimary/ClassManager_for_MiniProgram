// pages/homePage/homePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    realName: '李老师',
    menuList: [],
    isTourist: true,
    isToDo: true,
    hasClass: true,
    classInfo:{
      name: '1年级2班',
      code: '234234CSwe'
    }
  },
  copyCode(){
    wx.setClipboardData({
      data: this.data.classInfo.code,
      success: (res)=> {
        wx.showToast({
          title: '已复制班级码到剪贴板',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  changeTab(e) {
    this.setData({
      isToDo: e.target.dataset.istodo
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://canpoint/api/menu',
      success: ({
        data
      }) => {
        this.setData({
          menuList: data.menu
        })
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