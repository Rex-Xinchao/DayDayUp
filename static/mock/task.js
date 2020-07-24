const daily = {
  life:[
    {
      name: '看新闻-30min',
      point: 1,
      limit: 1,
      current: 0
    },
    {
      name: '6:30准时起床',
      point: 2,
      limit: 1,
      current: 0
    },
    {
      name: '11:00准时睡觉',
      point: 2,
      limit: 1,
      current: 0
    },
    {
      name: '眼操运动',
      point: 5,
      limit: 1,
      current: 0
    },
  ],
  education:[
    {
      name: '每日一题leetCode（简单）',
      point: 1,
      limit: 1,
      current: 0
    },
    {
      name: '每日一题leetCode（普通）',
      point: 5,
      limit: 1,
      current: 0
    },
    {
      name: '每日一题leetCode（困难）',
      point: 10,
      limit: 1,
      current: 0
    },
    {
      name: '笔记整理Bug&收获',
      point: 2,
      limit: 1,
      current: 0
    },
    {
      name: 'cherry老师的课堂',
      point: 5,
      limit: 1,
      current: 0
    }
  ]
}

const weekly = {
  life:[
    {
      name:'拖地',
      point: 2,
      limit: 2,
      current: 0
    },
    {
      name: '整理房间',
      point: 1,
      limit: 1,
      current: 0
    },
    {
      name: '做菜',
      point: 5,
      limit: 1,
      current: 0
    }
  ],
  sport:[
    {
      name: '健身环大冒险-30min',
      point: 10,
      limit: 3,
      current: 0
    },
    {
      name: '跑步-5km',
      point: 10,
      limit: 2,
      current: 0
    },
  ],
  education: [
    {
      name: '更新维护博客',
      point: 5,
      limit: 1,
      current: 0
    },
  ]
}

const monthly = {
  education:[
    {
      name: '学习一门前端新技能',
      point: 25,
      limit: 1,
      current: 0
    },
  ]
}

const others = {
  life: [
    {
      name: '大扫除',
      point: 15,
      limit: 1,
      current: 0
    }
  ],
  education:[
    {
      name: '学习一个新菜谱',
      point: 10,
      limit: 1,
      current: 0
    },
    {
      name: '练习打字手法-30min',
      point: 5,
      limit: 1,
      current: 0
    },
    {
      name: '外语背诵学习-30min',
      point: 5,
      limit: 1,
      current: 0
    },
    {
      name: '外语听力学习-30min',
      point: 5,
      limit: 1,
      current: 0
    },
    {
      name: '完成一次jenkins发布',
      point: 10,
      limit: 1,
      current: 0
    },
    {
      name: '开发一款手机App',
      point: 30,
      limit: 1,
      current: 0
    },
    {
      name: '开发1款微信小程序',
      point: 30,
      limit: 1,
      current: 0
    },
    {
      name: '开发1款eletronic游戏',
      point: 50,
      limit: 1,
      current: 0
    }
  ]
}

export default {
  daily,
  weekly,
  monthly,
  others
}