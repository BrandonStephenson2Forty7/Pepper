import {getInputDirection} from "./input.js"
// for automatic imports, make sure the file type is at the end!!!
// Snake speed is determined in seconds originally 5
export const SNAKE_SPEED = 5
const snakeBody = [{x:11, y:11}]
let newSegments = 0

export function update(){
    addSegements()

  const inputDirection = getInputDirection()
/* console.log('update snake') */
for (let i = snakeBody.length - 2; i >= 0; i--){
snakeBody[i+1] = {...snakeBody[i]}
    }
// Translation snakeBody[0].y = snakeBody[0].y + 1
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard){
    /* console.log('draw snake') */
    snakeBody.forEach(segment => {
/*  const snakeElement = document.createElement('div')  */
const snakeElement = document.createElement('img')
snakeElement.src='img/snakehead.png'
snakeElement.style.gridRowStart = segment.y
snakeElement.style.gridColumnStart = segment.x
snakeElement.classList.add('snake')
gameBoard.appendChild(snakeElement) 
/* gameBoard.appendChild(snakeElementImg) */
    })
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, {ignoreHead = false} = {} ){
    return snakeBody.some((segment, index) =>{
        if(ignoreHead && index === 0) return false
        return equalPositions(segment,position)
    })
}

export function getSnakeHead(){
return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead:true})
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegements(){
for(let i = 0; i< newSegments; i++){
    snakeBody.push({...snakeBody[snakeBody.length - 1] })
}

newSegments = 0
}

/* document.querySelector('.score')
.innerText = snakeBody */
