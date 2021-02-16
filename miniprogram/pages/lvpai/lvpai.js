// pages/lvpai/lvpai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add: false,
    add1: 4165,
    bdd: false,
    bdd1: 4171,
    cdd: false,
    cdd1: 2093,
  },
  chooseBtn() {
    wx.navigateTo({
      url: '../shuju/shuju',
    })
  },
  txBox() {
    wx.navigateTo({
      url: '../me/me',
    })
  },
  // onClick(event) {
  //   wx.showToast({
  //     title: `点击标签 ${event.detail.name}`,
  //     icon: 'none',
  //   });
  // },
  /**
   * 生命周期函数--监听页面加载
   */

  adda: function () {
    this.setData({
      add: false, //更新data数据
      add1: 4165
    })
  },
  addb: function () {
    this.setData({
      add: true, //更新data数据
      add1: 4166
    })
  },

  bdda: function () {
    this.setData({
      bdd: false, //更新data数据
      bdd1: 4171
    })
  },
  bddb: function () {
    this.setData({
      bdd: true, //更新data数据
      bdd1: 4172
    })
  },

  cdda: function () {
    this.setData({
      cdd: false, //更新data数据
      cdd1: 2093
    })
  },
  cddb: function () {
    this.setData({
      cdd: true, //更新data数据
      cdd1: 2094
    })
  },
  onLoad: function (options) {

  },
  chooseImg() {
    let that = this;
    wx.chooseImage({    //这一段是上传图片
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        wx.showLoading({
          title: '上传中',
        });
        let filePath = res.tempFilePaths[0];
        wx.cloud.uploadFile({     //这一段是上传到云数据中的
          cloudPath: new Date().getTime() + '.png',
          filePath: filePath,    //这个就是图片的存储路径
          success: res => {
            console.log('[上传图片]成功:', res)
            that.setData({
              bigImg: res.fileID,
            });
            let fileID = res.fileID;
            let open_info = that.data.openid_info
            console.log(that.data.bigImg)
            console.log(that.data.openid_info)
            wx.getImageInfo({
              src: that.data.bigImg,
              success: function (res) {
                console.log('happening:', res.path) //这个是转换的临时链接res.path
                that.setData({
                  tempath: res.path
                })
                console.log('tempath', that.data.tempath)
                let tempinfo = that.data.tempath
                db.collection('newdata').add({    //这个就把云数据的图片存储路径上传到数据链表中了
                  data: {
                    imginfo: fileID,
                    respath: tempinfo
                  },
                  success(res) {
                    console.log('get success')
                    console.log(res)
                    console.log(tempinfo)
                  }
                })
              },
              fail: function (res) {
                console.log('failure')
              }
            })

            const db = wx.cloud.database();

          },
          fail: e => {
            console.error('[上传图片]失败：', e)
          },
          complete: () => {
            wx.hideLoading()
          }
        });
      }
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})