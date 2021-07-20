// pages/group/editGroup/addMember.js
const {
    groupMembers
} = require('../../../utils/mockData')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        result: [],
        selectAll: false
    },
    onChange(e) {
        this.setData({
            result: e.detail,
            selectAll: e.detail.length < groupMembers.length ? false : true
        });

    },
    getMembersId(arr) {
        this.allMember = []
        for (let i = 0; i < arr.length; i++) {
            this.allMember.push(arr[i].id.toString())
        }
    },
    onSelectAll(e) {
        this.getMembersId(groupMembers)
        this.setData({
            selectAll: e.detail,
            result: e.detail ? this.allMember : []
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.allMember = []
        this.setData({
            groupMembers: groupMembers
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