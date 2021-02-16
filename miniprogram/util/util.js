function getMessage(name,callBack) { 
  console.log(name)
  var messageUrl = "http://apis.juhe.cn/simpleWeather/query?city=";
  var messageKey = "38d639a330e48b3cb0c2dee2b90db125";
  var self = this;

  wx.request({
    url: messageUrl + name + "&key=" + messageKey,
    success: (res)=>{
      callBack(res.data)
    }
  })
}

module.exports={
  getMessage:getMessage
}