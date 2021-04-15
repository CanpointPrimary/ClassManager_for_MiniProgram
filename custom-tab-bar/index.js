// components/tabBar/index.js
Component({
  data: {
    tabBarShow:true,
    selected: 0,
    color: "#000000",
    selectedColor: "#7fcf01",
    list: [{
      pagePath: "/pages/homePage/homePage",
      text: "首页",
      iconPath: "/static/icon/home.png",
      selectedIconPath: "/static/icon/homeSelect.png"
    }, {
      pagePath: "/pages/users/users",
      text: "个人中心",
      iconPath: "/static/icon/user.png",
      selectedIconPath: "/static/icon/userSelect.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})