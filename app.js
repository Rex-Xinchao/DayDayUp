//app.js
App({
  globalData: {
    userInfo: {}
  },
  onLaunch: function() {
    wx.login({
      success: res => this.getUserId(res.code)
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
  getUserId: (code) => {
    wx.request({
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      data: {
        appid: 'wx9d2b9aad36bb0047',
        secret: '6cce3131885af699672361cb2130c09b',
        js_code: code,
        grant_type: 'authorization_code'
      },
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //post
      },
      success: (res) => {
        wx.setStorageSync("openid", res.data.openid)
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
  }
})