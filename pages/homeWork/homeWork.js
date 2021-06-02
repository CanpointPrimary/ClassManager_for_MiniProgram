Page({
    data: {
        date: '',
        show: false,
        startTime: 0,
        endTime: 0,
        index: 0,
        current: 0,
        array: [{
                id: 0,
                subject: "语文"
            },
            {
                id: 1,
                subject: "数学"
            },
            {
                id: 2,
                subject: "英语"
            },
            {
                id: 3,
                subject: "美术"
            },
        ],
        workList: [{
            date: "今天",
            lists: [{
                workTitle: "2021.4.13（周二）读拼音",
                publisher: '巫梅梅',
                avatar: '/static/avatar.png',
                pubTime: '2021.3.12 17:03',
                general: '练习所有单韵母的发音以及其声调。',
                allStu: 50,
                doneStu: 20
            }]
        }, {
            date: "昨天",
            lists: [{
                workTitle: "2021.4.13（周二）读拼音",
                publisher: '巫梅梅',
                avatar: '/static/avatar.png',
                pubTime: '2021.3.12 17:03',
                general: '练习所有单韵母的发音以及其声调。',
                allStu: 50,
                doneStu: 45
            }, {
                workTitle: "2021.4.13（周二）读拼音",
                publisher: '巫梅梅',
                avatar: '/static/avatar.png',
                pubTime: '2021.3.12 17:03',
                general: '练习所有单韵母的发音以及其声调。',
                allStu: 50,
                doneStu: 35
            }]
        }, {
            date: "2021.4.12",
            lists: [{
                workTitle: "2021.4.13（周二）读拼音",
                publisher: '巫梅梅',
                avatar: '/static/avatar.png',
                pubTime: '2021.4.12 17:03',
                general: '练习所有单韵母的发音以及其声调。',
                allStu: 50,
                doneStu: 12
            }, {
                workTitle: "2021.4.13（周二）读拼音",
                publisher: '巫梅梅',
                avatar: '/static/avatar.png',
                pubTime: '2021.4.12 17:03',
                general: '练习所有单韵母的发音以及其声调。',
                allStu: 50,
                doneStu: 50
            }]
        }]
    },
    bindPickerChange: function (e) {
        wx.hideKeyboard()
        this.setData({
            index: e.detail.value
        })
    },
    navTo() {
        wx.navigateTo({
            url: '/pages/workPublish/workPublish',
        })
    },
    changetab(e) {
        let data = e.target.dataset

        if (!this.data.current == data.index) {
            this.animate('.underline', [{
                width: this.data.current ? '130rpx' : '68rpx',
                left: this.data.current ? '182rpx' : '38rpx',
            }, {
                width: this.data.current ? '68rpx' : '130rpx',
                left: this.data.current ? '38rpx' : '182rpx',
                ease: 'ease-out'
            }], 200)
        }
        this.setData({
            current: data.index
        })
    },
    onDisplay() {
        this.setData({
            show: true,
            startTime: new Date(
                new Date().getFullYear(),
                new Date().getMonth(),
                new Date().getDate() - 1
            ).getTime(),
            endTime: Date.now()
        });
    },
    onClose() {
        this.setData({
            show: false
        });
    },
    formatDate(date) {
        date = new Date(date);
        return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(event) {
        const [start, end] = event.detail;
        this.setData({
            show: false,
            date: `${this.formatDate(start)} - ${this.formatDate(end)}`,
        });
        console.log(event.detail);
    },
});