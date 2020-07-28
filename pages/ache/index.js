Page({
  data: {
    type: 'all',
    typeName: '全部',
    total: 0,
    finished: 0,
    typeMap: {
      all: '全部',
      life: '生活',
      education: '提升',
      sport: '运动'
    },
    typeList: []
  },
  onLoad: function(options) {
    this.initData()
  },
  typeChange: function(e) {
    this.setData({
      type: e.detail.type,
      typeName: this.data.typeMap[e.detail.type],
    })
    this.initData()
  },
  initData: function() {
    const openid = wx.getStorageSync("openid")
    wx.request({
      url: 'http://localhost:3000/ache/list',
      data: {
        type: this.data.type,
        openid: openid
      },
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //post
      },
      success: (res) => {
        if (res.data.code == 200) {
          this.setData({
            typeList: res.data.data,
            total: res.data.data.length,
            finished: res.data.data.filter(item => item.finished == 1).length,
          })
        }
      }
    })
  },
  finish: function(e) {
    const openid = wx.getStorageSync("openid")
    const acheid = e.mark.data.id
    wx.request({
      url: 'http://localhost:3000/ache/finish',
      data: {
        id: acheid,
        openid: openid
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (res) => {
        if (res.data.code == 200) {
          this.initData()
        }
      }
    })
  }
})