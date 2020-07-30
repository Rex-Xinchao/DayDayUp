const globalData = getApp().globalData
Page({
  data: {
    type: 'all',
    typeName: '全部',
    typeMap: {
      all: '全部',
      life: '生活',
      education: '提升',
      sport: '运动'
    },
    typeList: [],
    params:{
      current: 0,
      pageSize: 10,
      finished: 0,
      total: 0
    }
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
  initData: function (increase = false) {
    if (!increase) {
      this.setData({
        'params.current': 0
      })
    }
    const openid = wx.getStorageSync("openid")
    wx.request({
      url: `${globalData.host}/ache/list`,
      data: {
        type: this.data.type,
        openid: openid,
        current: this.data.params.current,
        pageSize: this.data.params.pageSize
      },
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //post
      },
      success: (res) => {
        if (res.data.code == 200) {
          let list = this.data.typeList
          if (increase) {
            list = list.concat(res.data.data.list)
          } else {
            list = res.data.data.list
          }
          this.setData({
            typeList: list,
            'params.finished': res.data.data.finished,
            'params.total': res.data.data.total
          })
        }
      }
    })
  },
  finish: function(e) {
    const openid = wx.getStorageSync("openid")
    const acheid = e.mark.data.id
    wx.request({
      url: `${globalData.host}/ache/finish`,
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
  },
  onReachBottom: function () {
    if (this.data.params.total > this.data.typeList.length) {
      this.setData({
        'params.current': this.data.params.current + 1
      })
      this.initData(true);
    } else {
      console.info('已经到底了')
    }
  },
})