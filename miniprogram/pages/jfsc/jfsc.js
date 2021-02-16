// miniprogram/pages/jfsc/jfsc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    goods: {
      1: {
        id: 1,
        name: '【限量】携程超级会员',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B1.jpg',
        sold: 22000
      },
     2: {
        id: 2,
        name: '优酷会员 黄金会员电子兑换券',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B2.jpg',
        sold: 4000
      },
     3: {
        id: 3,
        name: '腾讯视频VIP电子兑换券',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B3.jpg',
        sold: 4900
      },
      4: {
        id: 4,
        name: '携程国内预约接送机满减优惠券',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B4.jpg',
        sold: 88
      },
      5: {
        id: 5,
        name: '【首兑加赠】500四川航空',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B5.jpg',
        sold: 10000
      },
      6: {
        id: 6,
        name: '国内航线 机场快速安检抵用券',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B6.jpg',
        sold: 4500
      },
      7: {
        id: 7,
        name: 'CoCo都可 代金电子抵用券',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B7.jpg',
        sold: 3200
      },
      8: {
        id: 8,
        name: '汉堡王 王道川蜀鸡翅电子抵用券',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B8.jpg',
        sold: 3200
      },
      9: {
        id: 9,
        name: '汉堡王 薯霸王（中薯）',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B9.jpg',
        sold: 3200
      }
    },
    goodsList: [
      {
        id:1,
        classifyName: '超值人气',
        goods: [1, 2, 3, ]
      },
      {
      id:2,
        classifyName: '旅游出行',
        goods: [4,5,6]
      },
      {
       id:3,
        classifyName: '美食餐饮',
        goods: [7, 8, 9]
      }
    ]
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