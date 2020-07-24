const app = getApp()
Page({
  motto: 'Hello World',
  list: {},

  onLoad: function  () {
    var that =this 
   wx.request({
     url:"https://image.baidu.com/user/logininfo?src=pc&page=searchresult&time=1595389750077",
     headers: {'Content-Type': 'application/json'},      
     success: function (res)  {
      that.setData({list:JSON.stringify(res)})
      console.log(res.data)
    },
    })
  }
})