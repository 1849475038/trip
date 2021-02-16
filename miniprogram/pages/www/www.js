// pages/www/www.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    aaa: '',
    bbb: false,
    img: '',
    image:''

  },


  onChange(e) { //输入框改变时触发
    this.setData({
      value: e.detail,
    });
    console.log(this.data.value)
  },


  getName: function() { //获取城市名称
    var cityName = this.data.value;
    var self = this;
    self.getMessage(cityName)
    console.log(this.data.value)
  },

  getMessage: function(name) { //请求城市详细信息
    console.log(name)
    var messageUrl = "http://apis.juhe.cn/simpleWeather/query?city=";
    var messageKey = "38d639a330e48b3cb0c2dee2b90db125";
    var self = this;

    wx.request({
      url: messageUrl + name + "&key=" + messageKey,
      success: function(res) {
        console.log(res.data.reason)
        if (res.data.reason == "暂不支持该城市") {
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
          self.setData({
            bbb: true,
          })
        }
        self.setData({
          aaa: res.data,
        })
        self.setData({
          img: res.data.result.realtime.info,
        })
        if (self.data.img == "大雨" || self.data.img == "小雨" || self.data.img == "中雨" || self.data.img == "雷阵雨") {
          self.setData({
            image: 'http://qdm9gonto.bkt.clouddn.com/%E5%A4%A7%E9%9B%A8.jpeg',
          })
        } else if (self.data.img == "多云" || self.data.img == "阴") {
          self.setData({
            image: 'http://qdm9gonto.bkt.clouddn.com/%E5%A4%9A%E4%BA%91.jpeg',
          })
        } else if (self.data.img == "晴") {
          self.setData({
            image: 'http://qdm9gonto.bkt.clouddn.com/%E6%99%B4.png',
          })
        }
      }
    })
    
    console.log(this.data.aaa)
    console.log(this.data.img)
    
  }


})