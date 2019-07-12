// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: 'Want to get some fun while travelling?...',
    marqueeDistance: 0,//初始滚动距离
    orientation: 'left',//滚动
    duration: 100,
    interval: 3000, // 时间间隔
    adUrl: '../../images/adImg/scene2.png',
    adImgArr:[
      "../../images/adImg/scene1.jpg",
      "../../images/adImg/scene2.png"
    ],
    fromServer:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://thiswildland.club/label/test',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          //第一个data为固定用法，第二个为json中的数据
          fromServer: res.data.data,
        })
      },
      fail: function () {
        that.setData({
          fromServer: "Failed to request from server!",
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 页面显示
    var that = this;
    var length = that.data.text.length * that.data.size;//文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
    that.setData({
      length: length,
      windowWidth: windowWidth,
    });
    that.runMarquee();// 水平一行字滚动完了再按照原来的方向滚动
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  runMarquee: function () {
    var that = this;
    // var interval = setInterval(function () {
      //文字一直移动到末端
    //   if (-that.data.marqueeDistance < that.data.length) {
    //     that.setData({
    //       marqueeDistance: that.data.marqueeDistance - that.data.marqueePace,
    //     });
    //   } else {
    //     clearInterval(interval);
    //     that.setData({
    //       marqueeDistance: that.data.windowWidth
    //     });
    //     that.runMarquee();
    //   }
    // }, that.data.interval);
   
  },
  getFromServer:function(){
    
  }
})