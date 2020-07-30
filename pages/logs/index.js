import {
  LOGMAP
} from '../../static/lib/index.js';
const globalData = getApp().globalData
Page({
  data: {
    logList: [],
    typeMap: LOGMAP,
    params: {
      current: 0,
      pageSize: 10,
      total: 0
    }
  },
  onLoad: function(options) {
    this.initData()
  },
  initData: function(increase = false) {
    if (!increase) {
      this.setData({
        'params.current': 0
      })
    }
    const openid = wx.getStorageSync("openid")
    wx.request({
      url: `${globalData.host}/log/list`,
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
          let list = this.data.logList
          if (increase) {
            list = list.concat(res.data.data.list)
          } else {
            list = res.data.data.list
          }
          this.setData({
            logList: list,
            'params.total': res.data.data.total
          })
        }
      }
    })
  },
  onReachBottom: function() {
    if (this.data.params.total > this.data.logList.length) {
      this.setData({
        'params.current': this.data.params.current + 1
      })
      this.initData(true);
    } else {
      console.info('已经到底了')
    }
  }
})