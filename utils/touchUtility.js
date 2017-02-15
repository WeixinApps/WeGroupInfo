let eventsUtility = {
    touchStartX : 0,
    slideDuration : 500,
    slideDistance : 50,
    slideLeft(){
        console.log("SlideLeft");
    },
    slideRight(){
        console.log("SlideRight");
    }
};
class TouchUtility{
    
    bindTouchStart(e){
        // console.log(this);
        // console.log(e);
        // console.log(eventsUtility);
        eventsUtility.touchStartX = e.touches[0].pageX;
        eventsUtility.touchTimeStamp = e.timeStamp;
        eventsUtility.isSlideLeft = false;
        eventsUtility.isSlideRight = false;
    }
    bindTouchMove(e){
       if((eventsUtility.touchStartX-e.touches[0].pageX)>eventsUtility.slideDistance){
            eventsUtility.isSlideLeft = true;
        }else{
            eventsUtility.isSlideLeft = false; 
        }
        if(e.touches[0].pageX-eventsUtility.touchStartX>eventsUtility.slideDistance && e.timeStamp-eventsUtility.touchTimeStamp<eventsUtility.slideDuration){
            eventsUtility.isSlideRight = true;
        }else{
            eventsUtility.isSlideRight = false; 
        }
    }
    bindTouchEnd(e){
        if(eventsUtility.isSlideLeft) this.slideLeft ? this.slideLeft() : eventsUtility.slideLeft();
        if(eventsUtility.isSlideRight) this.slideRight ? this.slideRight() : eventsUtility.slideRight();        
    }
}
const touchUtility = new TouchUtility();
export default touchUtility;