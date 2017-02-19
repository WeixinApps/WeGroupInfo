class Index{
    constructor(){
        this.app = getApp();
        this.data = {
            imgUrls: [
                'http://images.apple.com/cn/home/images/promos/accessories_small.jpg',
                'http://images.apple.com/cn/home/images/promos/ipad_pro_small.jpg',
                'http://images.apple.com/cn/home/images/promos/iphone_upgrade_small.jpg'
            ],
            indicatorDots: false,
            autoplay: false,
            interval: 5000,
            duration: 1000
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