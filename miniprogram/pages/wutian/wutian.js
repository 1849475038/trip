// pages/wutian/wutian.js
const util = require('../../util/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aaa: '',
    img1: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e, options) {
    var that = this;

    /*小程序判断时间段的函数*/
    var time = parseInt(new Date().getHours()); //返回小时数

    if (7 < time && time < 17) {

      that.setData({
        img1: '../../images/index/1.jpg',
      })


    } else if (17 <= time && time < 19) {
      that.setData({
        img1: '../../images/index/2.jpg',
      })
    } else {
      that.setData({
        img1: '../../images/index/3.jpg',
      })
    }
    
    var name = e.id;
    util.getMessage(name, callBack)



    function callBack(aaaa) {
      console.log(aaaa)
      that.setData({
        aaa: aaaa,
      })
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