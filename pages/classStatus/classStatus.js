// pages/classStatus/classStatus.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0,
        stuList: [{
            name: '李小明',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            name: '李白',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            name: '李自成',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            name: '刘德华',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            name: '孙悟空',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            name: '钱多多',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            name: '梅本事',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            name: '吴用功',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, ],
        teaList: [{
            tName: '李老师',
            subject: '语文',
            isHeadTeacher: true,
            avaSrc: '/static/avatar.png'
        }, {
            tName: '刘老师',
            subject: '英语',
            isHeadTeacher: false,
            avaSrc: '/static/avatar.png'
        }, {
            tName: '孙老师',
            subject: '数学',
            isHeadTeacher: false,
            avaSrc: '/static/avatar.png'
        }, {
            tName: '赵老师',
            subject: '美术',
            isHeadTeacher: false,
            avaSrc: '/static/avatar.png'
        }, ]
    },
    changetab(e) {
        let data = e.target.dataset

        if (!this.data.current == data.index) {
            this.animate('.underline', [{
                width: '66rpx'
            }, {
                width: '242rpx',
                left: '52rpx',
                ease: 'ease-out'
            }, {
                width: '66rpx',
                left: this.data.current ? '52rpx' : '224rpx',
                ease: 'ease-out'
            }], 200)
        }
        this.setData({
            current: data.index
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
        const tab = this.getTabBar().createSelectorQuery()
        const page = wx.createSelectorQuery()
        page.select('.stuScroll').boundingClientRect((res) => {
            this.setData({
                scrollTop: res.top
            })
        }).exec()
        tab.select('.tab-bar').boundingClientRect((res) => {
            this.setData({
                tabTop: res.top
            })
        }).exec()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 1
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