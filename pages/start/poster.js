// pages/start/poster.js
const {
  joinBg
} = require('../../utils/mockData')
let app = getApp()
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

    console.log('拿到了app');
    wx.request({
      url: app.globalData.baseUrl + '',
      success: ({
        data
      }) => {

        this.setData({
          postSrc: data.src
        })
        console.log('执行了login');
      },
      fail: () => {
        this.setData({
          postSrc: joinBg[2]
        })
      },
      complete: () => {
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
    wx.login({
      success: (res) => {
        // 先保存接口后修改
        wx.setStorage({
          data: res.code,
          key: 'code',
        })
        wx.request({
          url: app.globalData.baseUrl + `/class_manager/access_tokens/${res.code}`,
          success: ({
            data: res
          }) => {

            console.log(res);
            wx.setStorageSync('Token', 'Bearer ' + res.data.access_token)
          }
        })
      },
      fail: (res) => {
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.hideToast()
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