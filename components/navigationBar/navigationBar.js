// components/navigationBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: 0,
    top: 0,
    bottom: 0,
    realName: '李老师'
  },
  attached() {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          statusBarHeight: res.statusBarHeight,
          top: wx.getMenuButtonBoundingClientRect().top,
          bottom: wx.getMenuButtonBoundingClientRect().bottom
        })
      },
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})