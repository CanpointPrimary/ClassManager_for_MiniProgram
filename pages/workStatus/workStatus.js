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
        let answers = [{
            id: 1,
            rname: '李梅',
            avatar: '/static/avatar.png',
            subTime: '2021.3.12 17:03',
            works: [{
                type: '跟读',
                title: 'unit 2单元',
                socre: 'B'
            }, {
                type: '跟读',
                title: 'unit 2单元',
                socre: 'A'
            }],
            useTime: '7分钟',
            tag: '',
            comments: []
        }, {
            id: 2,
            rname: '李梅',
            avatar: '/static/avatar.png',
            subTime: '2021.3.12 17:03',
            works: [{
                type: '跟读',
                title: 'unit 2单元',
                socre: 'B'
            }, {
                type: '跟读',
                title: 'unit 2单元',
                socre: 'A'
            }],
            useTime: '7分钟',
            tag: '进步明显',
            comments: [{
                from: '巫老师',
                val: '希望再接再厉，今天完成得很好！',
                voice: ''
            }, {
                from: '巫老师',
                val: '',
                voice: '/static/river.mp3 '
            }]
        }, {
            id: 3,
            rname: '李梅',
            avatar: '/static/avatar.png',
            subTime: '2021.3.12 17:03',
            works: [{
                type: '跟读',
                title: 'unit 2单元',
                socre: 'B'
            }, {
                type: '跟读',
                title: 'unit 2单元',
                socre: 'A'
            }],
            useTime: '7分钟',
            tag: '进步明显',
            comments: [{
                from: '巫老师',
                val: '',
                voice: '/static/river.mp3 '
            }]
        }, {
            id: 4,
            rname: '李梅',
            avatar: '/static/avatar.png',
            subTime: '2021.3.12 17:03',
            works: [{
                type: '跟读',
                title: 'unit 2单元',
                socre: 'B'
            }, {
                type: '跟读',
                title: 'unit 2单元',
                socre: 'A'
            }],
            useTime: '7分钟',
            tag: '',
            comments: []
        }, {
            id: 5,
            rname: '李梅',
            avatar: '/static/avatar.png',
            subTime: '2021.3.12 17:03',
            works: [{
                type: '跟读',
                title: 'unit 2单元',
                socre: 'B'
            }, {
                type: '跟读',
                title: 'unit 2单元',
                socre: 'A'
            }],
            useTime: '7分钟',
            tag: '进步明显',
            comments: []
        }, {
            id: 6,
            rname: '李梅',
            avatar: '/static/avatar.png',
            subTime: '2021.3.12 17:03',
            works: [{
                type: '跟读',
                title: 'unit 2单元',
                socre: 'B'
            }, {
                type: '跟读',
                title: 'unit 2单元',
                socre: 'A'
            }],
            useTime: '7分钟',
            tag: '进步明显',
            comments: [{
                from: '巫老师',
                val: '希望再接再厉，今天完成得很好！',
                voice: ''
            }, {
                from: '巫老师',
                val: '',
                voice: '/static/river.mp3 '
            }]
        }, {
            id: 7,
            rname: '李梅',
            avatar: '/static/avatar.png',
            subTime: '2021.3.12 17:03',
            works: [{
                type: '跟读',
                title: 'unit 2单元',
                socre: 'B'
            }, {
                type: '跟读',
                title: 'unit 2单元',
                socre: 'A'
            }],
            useTime: '7分钟',
            tag: '进步明显',
            comments: [{
                from: '巫老师',
                val: '希望再接再厉，今天完成得很好！',
                voice: ''
            }]
        }]

        this.setData({
            answerListLeft: answers,
            answerListRight: answers.slice(1)
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
        wx.createIntersectionObserver(this, {
            observeAll: true
        }).relativeTo('.waterfall').observe('.left', (res) => {
            console.log("left:" + res.intersectionRatio);
        })
        wx.createIntersectionObserver(this, {
            observeAll: true
        }).relativeTo('.waterfall').observe('.right', (res) => {
            console.log("right:" + res.intersectionRatio);
        })
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