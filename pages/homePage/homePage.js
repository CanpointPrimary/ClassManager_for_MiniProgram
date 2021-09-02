// pages/homePage/homePage.js
const {
  toDoList
} = require('../../utils/mockData')
const {
  request
} = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    realName: '李老师',
    menuList: [],
    isTourist: true,
    left: '15%',
    isToDo: true,
    hasClass: true,
    showInviteDialog: false,
    isTeacher: true,
    showAdd: false
  },
  showAdd() {
    this.setData({
      showAdd: !this.data.showAdd
    })
    this.getTabBar().setData({
      tabBarShow: !this.data.showAdd
    })
  },
  closeAdd() {
    this.setData({
      showAdd: !this.data.showAdd
    })
    this.getTabBar().setData({
      tabBarShow: !this.data.showAdd
    })
  },
  navTo(e) {
    let url = e.currentTarget.dataset.target
    wx.navigateTo({
      url: url,
    })
  },
  changeId() {
    this.currentUser = this.data.currentUser
    this.currentUser.identity = this.data.isTeacher ? 'student' : 'teacher'
    this.currentUser.rname = this.data.isTeacher ? '游客学生' : '游客老师'
    this.setData({
      currentUser: this.currentUser
    })
    wx.setStorageSync('currentUser', this.currentUser)
    wx.reLaunch({
      url: './homePage',
    })
  },
  copyCode() {
    wx.setClipboardData({
      data: this.data.classInfo.code,
      success: (res) => {
        wx.showToast({
          title: '已复制班级码到剪贴板',
          icon: 'none',
          duration: 2000
        })
      }
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
  changeTab(e) {
    if (this.data.isToDo !== e.target.dataset.istodo) {
      this.animate('.underline', [{
          scaleX: 1,
          opacity: 1
        },
        {
          scaleX: 1.15,
          opacity: .7
        },
        {
          scaleX: 1,
          opacity: 1
        },
      ], 200)
    }
    this.setData({
      isToDo: e.target.dataset.istodo,
      left: e.target.dataset.istodo ? '15%' : '65%'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let token = wx.getStorageSync('Token')
    let res = await request('/class_manager/pages/homepage_menus', 'get', token)

    let app = getApp()
    let currentUser = wx.getStorageSync('currentUser')
    wx.request({
      url: app.globalData.baseUrl + '/api/menu',
      success: ({
        data
      }) => {
        this.setData({
          menuList: [{
              "id": 0,
              "list": "作业",
              "className": "icon-zuoye",
              "target": "/pages/homeWork/homeWork"
            },
            {
              "id": 1,
              "list": "通知",
              "className": "icon-tongzhi"
            },
            {
              "id": 2,
              "list": "打卡",
              "className": "icon-daka"
            },
            {
              "id": 3,
              "list": "接龙",
              "className": "icon-jielong"
            },
            {
              "id": 4,
              "list": "问卷",
              "className": "icon-ziyuan"
            },
            {
              "id": 5,
              "list": "成绩",
              "className": "icon-chengji"
            },
            {
              "id": 6,
              "list": "请假",
              "className": "icon-qingjia"
            },
            {
              "id": 7,
              "list": "班级空间",
              "className": "icon-banjixinxi"
            }
          ]
        })
      },
      timeout: 500,
      fail: () => {
        this.setData({
          menuList: [{
              "id": 0,
              "list": "作业",
              "className": "icon-zuoye",
              "target": "/pages/homeWork/homeWork"
            },
            {
              "id": 1,
              "list": "通知",
              "className": "icon-tongzhi"
            },
            {
              "id": 2,
              "list": "打卡",
              "className": "icon-daka"
            },
            {
              "id": 3,
              "list": "接龙",
              "className": "icon-jielong"
            },
            {
              "id": 4,
              "list": "问卷",
              "className": "icon-ziyuan"
            },
            {
              "id": 5,
              "list": "成绩",
              "className": "icon-chengji"
            },
            {
              "id": 6,
              "list": "请假",
              "className": "icon-qingjia"
            },
            {
              "id": 7,
              "list": "班级空间",
              "className": "icon-banjixinxi"
            }
          ]
        })
      }
    })
    this.setData({
      toDoList,
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
                wx.hideToast()
                wx.navigateTo({
                  url: '/pages/joinClass/joinClass?invited=1'
                })
              }
            })
          }, 2000)
        }
      },
    })

    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
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