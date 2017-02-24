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
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      wx.login({
        success: (res)=>{
          console.log(res);
          wx.getUserInfo({
            success: (res)=> {
              console.log(res);
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
  },
  chooseLocation(cb){
    wx.chooseLocation({
      type: 'wgs84',
      success: function (res){
        typeof cb == "function" && cb(res)
      }
    });
  }
}
App(app);