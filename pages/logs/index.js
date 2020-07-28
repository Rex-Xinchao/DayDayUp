// pages/logs/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    logList: [],
    typeMap: {
      daily: '每日',
      weekly: '每周',
      monthly: '每月',
      others: '额外',
      ache: '成就',
      wish: '愿望'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let openid = wx.getStorageSync("openid")
    wx.request({
      url: 'http://localhost:3000/log/list',
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
            logList: res.data.data
          })
        }
      }
    })
  },
})