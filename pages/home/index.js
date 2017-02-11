// const nav = require('nav.js');
import nav from 'nav';

let _this;
class Index{
    constructor(){
        this.app = getApp();
        this.data = {nav,current:"index"};
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
