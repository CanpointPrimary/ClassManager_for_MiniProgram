// textbook/pages/checkWork/checkWork.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        score: ["已阅", "A", "B", "C", "D", 'E'],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.createSelectorQuery().select('#work').fields({
            node: true,
            size: true,
        }).exec((res) => {
            const canvas = res[0].node
            this.ctx = res[0].node.getContext('2d')
            const width = res[0].width
            const height = res[0].height
            this.dpr = wx.getSystemInfoSync().pixelRatio
            res[0].node.width = width * this.dpr
            res[0].node.height = height * this.dpr
            let img = canvas.createImage()
            wx.downloadFile({
                url: 'https://img1.baidu.com/it/u=4072960247,1216537019&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1590',
                success: (res) => {
                    this._src = res.tempFilePath
                    img.src = res.tempFilePath
                },
                fail: (err) => {
                    console.log(err);
                }
            })
            img.onload = () => {
                this.initPosition(img, canvas)
            }
        })

    },
    initPosition(img, canvas) {
        let initX
        let initY
        if (img.width / canvas.width > img.height / canvas.height) {
            initX = 0
            initY = (canvas.height - img.height * canvas.width / img.width) / 2
            this.ctx.drawImage(img, initX, initY, canvas.width, img.height * canvas.width / img.width)
        } else {
            initX = (canvas.width - img.width * canvas.height / img.height) / 2
            initY = 0
            this.ctx.drawImage(img, initX, initY, img.width * canvas.height / img.height, canvas.height)

        }
    },
    ontouch(e) {

    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

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