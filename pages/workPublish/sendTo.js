// pages/workPublish/sendTo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        result: [],
        rangeShow: false
    },

    // 确认发作业对象
    confirm() {
        wx.navigateBack()
    },
    select(e) {
        let {
            index
        } = e.target.dataset
        const checkbox = this.selectComponent(`.checkbox_${index}`)
        if (index >= 0) checkbox.toggle()
    },
    showChooseRange() {
        this.setData({
            rangeShow: true
        })
    },
    chooseRange(e) {
        this.setData({
            selectGroups: e.detail
        });
    },
    closePup() {
        this.setData({
            rangeShow: false
        })
    },
    addGroup() {
        wx.navigateTo({
            url: '../group/addGroup/addGroup',
        })
    },
    handleChoose(e) {
        let {
            index
        } = e.target.dataset
        const checkbox = this.selectComponent(`.checkbox_group_${index}`)
        if (index >= 0) checkbox.toggle()

    },
    // 监听选择框变化
    onChange(e) {
        this.setData({
            result: e.detail
        });
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