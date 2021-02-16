// pages/list/list.js
const db = wx.cloud.database()
const xcdd_col = db.collection('xcdd')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
delete:function(e){
  var index = e.currentTarget.dataset.indexx
  var id = e.currentTarget.dataset.idd
  let carts = this.data.carts;
  carts.splice(index, 1); // 删除购物车列表里这个商品
  this.setData({
    carts: carts
  });
  xcdd_col.doc(id).remove({})
  
},

  async loadCartsData() {
    let res = await xcdd_col.where({
      _openid: app.globalData.Info,
    }).get()
    this.setData({
      carts: res.data
    })
    console.log(this.data.carts)
  },
  denglu() {
    wx.switchTab({
      url: '../my/my'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.Info == '') {
      this.setData({
        open: false
      })
    } else {
      this.setData({
        open: true
      })
    this.loadCartsData()
    }
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