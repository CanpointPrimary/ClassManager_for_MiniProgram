// pages/subStatus/subStatus.js
let {
    subStatusList
} = require('../../../utils/mockData')
let {
    answersCount
} = require('../../../utils/mockData')
import uCharts from '../../utils/u-charts';
let canvasRing
let canvasBar
Page({

    /**
     * 页面的初始数据
     */
    data: {
        index: 0
    },
    changeTab(e) {
        let data = e.currentTarget.dataset
        if (this.data.index != data.index) {
            this.animate(".actBg", [{
                left: data.index ? '0rpx' : '266rpx'
            }, {
                left: data.index ? '266rpx' : '0rpx'
            }], 200)
        }
        this.setData({
            index: data.index
        })
        if (!data.index) {
            this.setRingData()
        } else {
            this.showBar()
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            subStatusList,
            answersCount
        })
        this.setRingData()
    },
    tapBar(e) {
        canvasBar.showToolTip(e, {
            formatter: function (item) {
                return item.data
            }
        })
    },
    showBar() {
        let Bar = {
            categories: [
                "A",
                "B",
                "C",
                "D",
                "E",
            ],
            series: [{
                "name": "目标值",
                "data": [
                    35,
                    15,
                    31,
                    13,
                    34
                ]
            }]
        }
        wx.createSelectorQuery().select("#canvas_bar").fields({
            node: true,
            size: true,
        }).exec((res) => {
            const ctx = res[0].node.getContext('2d')
            const width = res[0].width
            const height = res[0].height
            const dpr = wx.getSystemInfoSync().pixelRatio
            res[0].node.width = width * dpr
            res[0].node.height = height * dpr
            canvasBar = new uCharts({
                context: ctx,
                series: Bar.series,
                categories: Bar.categories,
                width: width * dpr,
                height: height * dpr,
                pixelRatio: dpr,
                "type": "column",
                "canvasId": "",
                "canvas2d": false,
                "background": "none",
                "animation": true,
                "timing": "easeOut",
                "duration": 1000,
                "color": [
                    "#9891E2",
                ],
                "padding": [
                    15,
                    30,
                    0,
                    10
                ],
                "rotate": false,
                "errorReload": true,
                "fontSize": 8,
                "fontColor": "#000",
                "enableScroll": false,
                "touchMoveLimit": 60,
                "enableMarkLine": false,
                "dataLabel": false,
                "dataPointShape": true,
                "dataPointShapeType": "solid",
                "tapLegend": true,
                "xAxis": {
                    "disabled": false,
                    "axisLine": true,
                    "axisLineColor": "#CCCCCC",
                    "calibration": false,
                    "fontColor": "#666666",
                    "fontSize": 9,
                    "rotateLabel": false,
                    "itemCount": 5,
                    "boundaryGap": "center",
                    "disableGrid": true,
                    "gridColor": "#CCCCCC",
                    "gridType": "solid",
                    "dashLength": 4,
                    "gridEval": 1,
                    "scrollShow": false,
                    "scrollAlign": "left",
                    "scrollColor": "#A6A6A6",
                    "scrollBackgroundColor": "#EFEBEF",
                    "format": ""
                },
                "yAxis": {
                    "disabled": false,
                    "disableGrid": true,
                    "splitNumber": 5,
                    "gridType": "solid",
                    "dashLength": 8,
                    "gridColor": "#CCCCCC",
                    "padding": 10,
                    "showTitle": false,
                    "data": [{
                        "type": "value",
                        "position": "left",
                        "disabled": false,
                        "axisLine": true,
                        "axisLineColor": "#CCCCCC",
                        "calibration": true,
                        "fontColor": "#666666",
                        "fontSize": 9,
                        "textAlign": "right",
                        "tofix": null,
                        "unit": "",
                        "format": ""
                    }]
                },
                "legend": {
                    "show": false,
                },
                "extra": {
                    "column": {
                        "type": "group",
                        "width": 36,
                        "seriesGap": 2,
                        "categoryGap": 3,
                        "barBorderCircle": false,
                        "linearType": "none",
                        "linearOpacity": 1,
                        "colorStop": 0,
                        "meterBorder": 1,
                        "meterFillColor": "#FFFFFF",
                        "activeBgColor": "#000000",
                        "activeBgOpacity": 0.08,
                        "meterBorde": 1
                    },
                    "tooltip": {
                        "showBox": true,
                        "showArrow": true,
                        "showCategory": false,
                        "borderWidth": 0,
                        "borderRadius": 0,
                        "borderColor": "#000000",
                        "borderOpacity": 0.7,
                        "bgColor": "#000000",
                        "bgOpacity": 0.7,
                        "gridType": "solid",
                        "dashLength": 4,
                        "gridColor": "#CCCCCC",
                        "fontColor": "#FFFFFF",
                        "splitLine": true,
                        "horizentalLine": false,
                        "xAxisLabel": false,
                        "yAxisLabel": false,
                        "labelBgColor": "#FFFFFF",
                        "labelBgOpacity": 0.7,
                        "labelFontColor": "#666666"
                    },
                    "markLine": {
                        "type": "solid",
                        "dashLength": 4,
                        "data": []
                    }
                }
            })
        })
    },
    setRingData() {
        let Pie = {
            "series": [{
                "data": [{
                        "name": "未提交",
                        "value": subStatusList.hadSubmit.length
                    }, {
                        "name": "已完成",
                        "value": subStatusList.notViewed.length
                    },
                    {
                        "name": "未重做",
                        "value": subStatusList.notSubmit.length
                    },
                ]
            }],
        }
        this.showPie("#canvas_ring", Pie)
    },
    showPie(canvasId, chartData) {
        wx.createSelectorQuery().select(canvasId).fields({
            node: true,
            size: true,
        }).exec((res) => {
            // 初始化全屏 canvas
            const ctx = res[0].node.getContext('2d')
            const width = res[0].width
            const height = res[0].height
            const dpr = wx.getSystemInfoSync().pixelRatio
            res[0].node.width = width * dpr
            res[0].node.height = height * dpr
            canvasRing = new uCharts({
                context: ctx,
                series: chartData.series,
                width: width * dpr,
                height: height * dpr,
                pixelRatio: dpr,
                "type": "ring",
                "canvasId": "canvas_ring",
                "canvas2d": true,
                "background": "none",
                "animation": true,
                "timing": "easeOut",
                "duration": 1000,
                "color": [
                    "#E2F2FF",
                    "#9891E2",
                    "#FBE5BB"
                ],
                "padding": [
                    5,
                    5,
                    5,
                    5
                ],
                "rotate": false,
                "errorReload": true,
                "fontSize": 13,
                "fontColor": "#666666",
                "enableScroll": false,
                "touchMoveLimit": 60,
                "enableMarkLine": false,
                "dataLabel": true,
                "dataPointShape": true,
                "dataPointShapeType": "solid",
                "tapLegend": true,
                "legend": {
                    "show": true,
                    "position": "right",
                    "float": "center",
                    "padding": 5,
                    "margin": 5,
                    "backgroundColor": "rgba(0,0,0,0)",
                    "borderColor": "rgba(0,0,0,0)",
                    "borderWidth": 0,
                    "fontSize": 13,
                    "fontColor": "#666666",
                    "lineHeight": 25,
                    "hiddenColor": "#CECECE",
                    "itemGap": 10
                },
                "title": {
                    "name": "提交情况",
                    "fontSize": 15,
                    "color": "#666666",
                    "offsetX": 0,
                    "offsetY": 0
                },
                "extra": {
                    "ring": {
                        "ringWidth": 20,
                        "centerColor": "#FFFFFF",
                        "activeOpacity": 0.5,
                        "activeRadius": 10,
                        "offsetAngle": 0,
                        "customRadius": 0,
                        "labelWidth": 15,
                        "border": true,
                        "borderWidth": 0,
                        "borderColor": "#FFFFFF",
                        "linearType": "none"
                    },
                    "tooltip": {
                        "showBox": true,
                        "showArrow": true,
                        "showCategory": false,
                        "borderWidth": 0,
                        "borderRadius": 0,
                        "borderColor": "#000000",
                        "borderOpacity": 0.7,
                        "bgColor": "#000000",
                        "bgOpacity": 0.7,
                        "gridType": "solid",
                        "dashLength": 4,
                        "gridColor": "#CCCCCC",
                        "fontColor": "#FFFFFF",
                        "splitLine": true,
                        "horizentalLine": false,
                        "xAxisLabel": false,
                        "yAxisLabel": false,
                        "labelBgColor": "#FFFFFF",
                        "labelBgOpacity": 0.7,
                        "labelFontColor": "#666666"
                    }
                }
            })
        })
    },
    showTip(e) {
        canvasRing.showToolTip(e, {
            formatter: function (item) {
                return item.name + ':' + item.data + '人'
            }
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