//app.js
App({
  globalData: {
    userInfo: {},
    host: 'https://www.rexsun.site/api'
  },
  onLaunch: function() {
    wx.login({
      success: res => {
        this.getUserId(res.code)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        // this.getUserAuth()
        wx.setStorageSync("authSetting", res.authSetting)
        this.getUserInfo()
      }
    })
  },
  getUserId: function(code) {
    wx.request({
      url: `${this.globalData.host}/user/getId`,
      data: {
        code: code
      },
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //post
      },
      success: (res) => {
        wx.setStorageSync("openid", res.data.data)
        this.getUser(res.data.data)
      }
    })
  },
  getUserInfo: function() {
    wx.getUserInfo({
      success: res => {
        this.globalData.userInfo = res.userInfo
        wx.setStorageSync("userInfo", res.userInfo)
        this.userInfoReadyCallback && this.userInfoReadyCallback(res)
      }
    })
  },
  getUserAuth: () => {
    wx.authorize({
      scope: 'scope.address',
      success: () => wx.chooseAddress()
    })
  },
  getUser: function (openid) {
    wx.request({
      url: `${this.globalData.host}/user/info`,
      data: {
        openid: openid
      },
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //post
      },
      success: (res) => {
        wx.setStorageSync("point", res.data.point)
      }
    })
  }
})