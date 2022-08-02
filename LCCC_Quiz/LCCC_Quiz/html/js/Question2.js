/*Question Two Javascript */
function IntroDialogueTwo(){
  
    countdown()
    RobotUtils.onService(function(ALAnimatedSpeech){
       ALAnimatedSpeech.say("What is LCCCs Mascot?")
       
     }) 

     setTimeout(TwoCorrect, 10000);
    
    /*  setTimeout(5000)
       window.location.assign("1.html")  */
}
 function QuestionCheck(answerpass){
   if(answerpass == 'The Commodores'){
       checkmarkShow()
       TwoCorrect()
       secs = 0
   }
   else{
       xShow()
   }
   console.log(answerpass) 
  } 
 function TwoCorrect(){
   RobotUtils.onService(function(ALAnimatedSpeech){
       ALAnimatedSpeech.say("The answer is the Commodores. Next question")
/*         answercheck.textContent = '1963 Next Question in Five Seconds' */
      setTimeout(QuestionThreeWarp,5000)
      
     })
} 

function QuestionThreeWarp(){
   window.location.assign("3.html")
} 
/*End */