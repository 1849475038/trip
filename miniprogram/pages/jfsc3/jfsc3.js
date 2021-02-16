// pages/jfsc3/jfsc3.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    steps: [
      {
        text: '钻石贵宾',
        desc: '2300分',
      },
      {
        text: '铂金贵宾',
        desc: '23500分',
      },
      {
        text: '黄金贵宾',
        desc: '24500分',
      },
      {
        text: '普通会员',
        desc: '25500分',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id; /* 获取所点击的商铺Id,用来判断用户所点击的哪个商铺*/
   
    for (var i = 0; i < app.goods.length; i++) { /*for循环遍历，查找id与首页传过来的id相等的店铺*/
      if (id == app.goods[i].id) {
        this.setData({
          good: app.goods[i] /*如果相等就把当前这个店铺的信息传给shop*/
        })
      }
    }
    console.log(this.data.good)
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