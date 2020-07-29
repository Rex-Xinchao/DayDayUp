// coms/wishbar/index.js
Component({
  properties: {
  },
  data: {
    typeMap: {
      all:'全部',
      life: '生活',
      education: '提升',
      sport: '运动'
    },
    refreshMap: {
      daily: '每日任务',
      weekly: '每周任务',
      monthly: '周月任务',
      others: '额外任务'
    }
  },
  methods: {
    typeChange: function(e) {
      const type = e.mark.type
      this.triggerEvent('typeChange', {type: type})
    }
  }
})