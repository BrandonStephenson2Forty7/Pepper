//Question 10 Start
function IntroDialogueTen(){
    countdown()
    RobotUtils.onService(function(ALAnimatedSpeech){
        ALAnimatedSpeech.say("What was the second choice to the first question of this quiz?")
      }) 
    
     setTimeout(TenCorrect, 10000)
    
    }
    function QuestionCheck(answerpass){ 

      if(answerpass == '1969'){
          
          checkmarkShow()
         TenCorrect()
          secs = 0
      }
      else{
      
          xShow()
      }
  }
    function TenCorrect(){
        RobotUtils.onService(function(ALAnimatedSpeech){
        ALAnimatedSpeech.say("The answer is  \\pau=100\\ 1969 \\pau=200\\")
        /*         answercheck.textContent = '1963 Next Question in Five Seconds' */
        })
        setTimeout(EndWarp,5000)
    }
    function EndWarp(){
      window.location.assign("Finish.html")
    } 
    /*End*/ 
    
    