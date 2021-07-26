// pages/users/users.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInviteDialog: false,
    isShowAdd: false,
    isTourist: true,
  },
  navToHelp() {
    wx.navigateTo({
      url: '/pages/help/help',
    })
  },
  toJoinClass() {
    wx.navigateTo({
      url: '../joinClass/joinClass',
    })
  },
  addToDesk() {
    this.setData({
      isShowAdd: true
    })
    this.getTabBar().setData({
      tabBarShow: false
    })
  },
  closeAdd() {
    this.setData({
      isShowAdd: false
    })
    this.getTabBar().setData({
      tabBarShow: true
    })
  },
  invite() {
    this.setData({
      showInviteDialog: true
    })
    this.getTabBar().setData({
      tabBarShow: false
    })
  },
  changeId() {
    this.currentUser = this.data.currentUser
    this.currentUser.identity = this.data.isTeacher ? 'student' : 'teacher'
    this.currentUser.rname = this.data.isTeacher ? '游客学生' : '游客老师'
    this.setData({
      isTeacher: !this.data.isTeacher,
      currentUser: this.currentUser
    })
    wx.setStorageSync('currentUser', this.currentUser)
    wx.reLaunch({
      url: './users',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let currentUser = wx.getStorageSync('currentUser')
    this.setData({
      currentUser,
      isTeacher: currentUser.identity == 'teacher' ? true : false
    })
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        list: this.data.currentUser.identity == 'student' ? [{
          pagePath: "/pages/homePage/homePage",
          text: "首页",
          iconPath: "/static/icon/home.svg",
          selectedIconPath: "/static/icon/actHome.svg"
        }, {
          pagePath: "/pages/users/users",
          text: "个人中心",
          iconPath: "/static/icon/user.svg",
          selectedIconPath: "/static/icon/actUser.svg"
        }] : [{
          pagePath: "/pages/homePage/homePage",
          text: "首页",
          iconPath: "/static/icon/home.svg",
          selectedIconPath: "/static/icon/actHome.svg"
        }, {
          pagePath: "/pages/classStatus/classStatus",
          text: "学情",
          iconPath: "/static/icon/classStatus.svg",
          selectedIconPath: "/static/icon/actClassStatus.svg"
        }, {
          pagePath: "/pages/users/users",
          text: "个人中心",
          iconPath: "/static/icon/user.svg",
          selectedIconPath: "/static/icon/actUser.svg"
        }]
      })
    }
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
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