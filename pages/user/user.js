const user = {
    app: getApp(),
    data:{
        userinfo:{}
    },
    onLoad(){
        console.log(this.app);
        this.app.getUserInfo((userInfo)=>{
            console.log(userInfo);
            this.setData({
                userInfo:userInfo
            })
        })
    }
};
Page(user);