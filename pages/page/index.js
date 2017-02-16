let content ={
    data:{
        id : 123
    },
    onLoad(options){
        this.setData({id:options.id});
    }
}
Page(content);