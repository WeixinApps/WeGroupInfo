// const nav = require('nav.js');
import nav from 'nav';
import touchUtility from '../../utils/touchUtility';

let _this;
class Index{
    constructor(){
        this.currentId = 0;
        this.app = getApp();
        this.data = {nav,current:nav.items[this.currentId].url,content:{items:[]}};
        this.bindMethods();
    }
    bindMethods(){
       //this.setData = Page.prototype.setData.bind(this);
       this.bindTouchStart = touchUtility.bindTouchStart.bind(this);
       this.bindTouchMove = touchUtility.bindTouchMove.bind(this);
       this.bindTouchEnd = touchUtility.bindTouchEnd.bind(this);
       this.bindNavTap = this.bindNavTap.bind(this);
       // this.onLoad = this.onLoad.bind(this);
       this.onShareAppMessage = this.onShareAppMessage.bind(this);
    }
    slideLeft(){
        if(this.currentId<nav.items.length){
            this.currentId++;
            let index = nav.items[this.currentId].url;
            this.slidePage(index);
        }
    }
    slideRight(){
        if(this.currentId>0){
            this.currentId--;
            let index = nav.items[this.currentId].url;
            this.slidePage(index);
        }
    }
    onLoad(options){
        //if not bind in bindMethods, 'this' point to the e instance
        //cannot call any function in Index class
        this.options = options;
        _this = this;
    }
    bindNavTap(e){
        this.slidePage(e.target.id);
    }
    slidePage(index){
        this.setCurrent(index);
        this.setPageContent(index);
        this.currentId = nav.items.findIndex(item=>item.url==index);
    }
    getPageContent(page){
        return {items:[
            {
                image:"http://youyouplay.com/public/images/banner-3.jpg",
                title: page+"去日本旅行最值得买的100件化妆品",
                summary:"最美生活从旅行开始，现在出发！",
                info:"跟着企鹅去韩国",
                time:"3小时前",
                id:23
            }, {
                image:"http://youyouplay.com/public/images/banner-3.jpg",
                title:"去日本旅行最值得买的100件化妆品",
                summary:"最美生活从旅行开始，现在出发！",
                info:"跟着企鹅去韩国",
                time:"5小时前",
                id:21
            }, {
                image:"http://youyouplay.com/public/images/banner-3.jpg",
                title:"去日本旅行最值得买的100件化妆品",
                summary:"最美生活从旅行开始，现在出发！",
                info:"跟着企鹅去韩国",
                time:"9小时前",
                id:18
            }
        ]}; 
    }
    setPageContent(current){
        // let items = this.getPageContent(current);
        // _this.setData({
        //     content:items
        // });
        this.app.getData("http://localhost:3000/api/news/items/"+current,this.setPageData);
    }
    setPageData(data){
        _this.setData({
            content:{items:data}
        });
    }
    setCurrent(current){
        _this.setData({
          current: current
        });
    }
    onShareAppMessage(){
        return {
        title: '广而告之 有你所需',
        path: '/page/index?id=123'
        }
    }
}
Page(new Index());
