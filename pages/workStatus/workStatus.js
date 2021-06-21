// pages/workStatus/workStatus.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isScore: true,
        isAscend: true
    },

    changeTab(e) {
        let data = e.currentTarget.dataset
        if (data.index == this.data.isScore) {
            this.animate(".actBg", [{
                left: this.data.isScore ? '0rpx' : '266rpx'
            }, {
                left: this.data.isScore ? '266rpx' : '0rpx'
            }], 200)
            this.setData({
                isScore: data.index == 0 ? true : false,
                isAscend: true
            })
        } else {
            this.setData({
                isAscend: !this.data.isAscend
            })
        }
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