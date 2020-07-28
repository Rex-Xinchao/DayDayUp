// coms/dialog/index.js
Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },
  data: {
  },
  methods: {
    userInfoHandler: function(res) {
      wx.setStorageSync("userInfo", res.detail.userInfo)
      this.close()
    },
    close: function() {
      this.triggerEvent('dialogClose', {})
    }
  }
})