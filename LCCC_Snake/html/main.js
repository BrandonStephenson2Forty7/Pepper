function exit() {
    RobotUtils.onService(function (ALBehaviorManager) {
        ALBehaviorManager.stopBehavior("lccc_peppersnake-a467c7/behavior_1");
    });
};

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

  window.addEventListener('load', function(){
 
    var touchsurface = document.getElementById('touchsurface'),
        startX,
        startY,
        dist,
        //Threshold equates to 300px across the screen
        threshold = 300, //required min distance traveled to be considered swipe
        //allowedTime is in miliseconds, I believe it needs to be greater than the threshold to see the swipes and can't too fast.
        allowedTime = 500, // maximum time allowed to travel that distance
        elapsedTime,
        startTime
 
    function handleswipe(isrightswipe){
        if (isrightswipe)
            touchsurface.innerHTML = 'Congrats, you\'ve made a <span style="color:red">right swipe!</span>'
        else{
            touchsurface.innerHTML = 'Condition for right swipe not met yet'
        }
    }
   /*  function handleswipe(isupswipe){
        if (isupswipe)
            touchsurface.innerHTML = 'Congrats, you\'ve made a <span style="color:red">up swipe!</span>'
        else{
            touchsurface.innerHTML = 'Condition for up swipe not met yet'
        }
    } */
    touchsurface.addEventListener('touchstart', function(e){
        touchsurface.innerHTML = ''
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
 
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
 
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleswipe(swiperightBol)
        e.preventDefault()
    }, false)
 
}, false) // end window.onload

//DIFFERENT SWIPING CODE!
function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}
  
//USAGE:
/*
var el = document.getElementById('someel')
swipedetect(el, function(swipedir){
    swipedir contains either "none", "left", "right", "top", or "down"
    if (swipedir =='left')
        alert('You just swiped left!')
})
*/