//app.js
App({
  onLaunch: function() {
    wx.login({
      success: res => {
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: 'wx9d2b9aad36bb0047',
            secret: '6cce3131885af699672361cb2130c09b',
            js_code: res.code,
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
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        wx.setStorageSync("authSetting", res.authSetting)
        // 预获取权限
        // wx.authorize({
        //   scope: 'scope.address',
        //   success() {
        //     wx.chooseAddress({
        //       success: res=> {
        //         console.log(res)
        //       }
        //     });
        //   }
        // })
        wx.getUserInfo({
          success: res => {
            this.globalData.userInfo = res.userInfo
            if (this.userInfoReadyCallback) {
              this.userInfoReadyCallback(res)
            }
          }
        })
      }
    })
  },
  globalData: {
    userInfo: {}
  }
})