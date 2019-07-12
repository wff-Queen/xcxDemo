//index.js
Page({
    data: {
        imgUrls: [
            '../../assets/images/banner1.jpg',
            '../../assets/images/banner2.png'
        ],
        navData: [{
                icon: '../../assets/images/topNav/btn_1.png',
                text: '行程列表'
            },
            {
                icon: '../../assets/images/topNav/btn_4.png',
                text: '旅行推荐'
            },
            {
                icon: '../../assets/images/topNav/btn_5.png',
                text: '行程列表'
            },
            {
                icon: '../../assets/images/topNav/index_1.png',
                text: '行程列表'
            },
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 500,
        circular: true,
    },
    /**
     * 生命周期函数：本质就是事件 ，微信小程序在某个阶段会触发事件  
     * 生命周期函数--监听页面加载
     */
    onSearch(event) {
        console.log(event.detail)
    },
    previewImageFn(){
      wx.previewImage({
        current: '', // 当前显示图片的http链接
        urls: [
          'http://pic37.nipic.com/20140113/8800276_184927469000_2.png',
          'http://pic41.nipic.com/20140508/18609517_112216473140_2.jpg'
        ]// 需要预览的图片http链接列表this.data.imgUrls 
      })
    },
    onLaunch: function() {

        console.log("A:当小程序初始化完成时")
    },
    onLoad: function(options) {
        wx.setEnableDebug({
            enableDebug: false
        })
        console.log("A2：首页-监听页面加载")
            /* 最常用
            请求数据 */
            // wx.request({
            //     url: 'https://locally.uieee.com/slides',
            //     data: '',
            //     header: {},
            //     method: 'GET',
            //     dataType: 'json',
            //     responseType: 'text',
            //     success: (res) => {
            //         console.log(res);
            //         this.setData({
            //             imgUrls: res.data
            //         })
            //     }
            // })

        //  导航请求
        // wx.request({
        //     url: 'https://locally.uieee.com/categories',
        //     success: (res) => {
        //         this.setData({
        //             navData: res.data
        //         })
        //     }
        // })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        console.log("B2：首页-监听页面渲染完成")
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        console.log("C2:监听首页显示")
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        console.log("D2:监听页面隐藏")
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        console.log("E:监听页面卸载")
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }

})