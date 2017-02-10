const page = {
  data: {
    text: "This is page data."
  },
  onLoad(options){
    // Do some initialize when page load.
    console.log(this);
  }
};
Page(page);