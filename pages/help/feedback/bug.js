// pages/help/feedback/bug.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        index: -1,
        length: 0,
        imageList: [],
        typeList: [{
            id: 0,
            type: '文字排版错位'
        }, {
            id: 1,
            type: '图片缺失/显示错误'
        }, {
            id: 2,
            type: '按钮无响应'
        }, {
            id: 3,
            type: '小程序卡顿'
        }, {
            id: 4,
            type: '信息错误'
        }, ]
    },
    bindPickerChange(e) {
        wx.hideKeyboard()
        this.setData({
            index: e.detail.value
        })
    },
    valueCount(e) {
        this.setData({
            length: e.detail.value.length
        })
    },
    chooseImage() {
        if (5 - this.data.imageList.length <= 0) {
            return wx.showToast({
                title: '可选图片已满，可点击对应图片进行删除',
                icon: "none"
            })
        }
        wx.chooseImage({
            count: 5 - this.data.imageList.length,
            sourceType: ['album'],
            success: (res) => {
                this.setData({
                    imageList: [...this.data.imageList, ...res.tempFilePaths]
                })
            }
        })
    },
    removeImage(e) {
        let newList = this.data.imageList.slice()
        newList.splice(e.target.dataset.index, 1)
        this.setData({
            imageList: newList
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