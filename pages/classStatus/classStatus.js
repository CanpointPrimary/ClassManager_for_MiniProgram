// pages/classStatus/classStatus.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0,
        checkList: {
            preCheck: [{
                id: 1,
                rName: '张三丰',
                rTime: '2021.03.21 18:05'
            }],
            hadCheck: [{
                rName: '张三丰',
                rTime: '2021.03.21 18:05',
                cName: '花无缺',
                pass: true
            }, {
                rName: '张四丰',
                rTime: '2021.03.21 18:05',
                cName: '花无缺',
                pass: false
            }, {
                rName: '张五丰',
                rTime: '2021.03.21 18:05',
                cName: '花无缺',
                pass: true
            }]
        },
        stuList: [{
            rName: '李小明',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            rName: '李白',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            rName: '李自成',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            rName: '刘德华',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            rName: '孙悟空',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            rName: '钱多多',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            rName: '梅本事',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, {
            rName: '吴用功',
            relation: '本人',
            avaSrc: '/static/avatar.png'
        }, ],
        teaList: [{
            rName: '李老师',
            subject: '语文',
            isHeadTeacher: true,
            avaSrc: '/static/avatar.png'
        }, {
            rName: '刘老师',
            subject: '英语',
            isHeadTeacher: false,
            avaSrc: '/static/avatar.png'
        }, {
            rName: '孙老师',
            subject: '数学',
            isHeadTeacher: false,
            avaSrc: '/static/avatar.png'
        }, {
            rName: '赵老师',
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
    openGroup() {
        wx.navigateTo({
            url: '../group/groups',
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