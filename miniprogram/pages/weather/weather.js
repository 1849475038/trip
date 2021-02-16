// pages/www/www.js
const util = require('../../util/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    aaa: '',
    img: '',
    img1: '',
    image: ''

  },


  onLoad: function (e,options) {

    var that = this;

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

    var name = e.id;
    util.getMessage(name, callBack)

    function callBack(aaaa) {
      console.log(aaaa)
      that.setData({
        aaa: aaaa,
        img: aaaa.result.realtime.info,
      })

      if (that.data.img == "大雨" || that.data.img == "小雨" || that.data.img == "中雨" || that.data.img == "雷阵雨") {
        that.setData({
          image: '../../images/index/yu.png',
        })
      } else if (that.data.img == "多云" || that.data.img == "阴") {
        that.setData({
          image: '../../images/index/duoyun.png',
        })
      } else if (that.data.img == "晴") {
        that.setData({
          image: '../../images/index/qing.png',
        })
      }
    }
    console.log(this.data.value)


  },

})