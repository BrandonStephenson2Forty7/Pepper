 /* Question8Start */
 function IntroDialogueEight(){
    console.log('Eight Function Start')
    countdown()
  
  
    RobotUtils.onService(function(ALAnimatedSpeech){
       ALAnimatedSpeech.say("True or False? \\pau=200\\ A semester at LCCC \\pau=100\\ lasts up to sixteen weeks")
     }) 

    setTimeout(EightCorrect, 10000)
   
   /*  setTimeout(5000)
      window.location.assign("1.html")  */
}
function QuestionCheck(answerpass){ 

    if(answerpass == 'True'){
        
        checkmarkShow()
       EightCorrect()
        secs = 0
    }
    else{
    
        xShow()
    }
}

function EightCorrect(){
    console.log('Eight Correct Start')
  RobotUtils.onService(function(ALAnimatedSpeech){
      ALAnimatedSpeech.say("The answer is  \\pau=100\\ True \\pau=200\\ Next question")
/*         answercheck.textContent = '1963 Next Question in Five Seconds' */
     
     
    })
    setTimeout(QuestionNineWarp,5000)
} 

function QuestionNineWarp(){
    console.log("Warping to Page nine")
    window.location.assign("9.html")
}
//End