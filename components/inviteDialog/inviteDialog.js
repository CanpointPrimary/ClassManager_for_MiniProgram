// components/inviteDialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log('xuanran');

    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    closeDialog() {
      this.animate(".container", [{
        height: "600rpx",
        ease: 'ease-in'
      }, {
        height: '0rpx',
        ease: 'ease-out'
      }], 100, () => {})
      this.animate(".mask", [{
        opacity: 0.6
      }, {
        opacity: 0
      }], 100, () => {
        this.setData({
          isShow: false
        })
      })

    },
  },
  observers: {
    isShow: function (isShow) {
      if (isShow) {
        this.animate(".mask", [{
          opacity: 0
        }, {
          opacity: 0.6
        }], 100, () => {})
        this.animate(".container", [{
          height: 0,
          ease: 'ease-in'
        }, {
          height: '600rpx',
          ease: 'ease-out'
        }], 100, () => {})
      }

    }
  }
})