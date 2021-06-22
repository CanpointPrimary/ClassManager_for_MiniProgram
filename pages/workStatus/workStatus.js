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
        this.answers = [{
            id: 0,
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
        }, {
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
            tag: '',
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
        }, {
            id: 8,
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
            id: 9,
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
            comments: [{
                from: '巫老师',
                val: '希望再接再厉，今天完成得很好！',
                voice: ''
            }]
        }, {
            id: 10,
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
        this._LeftIndex = 0
        this._RightIndex = 0
    },
    _updateWaterfall(list) {
        if (list.length) {
            const item = list.shift()
            this._createObserver().then(pos => {
                const updateIndex = this[`_${pos}Index`]
                this.setData({
                    [`answerList${pos}[${updateIndex}]`]: item,
                }, () => {
                    this[`_${pos}Index`] += 1
                    this._updateWaterfall(list)
                })
            })
        }
    },
    _createObserver() {
        return new Promise(resolve => {
            this._observer && this._observer.disconnect()
            this._observer = wx.createIntersectionObserver(this, {
                observeAll: true,
            })
            this._observer
                .relativeTo('.crossLine')
                .observe('.waterView', ({
                    dataset: {
                        next = ""
                    }
                }) => {
                    resolve(next)
                })
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this._updateWaterfall(this.answers)
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