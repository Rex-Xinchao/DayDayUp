Page({
  data: {
    typeList: [],
    params: {
      current:0,
      pageSize: 10,
      total: 0
    }
  },
  onLoad: function(options) {
    this.initData()
  },
  initData: function (increase = false) {
    if (!increase) {
      this.setData({
        'params.current': 0
      })
    }
    let openid = wx.getStorageSync("openid")
    wx.request({
      url: 'http://localhost:3000/wish/list',
      data: {
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
            'params.total': res.data.data.total
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
  }
})