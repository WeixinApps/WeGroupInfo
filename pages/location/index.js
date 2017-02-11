const page = {
  data: {
    text: "This is page data."
  },
  onLoad(options){
    // Do some initialize when page load.
    debugger
    console.log(this);
  }
};
Page(page);