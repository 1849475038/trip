// pages/dindan/dindan.js
var app = getApp(); /*获取全局数据：所有商铺的信息*/
const db = wx.cloud.database()
const xcdd_col = db.collection('xcdd')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    show: false,
    number: 1,
    hidden:true,
    fk: true
  },
  /**
   * 日历
   */
  onDisplay() {
    this.setData({
      show: true
    });
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  tanchu:function(){
this.setData({
  fk:true
})
  },
  denglu() {
    wx.switchTab({
      url: '../my/my'
    })
  },
  fukuan: function () {
    var myDate = new Date();
    var that = this
   
      xcdd_col.add({
        data: {
          title: this.data.shop.name,
          price: this.data.shop.price,
          date: this.data.date,
          num: this.data.number,
          state: '已付款',
          date1: myDate.toLocaleDateString()
        },
        success: function (res) {
          // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          wx.showToast({
            title: '购买成功',
            success: () => {
              wx.redirectTo({
                url: '../list/list'
              })
            }
          })
          console.log(res)
        }
      })
      
    
    
    
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
// 加
  add: function() {
    this.data.number++
      this.setData({
        number: this.data.number //更新点击之后的数据
      })
    console.log(this.data.number)
  },
// 减
 reduce: function () {
  var number=this.data.number;
  if(number>1){
    this.data.number--
    this.setData({
      number: this.data.number //更新点击之后的数据
    })
    console.log(this.data.number)
  }else{
    wx.showModal({
      title: '提示',
      content: '至少购买1份',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
  },
  showPopup1:function(){
      this.setData({ hidden: false });
  },
  onClose1: function () {
    this.setData({ hidden: true });
  },
pay:function(){
  if (this.data.date == '') {
    wx.showToast({
      title: '请选择使用日期',
      icon:'none'
    })
  }else{
this.setData({
  fk:false
})
  }
},
  onLoad: function (e,options) {
    var id = e.id; /* 获取所点击的商铺Id,用来判断用户所点击的哪个商铺*/
    if (app.globalData.Info == '') {
      this.setData({
        open: false
      })
    } else {
      this.setData({
        open: true
      })
    for (var i = 0; i < app.globalData.shops.length; i++) { /*for循环遍历，查找id与首页传过来的id相等的店铺*/
      if (id == app.globalData.shops[i].id) {
        this.setData({
          shop: app.globalData.shops[i] /*如果相等就把当前这个店铺的信息传给shop*/
        })
      }
    }
    console.log(this.data)
    }
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