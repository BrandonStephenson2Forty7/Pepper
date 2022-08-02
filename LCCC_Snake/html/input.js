let inputDirection = {x:0,y:0}
let lastInputDirection = {x:0,y:0}

// For arrow keys
 /* window.addEventListener('keydown', e =>{
switch (e.key) {
    case 'ArrowUp' :
        if(lastInputDirection.y !==0) break
        inputDirection = {x:0, y:-1}
        break
        case 'ArrowDown' :
        if(lastInputDirection.y !==0) break
        inputDirection = {x:0, y:1}
        break
        case 'ArrowLeft' :
        if(lastInputDirection.x !==0) break
        inputDirection = {x:-1, y:0}
        break
        case 'ArrowRight' :
            if(lastInputDirection.x !==0) break
        inputDirection = {x:1, y:0}
        break
}

})
// for ASDW keys?
 window.addEventListener('keypress', e =>{
switch(e.key){
    case 'w':
        if(lastInputDirection.y !==0) break
        inputDirection = {x:0, y:-1}
        break 
    case 's' :
        if(lastInputDirection.y !==0) break
        inputDirection = {x:0, y:1}
        break
    case 'a' :
         if(lastInputDirection.x !==0) break
        inputDirection = {x:-1, y:0}
        break
            case 'd' :
            if(lastInputDirection.x !==0) break
            inputDirection = {x:1, y:0}
            break
}

 })  */
/* window.addEventListener('touch') */
/* window.addEventListener('click', function(){
switch(this.buttonid){
    case 'buttonright':
         if(lastInputDirection.x !==0) break 
        inputDirection = {x:1, y:0}
        break 
    break
} 

}) */
// Needs work, shouldn't run into the block behind it using these buttons
//Need a way to have breaks 
 document.getElementById("buttonright").addEventListener("click", function(){
    inputDirection = {x:1, y:0}
    // need to confirm doesn't go into itself when using buttons
})
document.getElementById("buttonleft").addEventListener("click", function(){
    inputDirection = {x:-1, y:0}
    // need to confirm doesn't go into itself when using buttons
})
document.getElementById("buttonup").addEventListener("click", function(){
    inputDirection = {x:0, y:-1}
    // need to confirm doesn't go into itself when using buttons
})
document.getElementById("buttondown").addEventListener("click", function(){
    inputDirection = {x:0, y:1}
    // need to confirm doesn't go into itself when using buttons
})  

export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}

/* First function starts when you touch the screen */
// window.addEventListener("touchstart", startTouch, false);
// window.addEventListener("touchmove", moveTouch, false);

// var initialX = null;
// var initialY = null;
 
// function startTouch(e) {
//   initialX = e.touches[0].clientX;
//   initialY = e.touches[0].clientY;
// }
// window.addEventListener("touchstart")