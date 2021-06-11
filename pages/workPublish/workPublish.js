// pages/workPublish/workPublish.js
let voice = wx.createInnerAudioContext()
let record = wx.getRecorderManager()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        recipient: "1年级2班",
        title: "2021.3.11（周三）英语作业",
        workPack: [{}, {}],
        array: [1, 2, 3, 4, 5, 6],
        showTimePicker: true,
        showVoice: false,
        timeSelect: [],
        timeList: [],
        imageList: [],
        voiceLength: 0,
        voices: [],
        showWave: true
    },
    closeVoice() {
        this.setData({
            showVoice: false,
            showWave: true
        })
    },
    startRecord() {
        if (this.data.showWave) {
            record.start()
        } else {
            record.stop()
        }
        record.onStop((res) => {
            this.setData({
                voices: [res.tempFilePath],
                voiceLength: Math.floor(res.duration / 1000)
            })
            voice.src = res.tempFilePath
        })
        this.setData({
            showWave: !this.data.showWave
        })

        setInterval(() => {
            this.animate('.waveItem3', [{
                height: '50rpx'
            }, {
                height: '80rpx'
            }, {
                height: '20rpx'
            }, {
                height: '80rpx'
            }, {
                height: '50rpx'
            }], 1000)
            this.animate('.waveItem2', [{
                height: '50rpx'
            }, {
                height: '20rpx'
            }, {
                height: '50rpx'
            }], 500)
            this.animate('.waveItem1', [{
                height: '20rpx'
            }, {
                height: '50rpx'
            }, {
                height: '20rpx'
            }], 500)
        }, 500)
    },
    showVoice() {
        this.setData({
            showVoice: true
        })
    },
    titleChange(e) {
        this.setData({
            title: e.detail.value
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let dateList = []
        const day = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
        const date = new Date()
        let today = date.getDate()
        let month
        let theMonth = date.getMonth()
        let tDate
        let dateStr
        let hour
        let minutes
        let timeList = []
        for (let i = 0; i < 30; i++) {
            date.setMonth(theMonth)
            date.setDate(today + i)
            if (date.getMonth() + 1 < 10) {
                month = '0' + (date.getMonth() + 1)
            }
            if (date.getDate() < 10) {
                tDate = '0' + date.getDate()
            } else {
                tDate = date.getDate()
            }
            dateStr = `${month}/${tDate} ${day[date.getDay()]}`
            dateList.push(dateStr)
        }
        for (let i = 0; i < 24; i++) {
            hour = i < 10 ? `0${i}` : `${i}`;
            for (let j = 0; j < 2; j++) {
                minutes = j ? '30' : '00';
                timeList.push(`${hour}:${minutes}`)
            }
        }

        this.setData({
            timeList: [
                ['默认', ...dateList], timeList
            ],
            timeSelect: [0, date.getHours() * 2 + 2]
        })
    },
    playVoice() {
        voice.volume = 1
        if (voice.paused) {
            voice.play()
            voice.onTimeUpdate(() => {
                this.setData({
                    voiceLength: Math.floor(voice.currentTime)
                })
            })
        } else {
            voice.stop()
            voice.offTimeUpdate()
            this.setData({
                voiceLength: Math.floor(voice.duration)
            })
        }
    },
    chooseImage() {
        if (3 - this.data.imageList.length <= 0) {
            return wx.showToast({
                title: '最多添加三张图片',
                icon: "none"
            })
        }
        wx.chooseImage({
            count: 3 - this.data.imageList.length,
            sourceType: ['album',
                'camera'
            ],
            success: (res) => {
                this.setData({
                    imageList: [...this.data.imageList, ...res.tempFilePaths]
                })
            }
        })
    },
    timeChange(e) {
        console.log(e.detail.value);
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