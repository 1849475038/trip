Page({
  data:{
    firstTime:'0',
    jifen:'0',
    flag:true,
    hasList:true
  },
  
  onBindTap:function(){

    var D=(new Date()).getDate().toString();
    if(D != wx.getStorageSync('D')){
      wx.setStorageSync('D', D);
      wx.setStorage({
        key: 'FirstTime',
        data: (parseInt(this.data.firstTime) + 1).toString(),
      })
      var that = this;
      var firstTime = wx.getStorage({
        key: 'FirstTime',
        success: function (res) {
          that.setData({
            firstTime: res.data,
            hasList:false
          }) 
          wx.showToast({
            title: '签到成功！',
            icon: 'success',
            duration: 1200,
            mask: true
          })
        },
      })
      var jifen = wx.getStorage({
        key: 'FirstTime',
        success: function (res) {
        that.setData({
            jifen:res.data*5,
            // hasList:true
          })
     
        },
      })
    }else{
      wx.showToast({
        title: '今日打卡已完成！',
        icon:'none',
        duration:1200,
        mask:true
      })
    }
  },
  onShow:function(options){
    var that = this;
    var firstTime = wx.getStorage({
      key: 'FirstTime',
      success: function (res) {
      that.setData({
          firstTime: res.data,
          hasList:false
        })
   
      },
    })
    var jifen = wx.getStorage({
      key: 'FirstTime',
      success: function (res) {
      that.setData({
          jifen:res.data*5,
         
        })
   
      },
    })
    var D = (new Date()).getDate().toString();
    if (D != wx.getStorageSync('D')){
      this.setData({
        flag:true,
       
      })
    }else{
      this.setData({
        flag:false,
      })
    }
  },
})