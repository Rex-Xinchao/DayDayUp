import { MENULIST} from '../../static/lib/index.js'
Component({
  properties: {
  },
  data: {
    menu: MENULIST
  },
  methods: {
    pageTo: (e) => {
      const url = e.mark.to
      const currentUrl = '/' + getCurrentPages()[0].route
      if (currentUrl === url) return
      wx.redirectTo({
        url: url
      })
    }
  }
})
