//Question 9 Start
function IntroDialogueNine(){
    countdown()
  
  
    RobotUtils.onService(function(ALAnimatedSpeech){
       ALAnimatedSpeech.say("True or False? \\pau=200\\  Another LCCC campus \\pau=100\\ is the Wellington Center ")
     }) 

    setTimeout(NineCorrect, 10000)
}
function QuestionCheck(answerpass){ 

    if(answerpass == 'True'){
        
        checkmarkShow()
       NineCorrect()
        secs = 0
    }
    else{
    
        xShow()
    }
}
function NineCorrect(){
    RobotUtils.onService(function(ALAnimatedSpeech){
        ALAnimatedSpeech.say("The answer is  \\pau=100\\ True \\pau=200\\ Next question")
  /*         answercheck.textContent = '1963 Next Question in Five Seconds' */
       
       
      })
      setTimeout(QuestionTenWarp,5000)
  } 
function QuestionTenWarp(){
    window.location.assign("10.html")
}
//End