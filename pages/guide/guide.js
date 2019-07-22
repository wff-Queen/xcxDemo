Page({
  data: {
    num: 1,
    price: 50
  },

  onChangeCount(e) {
    console.log(e.detail) // e.detail可以拿到组件通过this.triggerEvent传出来的数据
    this.setData({
      num: e.detail
    })
  }
})