// const nav = require('nav.js');
import nav from 'nav';
class Index{
    constructor(){
        this.app = getApp();
        this.data = {nav};
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
        path: '/page/index?id=123'
        }
    }
}
Page(new Index());