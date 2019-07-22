// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        headeUrl: '',
        name: ''
    },
    getAuthorize: function(e) {
        console.log(e.detail.userInfo);
        if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
            wx.showModal({
                title: '警告',
                content: '您点击了拒绝授权，部分功能无法使用!!!',
                showCancel: false,
                confirmText: '返回授权',
                success: function(res) {
                    // 用户没有授权成功
                    if (res.confirm) {
                        wx.setStorageSync('enws', '1');
                        wx.switchTab({
                            url: "/wurui_house/pages/index/index"
                        })
                        console.log('用户点击了“返回授权”');
                    };
                }
            })
        } else {
            this.setData({
                headeUrl: e.detail.userInfo.avatarUrl,
                name: e.detail.userInfo.nickName
            })
        }

    },
    getPhoneNumber: function(e) { //点击获取手机号码按钮
        var that = this;
        that.data.lee
        if (that.data.lee == '') {
            // wx.showToast({
            //     icon: "none",
            //     title: '请先点击获取用户信息',
            // })
            // return
        } else {
            wx.checkSession({
                success: function(res) {
                    console.log(e.detail.errMsg)
                    console.log(e.detail.iv)
                    console.log(e.detail.encryptedData)
                    var ency = e.detail.encryptedData;
                    var iv = e.detail.iv;

                    var sessionk = that.data.sessionKey;


                    if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
                        wx.showModal({
                                title: '警告',
                                content: '您点击了拒绝授权，部分功能无法使用!!!',
                                showCancel: false,
                                confirmText: '返回授权',
                                success: function(res) {
                                    // 用户没有授权成功，不需要改变 isHide 的值
                                    if (res.confirm) {
                                        wx.setStorageSync('enws', '1');
                                        // wx.switchTab({
                                        //     url: "/wurui_house/pages/index/index"
                                        // })
                                        console.log('用户点击了“返回授权”');
                                    };
                                }
                            }),

                            that.setData({

                                modalstatus: true,

                            });
                    } else {
                        that.setData({

                            lee: false,

                        });
                        // wx.switchTab({
                        //         url: "/wurui_house/pages/index/index"
                        //     })
                        //同意授权
                        var userinfo = wx.getStorageSync('userInfo');
                        wx.request({
                            'url': "http://10.0.21.126:19000/account/login",
                            data: {
                                sessionid: userinfo.sessionid,
                                uid: userinfo.memberInfo.uid,
                                iv: iv,
                                encryptedData: ency
                            },
                            success: function(res) {
                                if (res.data.data.error == 0) {
                                    console.log('success' + res.data.data);
                                    //用户已经进入新的版本，可以更新本地数据
                                    wx.setStorageSync('versions', '1');
                                    wx.setStorageSync('enws', '2');
                                } else {
                                    //用户保存手机号失败，下次进入继续授权手机号
                                    wx.setStorageSync('enws', '1');
                                    console.log('fail' + res.data.data);
                                }
                            },
                            fail: function(res) {
                                console.log('fail' + res);
                            }
                        });
                    }
                },

                fail: function() {

                    console.log("session_key 已经失效，需要重新执行登录流程");


                    that.wxlogin(); //重新登录
                }

            });
        }
    },
    wxlogin: function() { //获取用户的openID
        wx.navigateTo({
                url: '/pages/login/login',
                success: function(res) {},
                fail: function(res) {},
                complete: function(res) {},
            })
            // var that = this;
            // wx.login({
            //     success(res) {
            //         console.log(res);
            //         var code = res.code
            //         wx.request({
            //             url: 'https://www.xiongxiaoyao.cn/index/users/code2seesion?jsCode=1',
            //             method: "post",
            //             data: {
            //                 code
            //             },
            //             success: function(res) {
            //                 console.log(res.data.openid);
            //                 that.setData(res.data);
            //             }
            //         })
            //     }
            // })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

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