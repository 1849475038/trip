//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'ynl-6ue2i'
    })
  },
  
  goods: [
    {
      id: 1,
      name: '【限量】携程超级会员',
      names: '尊享旅游特权，升级你的旅行',
      pic: 'http://qdpwc973t.bkt.clouddn.com/B1.jpg',
      branch: 23000,
      sold: 22000
    },
    {
      id: 2,
      name: '优酷会员 黄金会员电子兑换券',
      names: '本商品只能在手机、电脑、IPAD上使用',
      pic: 'http://qdpwc973t.bkt.clouddn.com/B2.jpg',
      branch: 24000,
      sold: 4000

    },
    {
      id: 3,
      name: '腾讯视频VIP电子兑换券',
      names: '本商品只支持QQ账号兑换，不支持折现使用',
      pic: 'http://qdpwc973t.bkt.clouddn.com/B3.jpg',
      branch: 25000,
      sold: 4900
    },
    {
      id: 4,
      name: '携程国内预约接送机满减优惠券',
      names: '芒果Tv 移动/全屏',
      pic: 'http://qdpwc973t.bkt.clouddn.com/B4.jpg',
      branch: 25000,
      sold: 4900
    },
    {
      id: 5,
      name: '【首兑加赠】500四川航空',
      names: '尊享旅游特权，升级你的旅行',
      pic: 'http://qdpwc973t.bkt.clouddn.com/B5.jpg',
      branch: 25000,
      sold: 4900
    },
    {
      id: 6,
      name: '国内航线 机场快速安检抵用券',
      names: '本商品只支持QQ账号兑换，不支持折现使用',
      pic: 'http://qdpwc973t.bkt.clouddn.com/B6.jpg',
      branch: 25000,
      sold: 4900
    },
    {
      id: 7,
      name: 'CoCo都可 代金电子抵用券',
      names: '芒果Tv 移动/全屏',
      pic: 'http://qdpwc973t.bkt.clouddn.com/B7.jpg',
      branch: 25000,
      sold: 4900
    },
    {
      id: 8,
      name: '汉堡王 王道川蜀鸡翅电子抵用券',
      names: '尊享旅游特权，升级你的旅行',
      pic: 'http://qdpwc973t.bkt.clouddn.com/B8.jpg',
      branch: 25000,
      sold: 4900
    },
    {
      id: 9,
      name: '汉堡王 薯霸王（中薯）',
      names: '尊享旅游特权，升级你的旅行',
      pic: 'http://qdpwc973t.bkt.clouddn.com/B9.jpg',
      branch: 25000,
      sold: 4900
    },
  ],

  food: [
    {
      id: 1,
      item: [{
        id: 1,
        name: '【限量】携程超级会员',
        names: '尊享旅游特权，升级你的旅行',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B1.jpg',
        branch: 23000,
        sold: 22000
      },
      {

        id: 2,
        name: '优酷会员 黄金会员电子兑换券',
        names: '本商品只能在手机、电脑、IPAD上使用',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B2.jpg',
        branch: 24000,
        sold: 4000

      },
      {
        id: 3,
        name: '腾讯视频VIP电子兑换券',
        names: '本商品只支持QQ账号兑换，不支持折现使用',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B3.jpg',
        branch: 25000,
        sold: 3900
      },
      {
        id: 1,
        name: '【限量】携程超级会员',
        names: '尊享旅游特权，升级你的旅行',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B1.jpg',
        branch: 23000,
        sold: 3000
      },
      {
        id: 2,
        name: '优酷会员 黄金会员电子兑换券',
        names: '本商品只能在手机、电脑、IPAD上使用',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B2.jpg',
        branch: 24000,
        sold: 2000

      },
      {
        id: 3,
        name: '腾讯视频VIP电子兑换券',
        names: '本商品只支持QQ账号兑换，不支持折现使用',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B3.jpg',
        branch: 25000,
        sold: 1200
      },],
    },

    {
      id: 2,
      item: [{

        id: 4,
        name: '携程国内预约接送机满减优惠券',
        names: '国内接送机/站满减优惠券',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B4.jpg',
        branch: 25000,
        sold: 4900
      },
      {
        id: 5,
        name: '【首兑加赠】500四川航空',
        names: '川航里程兑换',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B5.jpg',
        branch: 24000,
        sold: 4880

      },
      {
        id: 6,
        name: '国内航线 机场快速安检抵用券',
        names: '国内机场 快速安检',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B6.jpg',
        branch: 23000,
        sold: 4780
      },
      {

        id: 4,
        name: '携程国内预约接送机满减优惠券',
        names: '国内接送机/站满减优惠券',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B4.jpg',
        branch: 25000,
        sold: 4610
      },
      {
        id: 5,
        name: '【首兑加赠】500四川航空',
        names: '川航里程兑换',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B5.jpg',
        branch: 24000,
        sold: 4540

      },
      {
        id: 6,
        name: '国内航线 机场快速安检抵用券',
        names: '国内机场 快速安检',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B6.jpg',
        branch: 23000,
        sold: 4320
      }]

    },
    {
      id: 3,
      item: [{
        id: 7,
        name: 'CoCo都可 代金电子抵用券',
        names: '使用代金券可在门店消费时抵用相应',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B7.jpg',
        branch: 25000,
        sold: 4900
      },
      {
        id: 8,
        name: '汉堡王 王道川蜀鸡翅电子抵用券',
        names: '持劵号至门店兑换薯霸王（中薯）',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B8.jpg',
        branch: 24000,
        sold: 4800

      },
      {
        id: 9,
        name: '汉堡王 薯霸王（中薯）',
        names: '持劵号至门店课兑换薯霸王',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B9.jpg',
        branch: 23000,
        sold: 4700
      },
      {
        id: 7,
        name: 'CoCo都可 代金电子抵用券',
        names: '使用代金券可在门店消费时抵用相应',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B7.jpg',
        branch: 25000,
        sold: 4600
      },
      {
        id: 8,
        name: '汉堡王 王道川蜀鸡翅电子抵用券',
        names: '持劵号至门店兑换薯霸王（中薯）',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B8.jpg',
        branch: 24000,
        sold: 4500

      },
      {
        id: 9,
        name: '汉堡王 薯霸王（中薯）',
        names: '持劵号至门店课兑换薯霸王',
        pic: 'http://qdpwc973t.bkt.clouddn.com/B9.jpg',
        branch: 23000,
        sold: 4400
      }]

    }
  ],

  globalData: {
    Info: '',
    shops: [{
        id: 1,
      banner: "https://796e-ynl-6ue2i-1302444261.tcb.qcloud.la/xiecheng/xq/sanjiaozhou2.png?sign=5cf714f011964755d079ce2e6d3741b4&t=1610620607",
        name: "三角洲岛",
        pinfen: "3.8",
        pinlun: "601",
        biaoyu: "水清石奇的海上世外桃源",
        chengshi: "惠东",
        paiming: "2",
        dizhi: "惠州市惠东县巽寮湾度假村",
      price: 65,
      latitude: 22.623818349,
      longitude: 114.732566674
      },
      {
        id: 2,
        banner: "https://796e-ynl-6ue2i-1302444261.tcb.qcloud.la/xiecheng/xq/dianchi2.png?sign=fab8371fc98e4e8bd467dc297aba502c&t=1610620635",
        name: "滇池",
        pinfen: "4.4",
        pinlun: "4909",
        biaoyu: "乘船游湖感受高原明珠风光",
        chengshi: "昆明",
        paiming: "3",
        dizhi: "昆明市西山区滇池路1318号",
        price:30,
      latitude: 24.95972,
      longitude: 102.665486
      },
      {
        id: 3,
        banner: "https://796e-ynl-6ue2i-1302444261.tcb.qcloud.la/xiecheng/xq/damingshan.png?sign=e8d2643e93bb663619d750748ced2dca&t=1610620658",
        name: "大明山景区",
        pinfen: "4.6",
        pinlun: "3586",
        biaoyu: "探万米岩洞走悬空栈道",
        chengshi: "杭州",
        paiming: "1",
        dizhi: "杭州市临安清凉峰白果村",
        price: 118,
        latitude: 30.028484,
        longitude: 118.997844
      },
      {
        id: 4,
        banner: "https://796e-ynl-6ue2i-1302444261.tcb.qcloud.la/xiecheng/xq/wailingdingdao2.png?sign=69625d1da7e2b20c2999b8518a938c06&t=1610620571",
        name: "外伶仃岛",
        pinfen: "4.2",
        pinlun: "639",
        biaoyu: "游山玩水吃海鲜并眺望香港",
        chengshi: "珠海",
        paiming: "5",
        dizhi: "珠海市香洲区担杆镇外伶仃岛",
        price: 60,
        latitude: 22.099102799,
        longitude: 114.041888899
      }
    ]
  }
})