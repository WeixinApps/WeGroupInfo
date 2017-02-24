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
  onLoad(options){
    this.app.chooseLocation((location)=>{
        console.log(location);
        this.setData({
            userinfos:{location:location}
        })
     })
  }
};
Page(page);