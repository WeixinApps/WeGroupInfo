class TouchUtility{
    constructor(handlers){
        this.handlers = handlers || this.defaultEvents();
        this.touchStartX = 0;
        this.slideDuration = 500;
        this.slideDistance = 50;
    }
    defaultEvents(){
        return {
            slideLeft(){
                console.log("SlideLeft");
            },
            slideRight (){
                console.log("SlideRight");
            }
        }
    }
    bindTouchStart(e){
        console.log(this);
        console.log(e);
        this.touchStartX = e.touches[0].pageX;
        this.touchTimeStamp = e.timeStamp;
        this.slideLeft = false;
        this.slideRight = false;
    }
    bindTouchMove(e){
       if((this.touchStartX-e.touches[0].pageX)>this.slideDistance){
            this.slideLeft = true;
        }else{
            this.slideLeft = false; 
        }
        if(e.touches[0].pageX-this.touchStartX>this.slideDistance && e.timeStamp-this.touchTimeStamp<this.slideDuration){
            this.slideRight = true;
        }else{
            this.slideRight = false; 
        }
    }
    bindTouchEnd(e){
        if(this.slideLeft) this.handlers.slideLeft();
        if(this.slideRight) this.handlers.slideRight();        
    }
}
const touchUtility = new TouchUtility();
export default touchUtility;