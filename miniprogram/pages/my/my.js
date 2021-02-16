// miniprogram/pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    userInfo:{},
    result: '',
aaa:true
  },
  onLoad: function() {

  },

  getUserInfo: function (e) {
    var that = this;
    this.setData({
      aaa: false,
      userInfo: e.detail.userInfo,
    })
    //请求云函数
    wx.cloud.callFunction({
      //调用的函数名字
      name: 'add',
      success: function (res) {
        that.setData({
          //将openid赋值给本地变量myopenid
          myopenid: res.result.userInfo.openId,
        })
        console.log(that.data)
        app.globalData.Info = res.result.userInfo.openId;
        console.log(app.globalData.Info);
      },
      fail: console.error

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})