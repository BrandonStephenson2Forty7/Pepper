import {onSnake, expandSnake } from './snake.js'
import{randomGridPosition} from './grid.js'

let food = getRandomFoodPosition()

// Declaring the score the score
var Score = 0

/* function drawScore(){
    document.font = "16px Arial"
    document
} */
// let scorecounter = document.getElementById("score").innerHTML
/* let scorecounter = document.querySelector('.score')
let dascore = 0
scorecounter = dascore */

const EXPANSION_RATE = 1

export function update(){
   if (onSnake(food)){
       expandSnake(EXPANSION_RATE)
       food = getRandomFoodPosition()
      /*   dascore++
        updateScore() */

        //Increment that counts up one everytime the food is eaten (NOT TOUCHED YOU FILTHY FUCKS!)
        Score ++


        console.log("Food eaten. Get devoured bitch")
   
        //Get the id from the document to use
var lblScore = document.getElementById('lblScore')
lblScore.innerText =   Score
   }
  }


  export function draw(gameBoard){
    
/*   const foodElement = document.createElement('div') */
  const foodElement = document.createElement('img')
  foodElement.src='img/foodmouse.png'
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
      
  }

  function getRandomFoodPosition() {
      let newFoodPosition
      while(newFoodPosition == null || onSnake(newFoodPosition)){
          newFoodPosition = randomGridPosition()
      }
      return newFoodPosition
  }
 /*  function updateScore(){
      scorecounter.innerHTML = dascore
  } */