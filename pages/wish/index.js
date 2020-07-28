// pages/wish/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      data: {},
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
    wx.request({
      url: 'http://localhost:3000/wish/finish',
      data: { id: e.mark.data.id, time: Number(e.mark.data.time) + 1 },
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