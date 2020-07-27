// pages/wish/index.js
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  initData: function () {
    wx.request({
      url: 'http://localhost:3000/wish/list',
      data: { type: this.data.type },
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
    wx.request({
      url: 'http://localhost:3000/wish/list',
      data: { type: this.data.type },
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

  finish: function (e) {
    wx.request({
      url: 'http://localhost:3000/wish/finish',
      data: { id: e.mark.data.id },
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