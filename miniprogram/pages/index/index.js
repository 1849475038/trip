//index.js
const app = getApp()

Page({
  data: {
    tanchu:false,
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    active: 1,
    header: ["特价爆款", "北海", "河池", "桂林", "北海", "河池", "桂林", "北海", "河池", "桂林"],
    logo1: [{
      img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/gongrue.png?sign=44f2d19049cf1e5645a800a0702c7bae&t=1609981432',
        font: '攻略·景点'
      },
      {
        img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/menpiao.png?sign=c1ecdfd7b7bfa0d47fb2bb05735b825c&t=1609981528',
        font: '门票·玩乐'
      },
      {
        img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/meishi.png?sign=153a4e519208e464734c61b320be4acd&t=1609981740',
        font: '美食'
      },
      {
        img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/dangdi.png?sign=6f27ec6b5fb9ac5ed73449304fb6bfa5&t=1609981903',
        font: '当地向导'
      },
      {
        img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/gouwu.png?sign=98eadee5cc181730026af05408ed2500&t=1609982093',
        font: '全球购'
      }
    ],
    logo3: [{
      img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/lvyouhome/waibi.png?sign=a7e4425f89ec8e16ce9b07ad7517ac8d&t=1609989054',
        font: '外币兑换'
      },
      {
        img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/lvyouhome/jinrou.png?sign=aa79a2ec269d7f71bc7405e877cc11bd&t=1609989197',
        font: '理财'
      },
      {
        img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/lvyouhome/jieqian.png?sign=afbb1f7713e7fb9d5aacc52f813dc598&t=1609989222',
        font: '申卡·借钱'
      },
      {
        img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/lvyouhome/baoxian.png?sign=729acb7e2517ae9a0ae0a7c4bbbcf620&t=1609989558',
        font: '保险'
      },
      {
        img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/lvyouhome/lipinka.png?sign=d916db5d3d1aa40fbf7ed0db6f0f34f0&t=1609989677',
        font: '礼品卡'
      },
    ],

    logo4: [{
      img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/lvyouhome/qianzheng.png?sign=03197645194f8a420a71ad6051c22be8&t=1609989846',
      font: '签证'
    },
    {
      img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/lvyouhome/wifi.png?sign=3aa1316f63c16f05c3f6373dae4c5d05&t=1609989869',
      font: 'WiFi电话卡'
    },
    {
      img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/lvyouhome/huiyuan.png?sign=c8616c90ba6ac5c11ec483265d330e98&t=1609989890',
      font: '会员·签到'
    },
    {
      img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/lvyouhome/jiameng.png?sign=5cf684c390c7048e3dd99aaabe2ca81d&t=1609989909',
      font: '加盟合作'
    },
    {
      img: 'https://796f-younger-4ercu-1302444409.tcb.qcloud.la/lvyou/lvyouhome/gengduo.png?sign=fd82cc47d5fffef618f62135c5673af7&t=1609989946',
      font: '更多'
    },
    ],
    tab1:[{
      id:1,
      img:'https://796e-ynl-6ue2i-1302444261.tcb.qcloud.la/xiecheng/index/sanjiaozhou1.jpg?sign=57937097af4b155bddaed01faa0b8605&t=1609925150',
      font1:'三角洲岛',
      font2:'奇石遍布的戏水胜地',
      font3:'惠东景点人气榜第2名',
      font4:'601条评论'
    }, {
      id:2,
        img: 'https://796e-ynl-6ue2i-1302444261.tcb.qcloud.la/xiecheng/index/dianchi1.jpg?sign=e4b4d0cb5b4bf8399fb41419ab2824d1&t=1609925189',
        font1: '滇池',
        font2: '烟波浩渺的淡水湖',
        font3: '昆明景点人气榜第3名',
        font4: '4906条评论'
      }
    ],
    tab2: [{
      id:3,
      img: 'https://796e-ynl-6ue2i-1302444261.tcb.qcloud.la/xiecheng/index/damingshan1.jpg?sign=d3935901b072949e88af75f779968e7e&t=1609925219',
      font1: '大明山景区',
      font2: '探万米岩洞走悬空栈道',
      font3: '大明山景点人气榜第1名',
      font4: '3569条评论',
      font5:'25'
    }, {
      id:4,
        img: 'https://796e-ynl-6ue2i-1302444261.tcb.qcloud.la/xiecheng/index/wailingdao1.jpg?sign=6770c6ce84acb0e1f5f42ae4bfdbfc80&t=1609925098',
      font1: '外伶仃岛',
      font2: '游山玩水吃海鲜并眺望香港',
      font3: '珠海景点人气榜第6名',
      font4: '632条评论',
        font5: '258'
    }
    ],
    tab3: [{
id:2,
      img: 'https://796e-ynl-6ue2i-1302444261.tcb.qcloud.la/xiecheng/index/dianchi1.jpg?sign=e4b4d0cb5b4bf8399fb41419ab2824d1&t=1609925189',
      font1: '滇池',
      font2: '烟波浩渺的淡水湖',
      font3: '昆明景点人气榜第3名',
      font4: '4906条评论'
    }, {
      id:1,
        img: 'https://796e-ynl-6ue2i-1302444261.tcb.qcloud.la/xiecheng/index/sanjiaozhou1.jpg?sign=57937097af4b155bddaed01faa0b8605&t=1609925150',
        font1: '三角洲岛',
        font2: '奇石遍布的戏水胜地',
        font3: '惠东景点人气榜第2名',
        font4: '601条评论'
    }
    ],
    tab4: [{
      id:4,
      img: 'https://796e-ynl-6ue2i-1302444261.tcb.qcloud.la/xiecheng/index/wailingdao1.jpg?sign=6770c6ce84acb0e1f5f42ae4bfdbfc80&t=1609925098',
      font1: '外伶仃岛',
      font2: '游山玩水吃海鲜并眺望香港',
      font3: '珠海景点人气榜第6名',
      font4: '632条评论',
      font5: '258'
    }, {
      id:3,
        img: 'https://796e-ynl-6ue2i-1302444261.tcb.qcloud.la/xiecheng/index/damingshan1.jpg?sign=d3935901b072949e88af75f779968e7e&t=1609925219',
        font1: '大明山景区',
        font2: '探万米岩洞走悬空栈道',
        font3: '大明山景点人气榜第1名',
        font4: '3569条评论',
        font5: '25'
    }
    ]

  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  click:function(){
    this.setData({
      tanchu: false,
    });
 },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function() {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]

        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath

            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  }

})