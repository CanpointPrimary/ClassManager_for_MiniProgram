// textbook/pages/checkWork/checkWork.js
let time = 0
let timer
const {
    Shape,
    Correct,
    Tools,
    WorkSpace
} = require('../../../utils/workCheckTool')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        score: ["已阅", "A", "B", "C", "D", 'E'],
        theTool: 'none',
        currentWork: 0,
        works: [
            'https://img1.baidu.com/it/u=4072960247,1216537019&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1590',
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn17%2F424%2Fw1080h944%2F20180427%2Fef66-fztkpip3391150.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633137528&t=2b66101908cff29e37f26ec9dbc0eb25',
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsnscangm.b0.upaiyun.com%2F2015%2F1008%2F03%2Fhi0u7pcy6xsgr.jpg&refer=http%3A%2F%2Fsnscangm.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633139023&t=f0965e7c996dfa2ce6bf5f796de3dd14'
        ]
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
            this.loadFile(this.data.works[0])
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

    // 初始化定位，使图片居中
    initPosition() {
        if (this.img.width / this.canvas.width > this.img.height / this.canvas.height) {
            this.initX = 0
            this.initY = (this.canvas.height - this.img.height * this.canvas.width / this.img.width) / 2
            this.fitHeight = this.img.height * this.canvas.width / this.img.width
            this.fitWidth = this.canvas.width
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
        this.move = 0
        this.scale = 1
        this._scale = 1
        this.ctx.resetTransform()
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.renderImage()
        const correct = new Correct(300, 200, 100)
        const tools = new Tools()
        tools.add(correct)
        const workSpace = new WorkSpace(this.ctx)
        workSpace.add(tools)
        workSpace.update()
    },
    ontouchStart(e) {
        this.twoFinger = false
        if (e.touches.length == 1) {
            this.touchStartX = e.touches[0].x
            this.touchStartY = e.touches[0].y
            timer = setInterval(function () {
                time++;
            }, 100);
        }
        if (e.touches.length == 2) {
            this.twoFinger = true
            this._scale || (this._scale = 1)
            this.touchStartX = (e.touches[0].x + e.touches[1].x) / 2 * this.dpr
            this.touchStartY = (e.touches[0].y + e.touches[1].y) / 2 * this.dpr

            // 让原点变成双指触屏中点
            // 记录初始点和新原点的位置，计算新的定位
            this.positionX = -this.touchStartX + this.initX
            this.positionY = -this.touchStartY + this.initY

            // 计算双指之间的距离
            this.startDistance = Math.sqrt(Math.pow(e.touches[0].x - e.touches[1].x, 2) + Math.pow(e.touches[0].y - e.touches[1].y, 2))
        }
    },
    onTouchMove(e) {
        if (e.touches.length == 2) {
            // 记录触控中心点
            this.touchCenterX = (e.touches[0].x + e.touches[1].x) * this.dpr / 2
            this.touchCenterY = (e.touches[0].y + e.touches[1].y) * this.dpr / 2

            // 计算当前双指距离
            this.nowDistance = Math.sqrt(Math.pow(e.touches[0].x - e.touches[1].x, 2) + Math.pow(e.touches[0].y - e.touches[1].y, 2))

            // 计算缩放比例
            this.scale = this.nowDistance / this.startDistance

            // 清除画布
            this.ctx.resetTransform()
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // 设置当前坐标为原点
            this.ctx.setTransform(this._scale * this.scale, 0, 0, this._scale * this.scale, this.touchCenterX, this.touchCenterY)

            // 根据当前原点绘制图像
            this.renderImage()
            this.touchEndX = (e.touches[0].x + e.touches[1].x) * this.dpr / 2
            this.touchEndY = (e.touches[0].y + e.touches[1].y) * this.dpr / 2
            this.move = 1
        }
    },
    onTouchEnd(e) {
        if (e.touches.length == 1) {
            this.initX = (this.touchEndX - this.touchStartX) * this.move + this.initX
            this.initY = (this.touchEndY - this.touchStartY) * this.move + this.initY
            this._scale = this._scale * this.scale
            this.scale = 1
            this.move = 0

        }
        if (!this.twoFinger) {
            if (e.changedTouches[0].x - this.touchStartX < -40 && Math.abs(e.changedTouches[0].y - this.touchStartY) < 80 && time <= 10) this.moveLeft()
            if (e.changedTouches[0].x - this.touchStartX > 40 && Math.abs(e.changedTouches[0].y - this.touchStartY) < 80 && time <= 10) this.moveRight()
        }
        this.scale = 1
        clearInterval(timer)
        time = 0

    },

    moveLeft() {
        if (this.data.currentWork < this.data.works.length - 1) {
            this.setData({
                currentWork: this.data.currentWork + 1
            }, () => {
                this.loadFile(this.data.works[this.data.currentWork])
            })
        } else {
            this.setData({
                currentWork: 0
            }, () => {
                this.loadFile(this.data.works[this.data.currentWork])
            })
        }


    },
    moveRight() {
        if (this.data.currentWork > 0) {
            this.setData({
                currentWork: this.data.currentWork - 1,
                success: () => {
                    this.loadFile(this.data.works[this.data.currentWork])
                }
            }, () => {
                this.loadFile(this.data.works[this.data.currentWork])
            })
        } else {
            this.setData({
                currentWork: this.data.works.length - 1
            }, () => {
                this.loadFile(this.data.works[this.data.currentWork])
            })
        }
    },
    renderImage() {
        this.ctx.drawImage(this.img, this.positionX, this.positionY, this.fitWidth, this.fitHeight)
    },
    chooseTool(e) {
        if (e.currentTarget.dataset.tool != this.data.theTool) {
            this.setData({
                theTool: e.currentTarget.dataset.tool
            })
        }
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