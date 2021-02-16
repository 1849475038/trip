// pages/jfsc2/jfsc2.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // goods: {
    //   1: {
    //     id: 1,
    //     name: '【限量】携程超级会员',
    //     names: '尊享旅游特权，升级你的旅行',
    //     pic: 'http://qdpwc973t.bkt.clouddn.com/B1.jpg',
    //     branch:23000,
    //     sold: 22000
    //   },
    //   2: {
    //     id: 2,
    //     name: '优酷会员 黄金会员电子兑换券',
    //     names: '本商品只能在手机、电脑、IPAD上使用',
    //     pic: 'http://qdpwc973t.bkt.clouddn.com/B2.jpg',
    //     branch: 24000,
    //     sold: 4000
       
    //   },
    //   3: {
    //     id: 3,
    //     name: '腾讯视频VIP电子兑换券',
    //     names: '本商品只支持QQ账号兑换，不支持折现使用',
    //     pic: 'http://qdpwc973t.bkt.clouddn.com/B3.jpg',
    //     branch: 25000,
    //     sold: 4900
    //   },
    //   4: {
    //     id: 4,
    //     name: '芒果TV 移动/全屏影视会员',
    //     names: '芒果Tv 移动/全屏会员',
    //     pic: 'http://qdpwc973t.bkt.clouddn.com/B4.jpg',
    //     branch: 25000,
    //     sold: 4900
    //   },
    //   5: {
    //     id: 5,
    //     name: '腾讯视频VIP电子兑换券',
    //     names: '尊享旅游特权，升级你的旅行',
    //     pic: 'http://qdpwc973t.bkt.clouddn.com/B5.jpg',
    //     branch: 25000,
    //     sold: 4900
    //   }
    // },
    
  },
  onLoad: function(options) {
    var id = options.id; /* 获取所点击的商铺Id,用来判断用户所点击的哪个商铺*/
    console.log(app.food)
    for (var i = 0; i < app.food.length; i++) { /*for循环遍历，查找id与首页传过来的id相等的店铺*/
      console.log(app.food[i])
      if (id == app.food[i].id) {
        this.setData({
          food: app.food[i].item /*如果相等就把当前这个店铺的信息传给shop*/
        })
      }
    }
    console.log(this.data.food)
  },
})
