// coms/list/index.js
let fsm = wx.getFileSystemManager();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array
    },
    type: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    typeMap: {
      life: '生活',
      sport: '运动',
      education: '提升',
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showMore: function(e) {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    finish: function(e) {
      let {
        data,
        index
      } = { ...e.mark
      }
      if (data.current === data.limit) return
      let setData = {}
      data.current += 1
      wx.request({
        url: 'http://localhost:3000/task/update',
        data: {
          id:data.id,
          current: data.current
        },
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded" //post
        },
        success: (res) => {
          if (res.data.code == 200) {
            setData[`list[${index}]`] = data
            this.setData(setData)
          }
        }
      })
    }
  }
})