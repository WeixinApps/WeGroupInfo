const app = {
  globalData:{
    userInfo:null
  },
  onLaunch() {
    let logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  invoke(cb,res){
    typeof cb == "function" && cb(res)
  },
  getUserInfo(cb){
    if(this.globalData.userInfo){
      this.invoke(cb,this.globalData.userInfo);
    }else{
      wx.login({
        success: (res)=>{
          console.log(res);
          wx.getUserInfo({
            success: (res)=> {
              console.log(res);
              this.globalData.userInfo = res.userInfo;
              this.invoke(cb,this.globalData.userInfo);
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
        this.invoke(cb,res);
      }
    });
  },
  chooseLocation(cb){
    wx.chooseLocation({
      type: 'wgs84',
      success: function (res){
        this.invoke(cb,res);
      }
    });
  },
  getData(url,cb){
      wx.request({
        url:url,
        success:(res)=>{
          this.invoke(cb,res.data);
        }
      })
  }
}
App(app);