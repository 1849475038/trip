// pages/check/check.js
const util = require('../../util/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nn: '南宁',
    bj: '北京',
    sz:'深圳'
  },
  onChange(e) { //输入框改变时触发
    this.setData({
      value: e.detail,
    });
    // console.log(this.data.value)
  },
  getName: function () { //获取城市名称
    var cityName = this.data.value;
    var self = this;
    util.getMessage(cityName, callBack)

    function callBack(aaaa) {
      console.log(aaaa)

      var qianmian = '../weather/weather?id='

      if (aaaa.reason == "暂不支持该城市") {
        wx.showModal({
          title: '提示',
          content: '暂不支持该城市',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      } else {
        wx.navigateTo({
          url: qianmian + aaaa.result.city,
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    var nn = this.data.nn
    var bj = this.data.bj
    var sz = this.data.sz

    util.getMessage(nn, callBack1)
    function callBack1(aaa) {
      
      that.setData({
        nanning: aaa
      })
    }

    util.getMessage(bj, callBack2)
    function callBack2(aaa) {

      that.setData({
        beijin: aaa
      })
    }

    util.getMessage(sz, callBack3)
    function callBack3(aaa) {

      that.setData({
        shenzhen: aaa
      })
      console.log(that.data)
    }

    /*小程序判断时间段的函数*/
    var time = parseInt(new Date().getHours()); //返回小时数
    var a = 0;
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