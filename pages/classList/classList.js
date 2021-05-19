// pages/classList/classList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0,
        classList: [{
            className: "1年级2班",
            rName: "巫老师",
            role: "teacher",
            isHeadteacher: false
        }, {
            className: "1年级2班",
            rName: "巫老师",
            role: "teacher",
            isHeadteacher: false
        }, {
            className: "1年级2班",
            rName: "巫老师",
            role: "teacher",
            isHeadteacher: false
        }, {
            className: "1年级2班",
            rName: "巫老师",
            role: "teacher",
            isHeadteacher: false
        }, ],
        classPre: [{
            className: "1年级2班",
        }]
    },
    changetab(e) {
        let data = e.target.dataset
        if (this.data.current !== data.index) {
            this.animate('.underline', [{
                    scaleX: 1,
                    opacity: 1
                },
                {
                    scaleX: 1.15,
                    opacity: .7
                },
                {
                    scaleX: 1,
                    opacity: 1
                },
            ], 200)
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