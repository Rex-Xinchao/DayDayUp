// pages/wish/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
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
    typeList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData()
  },

  initData: function () {
    let openid = wx.getStorageSync("openid")
    wx.request({
      url: 'http://localhost:3000/ache/list',
      data: { type: this.data.type, openid: openid },
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

  typeChange: function (e) {
    this.setData({
      type: e.detail.type,
      typeName: this.data.typeMap[e.detail.type],
    })
    this.initData()
  },

  finish: function (e) {
    let openid = wx.getStorageSync("openid")
    wx.request({
      url: 'http://localhost:3000/ache/finish',
      data: {
        id: e.mark.data.id,
        openid: openid},
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