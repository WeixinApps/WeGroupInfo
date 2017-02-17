const app = {
  globalData:{
    userInfo:null
  },
  onLaunch() {
    let logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo(cb){
    console.log(this.globalData);
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      wx.login({
        success: ()=>{
          wx.getUserInfo({
            success: (res)=> {
              this.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(this.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  getLocation(cb){
    wx.getLocation({
      type: 'wgs84',
      success: function (res){
        typeof cb == "function" && cb(res)
      }
    });
  }
}
App(app);