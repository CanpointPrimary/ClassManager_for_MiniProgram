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
      iconPath: "/static/icon/home.svg",
      selectedIconPath: "/static/icon/actHome.svg"
    }, {
      pagePath: "/pages/classStatus/classStatus",
      text: "学情",
      iconPath: "/static/icon/classStatus.svg",
      selectedIconPath: "/static/icon/actClassStatus.svg"
    }, {
      pagePath: "/pages/users/users",
      text: "个人中心",
      iconPath: "/static/icon/user.svg",
      selectedIconPath: "/static/icon/actUser.svg"
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