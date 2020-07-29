const LOGMAP = {
  daily: '每日',
  weekly: '每周',
  monthly: '每月',
  others: '额外',
  ache: '成就',
  wish: '愿望'
}

const MENULIST = [
  {
    name: '任务',
    icon: 'task',
    to: '/pages/task/index'
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

export {
  LOGMAP,
  MENULIST
}