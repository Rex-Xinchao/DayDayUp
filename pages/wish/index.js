// pages/wish/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initData()
  },

  initData: function () {
    let openid = wx.getStorageSync("openid")
    wx.request({
      url: 'http://localhost:3000/wish/list',
      data: {
        openid: openid
      },
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //post
      },
      success: (res) => {
        if (res.data.code == 200) {
          this.setData({
            typeList: res.data.data
          })
        }
      }
    })
  },

  finish: function (e) {
    let openid = wx.getStorageSync("openid")
    wx.request({
      url: 'http://localhost:3000/wish/finish',
      data: {
        id: e.mark.data.id,
        time: Number(e.mark.data.time) + 1,
        openid: openid
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //post
      },
      success: (res) => {
        if (res.data.code == 200) {
          this.initData()
        }
      }
    })
  }
})