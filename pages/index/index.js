class Index{
    constructor(){
        this.app = getApp();
        this.data = {
            
        }
        this.bindMethods();
    }
    bindMethods(){

    }
    bindViewTap(){

    }
    onLoad(){

    }
    onShareAppMessage(){
        return {
        title: '广告板 广而告之 有你所需',
        desc: '微信群通知、问卷、公告等信息助手',
        path: '/page/index?id=123'
        }
    }

}
Page(new Index());