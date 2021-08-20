// textbook/pages/doWork/doWork.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imageList: [{
                url: 'https://img.yzcdn.cn/vant/leaf.jpg',
                name: '图片1',
            },
            {
                url: 'https://img.yzcdn.cn/vant/leaf.jpg',
                name: '图片2',
            }, {
                url: 'https://img.yzcdn.cn/vant/leaf.jpg',
                name: '图片2',
            }, {
                url: 'https://img.yzcdn.cn/vant/leaf.jpg',
                name: '图片2',
            }
        ],
        sublist: 1
    },
    addPicture(e) {
        wx.chooseImage({
            success: (res) => {
                let imageList = this.data.imageList.slice()
                let addList = res.tempFilePaths.map((item) => {
                    return {
                        url: item
                    }
                })
                this.setData({
                    imageList: [...imageList, ...addList]
                })
            }
        })
    },
    deletePic(e) {
        this.data.imageList.splice(e.detail.index, 1)
        this.setData({
            imageList: this.data.imageList
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