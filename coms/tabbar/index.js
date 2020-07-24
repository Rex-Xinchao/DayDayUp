const app = getApp();
Component({
  properties: {
  },
  data: {
    // 这里是一些组件内部数据
    menu: [
      {
        name: '任务',
        icon: 'task',
        to:'/pages/task/index'
      },
      {
        name: '成就',
        icon: 'achievement',
        to: '/pages/ache/index'
      },
      {
        name: '愿望',
        icon: 'wishlist',
        to: '/pages/wish/index'
      },
      {
        name: '日志',
        icon: 'log',
        to: '/pages/logs/index'
      }
    ]
  },
  methods: {
    // 这里是一个自定义方法
    pageTo: (e) => {
      console.log(e)
      const url = e.mark.to
      console.log(url)
      // 判断是否为主页面防止原地跳转
      if (!e.currentTarget.dataset.hi) {
        wx.redirectTo({
          url: url
        })
      }
    }
  }
})
