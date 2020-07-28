// pages/task/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    daily: [],
    weekly: [],
    monthly: [],
    others: [],
    dialogShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'http://localhost:3000/task/list',
      data: {},
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //post
      },
      success: (res) => {
        if (res.data.code == 200) {
          let obj = {
            daily: {},
            weekly: {},
            monthly: {},
            others: {}
          }
          res.data.data.forEach(item => {
            obj[item.refresh][item.type] || (obj[item.refresh][item.type] = [])
            obj[item.refresh][item.type].push(item)
          })
          this.setData({
            daily: obj.daily,
            weekly: obj.weekly,
            monthly: obj.monthly,
            others: obj.others
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    if (!app.globalData.authSetting['scope.userInfo']) {
      this.setData({
        dialogShow: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  dialogClose: function() {
    this.setData({
      dialogShow: false
    })
  }
})