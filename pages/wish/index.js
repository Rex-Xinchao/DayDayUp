Page({
  data: {
    typeList: []
  },
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
    const wishid = e.mark.data.id
    const time = Number(e.mark.data.time) + 1
    const openid = wx.getStorageSync("openid")
    wx.request({
      url: 'http://localhost:3000/wish/finish',
      data: {
        id: wishid,
        time: time,
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