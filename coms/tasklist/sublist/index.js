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
      setData[`list[${index}]`] = data
      this.setData(setData)
      fsm.writeFile({
        filePath: wx.env.USER_DATA_PATH + '/tmp.txt',
        data: new Date() + "\n",
        encoding: 'utf8',
        success: res => {
          console.info(res)
        },
        fail: res => {
          console.info(res)
        }
      })
      fsm.appendFile({
        filePath: wx.env.USER_DATA_PATH + '/tmp.txt',
        data: "123\n",
        encoding: 'utf8',
        success: res => {
          console.info(res)
        },
        fail: res => {
          console.info(res)
        }
      });
      fsm.readFile({
        filePath: wx.env.USER_DATA_PATH + '/tmp.txt',
        encoding: 'utf8',
        success: function (res) {
          console.log(res.data)
        }
      })
      wx.getFileInfo({
        tempFilePath: '../../../static/mock/log.js',
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log(res)
        },
        complete(res) {
          console.log(res)
        },
      })
      console.log(wx.env.USER_DATA_PATH + '/tmp.txt')
    }
  }
})