// pages/task/index.js
import data from '../../static/mock/task.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    daily: data.daily,
    weekly: data.weekly,
    monthly: data.monthly,
    others: data.others,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.request({
      url: 'http://localhost:3000/task/list', //仅为示例，并非真实的接口地址
      data: {},
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"  //post
      },
      complete: function (res) {
        console.log(res)
      },
      success: function (res) {
        console.log(res)
        if (res.data.code == 0) {
          resolve(res)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})