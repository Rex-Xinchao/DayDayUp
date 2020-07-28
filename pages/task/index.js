// pages/task/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    daily: [],
    weekly: [],
    monthly: [],
    others: [],
    dialogShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    let authSetting = wx.getStorageSync("authSetting")
    this.initData()
    if (!authSetting['scope.userInfo']) {
      this.setData({
        dialogShow: true
      })
    }
  },

  initData: function() {
    let openid = wx.getStorageSync("openid")
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

  dialogClose: function() {
    this.setData({
      dialogShow: false
    })
  }
})