// pages/kefu/kefu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tongzhiImg: "https://7569-ui2database-27noq-1302490469.tcb.qcloud.la/car/%E9%80%9A%E7%9F%A5.png?sign=2a3490cb1a860220c9988d2be68cc269&t=1610623148",
    tongzhiText: "服务通知",
    noticeImg: "https://7569-ui2database-27noq-1302490469.tcb.qcloud.la/chen/%E5%8F%B3%20(2).png?sign=31ada1976c7a26abf1f2aad88180988d&t=1610635210",
    headerBox: [
      {
        smallImg: "https://7569-ui2database-27noq-1302490469.tcb.qcloud.la/car/%E9%80%9A%E7%9F%A51.png?sign=fbfc49f9432cd87654018d49da49e000&t=1610623816",
        successText: "火车票退票成功通知",
        cha: "https://7569-ui2database-27noq-1302490469.tcb.qcloud.la/chen/%E5%8F%89%E5%8F%B7.png?sign=8f363668e201e8381b1044254a64923d&t=1610630940",
        timeText: "1月23日，D3352南宁-贵港，陈朝媚退票成功..."
      },
      {
        smallImg: "https://7569-ui2database-27noq-1302490469.tcb.qcloud.la/car/%E9%80%9A%E7%9F%A51.png?sign=fbfc49f9432cd87654018d49da49e000&t=1610623816",
        successText: "火车票购票成功通知",
        cha: "https://7569-ui2database-27noq-1302490469.tcb.qcloud.la/chen/%E5%8F%89%E5%8F%B7.png?sign=8f363668e201e8381b1044254a64923d&t=1610630940",
        timeText: "购票成功，1月21日11：38南宁-贵港D8337陈..."
      }
    ],

    contentImg: "https://7569-ui2database-27noq-1302490469.tcb.qcloud.la/car/%E7%81%AB%E8%BD%A6.png?sign=310081f2d368e623a63631cdbd2a11b2&t=1610637976",
    contentText: "火车票管家-国内",
    contentGuanfang: "官方",
    contentMore: "小游：您好，您的订单还暂未出票成功，如您不",

    contentImg1: "https://7569-ui2database-27noq-1302490469.tcb.qcloud.la/car/%E6%97%85%E6%B8%B8.png?sign=8c3a80c700f7fca81d5abff05bdc35d1&t=1610642914",
    contentText1: "旅游管家",
    contentGuanfang1: "官方",
    contentMore1: "小游：您好，您的订单还暂未出票成功，如您不",

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickBox() {
    wx.navigateTo({
      url: '../kefuMore/kefuMore',
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