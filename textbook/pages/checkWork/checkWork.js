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
            this.canvas = res[0].node
            this.ctx = res[0].node.getContext('2d')
            const width = res[0].width
            const height = res[0].height
            this.ctx.save()
            this.dpr = wx.getSystemInfoSync().pixelRatio
            res[0].node.width = width * this.dpr
            res[0].node.height = height * this.dpr
            this.loadFile('https://img1.baidu.com/it/u=4072960247,1216537019&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1590')
        })

    },
    loadFile(url) {
        this.img = this.canvas.createImage()
        wx.downloadFile({
            url,
            success: (res) => {
                this._src = res.tempFilePath
                this.img.src = res.tempFilePath
            },
            fail: (err) => {
                console.log(err);
            }
        })
        this.img.onload = () => {
            this.initPosition()
        }
    },
    initPosition() {
        if (this.img.width / this.canvas.width > this.img.height / this.canvas.height) {
            this.initX = 0
            this.initY = (this.canvas.height - this.img.height * this.canvas.width / this.img.width) / 2
            this.fitHeight = this.img.width * this.canvas.height / this.img.height
            this.fitWidth = this.canvas.height
            this.positionX = this.initX
            this.positionY = this.initY
        } else {
            this.initX = (this.canvas.width - this.img.width * this.canvas.height / this.img.height) / 2
            this.initY = 0
            this.fitWidth = this.img.width * this.canvas.height / this.img.height
            this.fitHeight = this.canvas.height
            this.positionX = this.initX
            this.positionY = this.initY
        }
        this.renderImage()
    },
    ontouchStart(e) {
        if (e.touches.length == 2) {

            this.touchStartX = (e.touches[0].x + e.touches[1].x) / 2 * this.dpr
            this.touchStartY = (e.touches[0].y + e.touches[1].y) / 2 * this.dpr

            // 让原点变成双指触屏中点
            // 记录初始点和新原点的位置，计算新的定位
            this.positionX = -this.touchStartX + this.initX
            this.positionY = -this.touchStartY + this.initY
        }
    },
    onTouchMove(e) {
        if (e.touches.length == 2) {

            this.touchCenterX = (e.touches[0].x + e.touches[1].x) * this.dpr / 2
            this.touchCenterY = (e.touches[0].y + e.touches[1].y) * this.dpr / 2
            this.ctx.setTransform(1, 0, 0, 1, this.touchCenterX, this.touchCenterY)
            this.ctx.clearRect(-this.touchCenterX, -this.touchCenterY, this.canvas.width, this.canvas.height);
            this.renderImage()
            this.touchEndX = (e.touches[0].x + e.touches[1].x) * this.dpr / 2
            this.touchEndY = (e.touches[0].y + e.touches[1].y) * this.dpr / 2
        }
    },
    onTouchEnd(e) {
        if (e.touches.length == 1) {
            this.initX = this.touchEndX - this.touchStartX + this.initX
            this.initY = this.touchEndY - this.touchStartY + this.initY
        }
    },
    renderImage() {
        this.ctx.drawImage(this.img, this.positionX, this.positionY, this.fitWidth, this.fitHeight)
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