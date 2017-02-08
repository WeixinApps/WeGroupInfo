// const nav = require('nav.js');
import nav from 'nav';
class Index{
    constructor(){
        this.app = getApp();
        this.data = {nav,current:"index"};
        this.bindMethods();
    }
    bindMethods(){
       this.bindNavTap = this.bindNavTap.bind(this);
    }
    bindViewTap(){

    }
    onLoad(options){
        console.log(options);
        console.log(options.query);
        console.log(this)
        this.setData({
          current: "a"
        });
    }
    bindNavTap(e){
        console.log(e.target);
        console.log(this);
        this.setCurrent(e.target.id);
    }
    setCurrent(current){
        this.setData({
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