var app = getApp()
const db = wx.cloud.database()
const send_db = db.collection('send')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    imgUrl: '',
    count: 0
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCount()

  },
  // onShow: function(){
  //   let userOpenId = wx.getStorageSync('openId')
  //   if (!userOpenId) {
  //     wx.showToast({
  //       title: '您还未登录,请先登录~',
  //       icon: 'none'
  //     })

  //     setTimeout(() => {
  //       wx.switchTab({
  //         url: '../me/me',
  //       })
  //     }, 0)
  //   } else {
  //     console.log(userOpenId)
  //   }
  // },
  getCount: function () {
    //已输入的字数
    var that = this
    db.collection('funnys').count({
      success: res => {
        that.setData({
          count: Number(res.total) + 1
        })
      }
    })

  },
  textInput: function (e) {
    this.setData({
      text: e.detail.value
    })
  },
  pulish: function () {

    var data = {
      image: new Array(app.globalData.fileID), //将图片储存为数组类型
      content: this.data.text, //用户输入的文字
      comment: [],
      userId: wx.getStorageSync('userId'),
      username: wx.getStorageSync('username'), //用户名
      id: Number(this.data.count) + 1, //是现在数据库的条数+1,微信小程序的不知道怎么设置自增的数字字段
      shareNum: 0,
      commentNum: 0,
      validStatus: 0,
      validTime: 0
    }
    //validStatus: 审核状态, 通过时候 +1, 反对时候-1
    //validTime: 审核次数, 最多5次,如果反对的人大于等于3,则不通过

    console.log(data)

    if (data.content) {
      db.collection('send').add({
        data: data,
        success: res => {
          wx.showToast({
            title: '发布成功',
          })
          setTimeout(() => {
            wx.redirectTo({
              url: '../me/me'
            })
          }, 1000)
        },
        fail: e => {
          wx.showToast({
            title: '发布错误',
          })
          console.log(e)
        }
      })
    } else {
      wx.showToast({
        title: '请填写文字',
        icon: 'none'
      })
    }

  },

  // 上传图片
  //上传的时候，我们可以获得一个fileId，这个id我们必须存起来，在别人查看的时候，image的src使用的就是fileId，然后用户必
  //须得知道上传的是哪张图片呀， 所以我们使用的是本地的图片路径来展示，即imagePath 
  doUpload: function () {
    // 选择图片
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        that.setData({
          imgUrl: filePath
        })
        // 上传图片
        const cloudPath = that.data.count + filePath.match(/\.[^.]+?$/)[0]
        //改写: 数组 多图片
        // const filePath = res.tempFilePaths, cloudPath = [];
        // filePath.forEach((item, i)=>{
        //   cloudPath.push(that.data.count + '_' + i + filePath[i].match(/\.[^.]+?$/)[0])
        // })

        console.log(cloudPath)


        // filePath.forEach((item, i) => {
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', cloudPath, res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath

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
        // })

      },
      fail: e => {
        console.error(e)
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})