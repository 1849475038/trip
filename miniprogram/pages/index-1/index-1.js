//index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    phones: {},
    page: 1,
    sigleItem: "",
 
  icon: [
    {
      text: "跟团游",
      imgSrc: "http://qdm9gonto.bkt.clouddn.com/%E8%B7%9F%E5%9B%A2.png"
    },
    {
      text: "自由行",
      imgSrc: "http://qdm9gonto.bkt.clouddn.com/%E8%87%AA%E7%94%B1%E8%A1%8C.png"
    },
    {
      text: "定制游",
      imgSrc: "http://qdm9gonto.bkt.clouddn.com/%E5%AE%9A%E5%88%B6%E6%97%85%E8%A1%8C.png"
    },
    {
      text: "私家团",
      imgSrc: "http://qdm9gonto.bkt.clouddn.com/%E7%A7%81%E5%AE%B6%E5%9B%A2.png"
    },
    {
      text: "周边游",
      imgSrc: "http://qdm9gonto.bkt.clouddn.com/%E5%91%A8%E8%BE%B9%E6%B8%B8.png"
    },
    {
      text: "一日游",
      imgSrc: "http://qdm9gonto.bkt.clouddn.com/%E4%B8%80%E6%97%A5%E6%B8%B8.png"
    },
    {
      text: "景点门票",
      imgSrc: "http://qdm9gonto.bkt.clouddn.com/%E9%97%A8%E7%A5%A8.png"
    },
    {
      text: "VIP",
      imgSrc: "http://qdm9gonto.bkt.clouddn.com/VIP.png"
    },
    {
      text: "主题游",
      imgSrc: "http://qdm9gonto.bkt.clouddn.com/%E4%B8%BB%E9%A2%98%E6%B8%B8%E8%A1%8C.png"
    },
    {
      text: "亲子游",
      imgSrc: "http://qdm9gonto.bkt.clouddn.com/%E4%BA%B2%E5%AD%90%E6%B8%B8%E5%AD%A6.png"
    },
    {
      text: "租车",
      imgSrc: "http://qdm9gonto.bkt.clouddn.com/%E4%BA%B2%E5%AD%90%E6%B8%B8%E5%AD%A6.png"
    },
    {
      text: "当地向导",
      imgSrc: "http://qdm9gonto.bkt.clouddn.com/%E5%BD%93%E5%9C%B0%E5%90%91%E5%AF%BC.png"
    }
  ],
},
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
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
    wx.showLoading({
      title: '加载中',
    })

    wx.showNavigationBarLoading(); //顶部导航加载按钮
    setTimeout(function () { //隐藏所有状态
      wx.stopPullDownRefresh(); //停止手机调试时刷新状态
      wx.hideNavigationBarLoading();
      wx.hideLoading();

      wx.showToast({
        title: '加载完毕',
      })
    }, 1000)
  },

 

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})