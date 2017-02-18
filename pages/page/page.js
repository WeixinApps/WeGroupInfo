const content ={
    data:{
        id : 123
    },
    onLoad(options){
        this.setData({id:options.id});
    },
    onShareAppMessage(){
        return {
        title: '购物美文',
        path: 'pages/page/page?id=123'
        }
    }
}
Page(content);