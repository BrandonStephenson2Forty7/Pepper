/* Question7Start */
function IntroDialogueSeven(){
  
    countdown()
  
       RobotUtils.onService(function(ALAnimatedSpeech){
          ALAnimatedSpeech.say("True or False \\pau=200\\ All the operating restaurants on LCCC are located in the College Center Building")
        }) 
  
       setTimeout(SevenCorrect, 10000);
      
      /*  setTimeout(5000)
         window.location.assign("1.html")  */
  }
  
  function QuestionCheck(answerpass){ 

   if(answerpass == 'False'){
       
       checkmarkShow()
      SevenCorrect()
       secs = 0
   }
   else{
   
       xShow()
   }
   console.log(answerpass)
  } 
  
   function SevenCorrect(){
     RobotUtils.onService(function(ALAnimatedSpeech){
         ALAnimatedSpeech.say("The answer is  \\pau=100\\ False \\pau=200\\ Next question")
  /*         answercheck.textContent = '1963 Next Question in Five Seconds' */
        setTimeout(QuestionEightWarp,5000)
        
       })
  } 
  
  function QuestionEightWarp(){
     window.location.assign("8.html")
  } 
  /*End*/ 