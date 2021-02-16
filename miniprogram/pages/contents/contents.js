


Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [{
        id: 1,
        title: '热门'
      },
      {
        id: 2,
        title: '周边'
      },
      {
        id: 3,
        title: '境内'
      },
      {
        id: 4,
        title: '港澳台'
      },
      {
        id: 5,
        title: '日本'
      }
     
    ],
    luckNum: 0,
    tp2: [{
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E6%9F%B3%E5%B7%9E.png',
        font: '柳州',
        detailid: 1
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E5%8D%83%E6%B9%96%E5%B2%9B.png',
        font: '千湖岛',
        detailid: 2
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E9%98%B2%E5%9F%8E%E6%B8%AF.png',
        font: '防城港',
        detailid: 3

      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E4%B9%8C%E9%95%87.png',
        font: '乌镇',
        detailid: 4
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E5%8D%97%E5%AE%81.png',
        font: '南宁',
        detailid: 5
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E8%B4%B5%E9%98%B3.png',
        font: '贵阳',
        detailid: 5
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E5%8C%97%E4%BA%AC.png',
        font: '北京',
        detailid: 54
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E5%8D%97%E4%BA%AC.png',
        font: '南京',
        detailid: 7
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E8%8B%8F%E5%B7%9E.png',
        font: '苏州',
        detailid: 8
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E6%8B%89%E8%90%A8.png',
        font: '拉萨',
        detailid: 9
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E6%9F%B3%E5%B7%9E.png',
        font: '柳州',
        detailid: 10
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E6%9D%AD%E5%B7%9E.png',
        font: '杭州',
      }

    ],
    girl: [{
      img: 'http://qdmcywy3p.bkt.clouddn.com/bh1.jpg',
        font: '北海',
        detailid: 1
      },
      {
        img: 'http://qdm9gonto.bkt.clouddn.com/%E6%A1%82%E6%9E%97.png',
        font: '桂林',
        detailid: 55
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E6%9F%B3%E5%B7%9E.png',
        font: '柳州',
        detailid: 15
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E9%98%B2%E5%9F%8E%E6%B8%AF.png',
        font: '防城港',
        detailid: 56
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E5%8D%97%E5%AE%81.png',
        font: '南宁',
        detailid: 3
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E8%B4%B5%E9%98%B3.png',
        font: '贵阳',
        detailid: 57
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E4%B9%8C%E9%95%87.png',
        font: '乌镇',
        detailid: 16
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/bh3.jpg',
        font: '三亚',
        detailid: 17
      },
      {
        img: 'http://qdm9gonto.bkt.clouddn.com/%E9%98%B3%E6%9C%94.png',
        font: '阳朔',
        detailid: 5
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E8%B4%B5%E9%98%B3.png',
        font: '东兴',
        detailid: 58
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E4%B9%8C%E9%95%87.png',
        font: '资源',
        detailid: 59
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E5%8D%97%E4%BA%AC.png',
        font: '百色',
        detailid: 60
      }
    ],
    baoxie: [{
      img: 'http://qdmcywy3p.bkt.clouddn.com/bh3.jpg',
        font: '三亚',
        detailid: 18
      },
      {
        img: 'http://qdm9gonto.bkt.clouddn.com/guilin.png',
        font: '桂林',
        detailid: 19
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/food2.jpg',
        font: '成都',
        detailid: 20
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E4%B9%8C%E9%95%87.png',
        font: '丽江',
        detailid: 21
      },
      {
        img: 'http://qdm9gonto.bkt.clouddn.com/cq.png',
        font: '重庆',
        detailid: 73
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/%E5%8C%97%E4%BA%AC.png',
        font: '北京',
        detailid: 74
      },
      {
        img: 'http://qdm9gonto.bkt.clouddn.com/xm.png',
        font: '厦门',
        detailid: 75
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/bh4.jpg',
        font: '上海',
        detailid: 76
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/food3.jpg',
        font: '长沙',
        detailid: 77
      }
    ],
    shipin: [{
      img: 'http://qdmcywy3p.bkt.clouddn.com/tw.png',
        font: '台湾',
        detailid: 22
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/am.png',
        font: '澳门',
        detailid: 23
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/xg.png',
        font: '香港',
        detailid: 25
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/tb.png',
        font: '台北',
        detailid: 63

      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/ylt.png',
        font: '日月潭',
        detailid: 64
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/kt.png',
        font: '垦丁',
        detailid: 65
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/gx.png',
        font: '高雄',
        detailid: 66
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/hl.png',
        font: '花莲',
        detailid: 67
      },
      {
        img: 'http://qdmcywy3p.bkt.clouddn.com/tz.png',
        font: '台中',
        detailid: 68
      },
    ],
      meizhuang:[{
        img: 'http://qdmcywy3p.bkt.clouddn.com/rb.png',
        font: '日本',
        detailid: 22
      },
        {
          img: 'http://qdmcywy3p.bkt.clouddn.com/dj.png',
          font: '东京',
          detailid: 23
        },
        {
          img: 'http://qdmcywy3p.bkt.clouddn.com/bhd.png',
          font: '北海道',
          detailid: 25
        },
        {
          img: 'http://qdmcywy3p.bkt.clouddn.com/mgw.png',
          font: '名古屋',
          detailid: 67
        },
        {
          img: 'http://qdmcywy3p.bkt.clouddn.com/db.png',
          font: '大阪',
          detailid: 63

        },
        {
          img: 'http://qdmcywy3p.bkt.clouddn.com/csx.png',
          font: '冲绳县',
          detailid: 64
        },
        {
          img: 'http://qdmcywy3p.bkt.clouddn.com/jd.png',
          font: '京都',
          detailid: 65
        },
        {
          img: 'http://qdmcywy3p.bkt.clouddn.com/fss.png',
          font: '富士山',
          detailid: 66
        },
        {
          img: 'http://qdmcywy3p.bkt.clouddn.com/zh.png',
          font: '札幌',
          detailid: 68
        }
    ],

   
  
  },

  menuClick(e) {
    console.log('luckNum当前值:', this.data.luckNum)
    var index = e.currentTarget.dataset.index
    this.setData({
      luckNum: index
    })
    console.log('luckNum更改后:', this.data.luckNum)
  },
  // 跳转详情页方法
  goDetail: function(e) {
    var detailindex = e.currentTarget.dataset.detail // 获取详情的索引
    wx.navigateTo({
      url: '../xiangq/xaingq?detailindex=' + detailindex,
    })
  }

})