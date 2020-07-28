Page({
  data: {
    daily: [],
    weekly: [],
    monthly: [],
    others: [],
    isShow: false
  },
  onLoad: function(options) {
    const authSetting = wx.getStorageSync("authSetting")
    this.initData()
    authSetting['scope.userInfo'] || this.dialogShow()
  },
  initData: function() {
    const openid = wx.getStorageSync("openid")
    wx.request({
      url: 'http://localhost:3000/task/list',
      data: {
        openid: openid
      },
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //post
      },
      success: (res) => {
        if (res.data.code == 200) {
          let obj = {
            daily: {},
            weekly: {},
            monthly: {},
            others: {}
          }
          res.data.data.forEach(item => {
            obj[item.refresh][item.type] || (obj[item.refresh][item.type] = [])
            obj[item.refresh][item.type].push(item)
          })
          this.setData({
            daily: obj.daily,
            weekly: obj.weekly,
            monthly: obj.monthly,
            others: obj.others
          })
        }
      }
    })
  },
  dialogShow: function() {
    this.setData({
      isShow: true
    })
  },
  dialogClose: function() {
    this.setData({
      isShow: false
    })
  }
})