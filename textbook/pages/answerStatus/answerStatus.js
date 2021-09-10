// textbook/pages/answerStatus/answerStatus.js
const {
    studentAnswer,
    currentAnswer
} = require('../../../utils/mockData')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        collStatus: 'up',
        index: 0,
        imageList: [{
                url: 'https://img.yzcdn.cn/vant/leaf.jpg',
                name: '图片1',
            },
            {
                url: 'https://img.yzcdn.cn/vant/leaf.jpg',
                name: '图片2',
            }, {
                url: 'https://img.yzcdn.cn/vant/leaf.jpg',
                name: '图片4',
            }, {
                url: 'https://img.yzcdn.cn/vant/leaf.jpg',
                name: '图片6',
            }
        ],
        score: ["已阅", "A", "B", "C", "D", 'E'],
        addCommentShow: false,
        batchReviewsShow: false,
        batchSendBackShow: false
    },
    toCheck() {
        console.log(1);
        wx.navigateTo({
            url: '../checkWork/checkWork',
        })
    },
    closeSendBack() {
        this.setData({
            batchSendBackShow: false
        })
    },
    openSendBack() {
        this.setData({
            batchSendBackShow: true
        })
    },
    closeReview() {
        this.setData({
            batchReviewsShow: false
        })
    },
    openReview() {
        this.setData({
            batchReviewsShow: true
        })
    },
    openComment() {
        this.setData({
            addCommentShow: true
        })
    },
    closeComment() {
        this.setData({
            addCommentShow: false
        })
    },
    foldInner() {
        this.setData({
            collStatus: this.data.collStatus == 'down' ? 'up' : "down"
        })
    },
    changeTab(e) {
        this.setData({
            index: e.currentTarget.dataset.index
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            studentAnswer,
            currentAnswer
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