// components/tabBar/index.js
Component({
  data: {
    tabBarShow: true,
    selected: 0,
    color: "#666",
    selectedColor: "#39519b",
    list: [{
      pagePath: "/pages/homePage/homePage",
      text: "首页",
      iconPath: "/static/icon/tab_shouye_nor.svg",
      selectedIconPath: "/static/icon/tab_shouye_sel.svg"
    }, {
      pagePath: "/pages/classStatus/classStatus",
      text: "学情",
      iconPath: "/static/icon/tab_xueqing-nor.svg",
      selectedIconPath: "/static/icon/tab_xueqing_sel.svg"
    }, {
      pagePath: "/pages/users/users",
      text: "个人中心",
      iconPath: "/static/icon/tab_zhongxin_nor.svg",
      selectedIconPath: "/static/icon/tab_zhongxin_sel.svg"
    }]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
    }
  }
})