Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: { // 属性名
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0 // 属性初始值（可选
    },
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
    bindDel() {
      let { num } = this.data
      if (num < 1) {
        return
      }
      this.setData({
        num: num - 1
      })
      this.triggerEvent('changeCount', this.data.num) // 自定义组件触发事件时，需要使用 triggerEvent 方法, 这里触发父组件的changeCount方法，后面的this.data.num传递给父组件
    },

    bindAdd() {
      let { num } = this.data
      this.setData({
        num: num + 1
      })
      console.log(num, this.data.num)
      this.triggerEvent('changeCount', this.data.num) // 自定义组件触发事件时，需要使用 triggerEvent 方法
    }
  }
})