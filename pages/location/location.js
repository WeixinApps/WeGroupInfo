const page = {
  app: getApp(),
  data: {
    text: "This is page data.",
    userinfos:{
      location:{
        name:"北京大学"
      }
    }
  },
  selectLocation(){
    this.app.chooseLocation((location)=>{
        console.log(location);
        this.setData({
            userinfos:{location:location}
        })
     });
  },
  onLoad(options){
    this.selectLocation();
  }
};
Page(page);