/*Question Five Javascript */
function IntroDialogueFive(){
    countdown()

    RobotUtils.onService(function(ALAnimatedSpeech){
       ALAnimatedSpeech.say("How are bachelor's degrees offered at LCCC?")
       
     }) 

     setTimeout(FiveCorrect, 10000);
    
    /*  setTimeout(5000)
       window.location.assign("1.html")  */
}
function QuestionCheck(answerpass){ 

   if(answerpass == 'They offer it themselves and partner with other universities'){
       
       checkmarkShow()
       FiveCorrect()
       secs = 0
   }
   else{
   
       xShow()
   }
   console.log(answerpass)
  } 
 function FiveCorrect(){
   RobotUtils.onService(function(ALAnimatedSpeech){
       ALAnimatedSpeech.say("The answer is  \\pau=100\\They offer it \\pau=200\\ and partner with other universities\\pau=200\\ Next question")
/*         answercheck.textContent = '1963 Next Question in Five Seconds' */
      setTimeout(QuestionSixWarp,10000)
      
     })
} 

function QuestionSixWarp(){
   window.location.assign("6.html")
} 
/*End */