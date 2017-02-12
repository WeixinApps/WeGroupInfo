// const nav = require('nav.js');
import nav from 'nav';

let _this;
class Index{
    constructor(){
        this.app = getApp();
        this.data = {nav,current:"index",content:{items:[]}};
        this.bindMethods();
    }
    bindMethods(){
       //this.setData = Page.prototype.setData.bind(this);
       this.bindNavTap = this.bindNavTap.bind(this);
       // this.onLoad = this.onLoad.bind(this);
       this.onShareAppMessage = this.onShareAppMessage.bind(this);
    }
    bindViewTap(){

    }
    onLoad(options){
        //if not bind in bindMethods, 'this' point to the e instance
        //cannot call any function in Index class
        this.options = options;
        _this = this;
    }
    bindNavTap(e){
        this.setCurrent(e.target.id);
        this.setPageContent(e.target.id);
    }
    getPageContent(page){
        return {items:[
            {
                image:"http://youyouplay.com/public/images/banner-3.jpg",
                title: page+"去日本旅行最值得买的100件化妆品",
                summary:"最美生活从旅行开始，现在出发！",
                info:"跟着企鹅去韩国",
                time:"3小时前"
            }, {
                image:"http://youyouplay.com/public/images/banner-3.jpg",
                title:"去日本旅行最值得买的100件化妆品",
                summary:"最美生活从旅行开始，现在出发！",
                info:"跟着企鹅去韩国",
                time:"5小时前"
            }, {
                image:"http://youyouplay.com/public/images/banner-3.jpg",
                title:"去日本旅行最值得买的100件化妆品",
                summary:"最美生活从旅行开始，现在出发！",
                info:"跟着企鹅去韩国",
                time:"9小时前"
            }
        ]}; 
    }
    setPageContent(current){
        let items = this.getPageContent(current);
        _this.setData({
            content:items
        })
    }
    setCurrent(current){
        _this.setData({
          current: current
        });
    }
    onShareAppMessage(){
        return {
        title: '广告板 广而告之 有你所需',
        path: '/page/index?id=123'
        }
    }
}
Page(new Index());
