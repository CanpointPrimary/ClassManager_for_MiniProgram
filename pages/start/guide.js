// pages/start/guide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 这只是是用来看效果的假数据
    guideList: [{
      id: 0,
      descTitle: '分层作业',
      descBody: '针对不同学生，作业分层发布'
    }, {
      id: 1,
      descTitle: '学科融合',
      descBody: '多学科融合，全方位提升学生成绩'
    }, {
      id: 2,
      descTitle: '自动批改',
      descBody: 'AI自动批改，提升老师批改效率'
    }],
    isDotsShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  currentChange(e) {
    this.setData({
      isDotsShow: e.detail.current === 3 ? false : true
    })
  },
  selectId(e) {
    wx.setStorage({
      data: {
        identity: e.currentTarget.dataset.id,
        isHeadTeacher: e.currentTarget.dataset.id == "teacher" ? true : false
      },
      key: 'currentUser',
      success: () => {
        wx.switchTab({
          url: '/pages/homePage/homePage',
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