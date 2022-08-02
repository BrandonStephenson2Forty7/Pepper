import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'

import{update as updateFood, draw as drawFood} from './food.js'

import{outsideGrid} from './grid.js'
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')




function main(currentTime) {
 if(gameOver){
  /*   if(confirm('you lost. Press Ok to restart.')){
        window.location = './maingame.html'
    } */
    
        window.location = './gameoverscreen.html'
    
    return 
}
    
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    // seconds since last render was originally 1
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    // console.log('Render')
    lastRenderTime = currentTime

    update()
    draw()
    
}

window.requestAnimationFrame(main)

function update(){
updateSnake()
updateFood()
checkDeath()
}

function draw(){
gameBoard.innerHTML = ''
drawSnake(gameBoard)
drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}