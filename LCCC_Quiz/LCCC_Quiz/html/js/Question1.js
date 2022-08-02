//import { countdown } from "js/main.js";

/* Question One Code */
function IntroDialogueOne(){
  

  RobotUtils.onService(function(ALAnimatedSpeech){
     ALAnimatedSpeech.say("What year was LCCC founded in?")
     
   }) 
   countdown()
   if (secs == 0  ){
    console.log('this shit hit but on the console')
    document.querySelector('#answercheck').innerHTML = 'This shit hit'
   }
   setTimeout(QuestionOneCorrect, 10000);
}
 function QuestionCheck(answerpass){
  if(answerpass == '1963' ){
      checkmarkShow()
      QuestionOneCorrect()
      secs = 0
  }
  else{
    
      xShow()
  }
   console.log(answerpass) 
 } 
function QuestionOneCorrect(){
 RobotUtils.onService(function(ALAnimatedSpeech){
     ALAnimatedSpeech.say("The answer is 1963. Next question")

    setTimeout(QuestionTwoWarp,5000)
    
   })
} 

function QuestionTwoWarp(){
 window.location.assign("2.html")
} 
/*end */