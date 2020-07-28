import { LOGMAP } from '../../static/lib/index.js';
Page({
  data: {
    logList: [],
    typeMap: LOGMAP
  },
  onLoad: function(options) {
    const openid = wx.getStorageSync("openid")
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