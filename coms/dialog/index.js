// coms/dialog/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    userInfoHandler: function(res) {
      app.globalData.userInfo = res.detail.userInfo
      this.triggerEvent('dialogClose', {})
    },
    close: function() {
      this.triggerEvent('dialogClose', {})
    }
  }
})