/* Question6Start */
function IntroDialogueSix(){
 
    
    RobotUtils.onService(function(ALAnimatedSpeech){
       ALAnimatedSpeech.say("Where is the \\pau=500\\ oh my \\pau=100\\ the name of this place  \\pau=100\\is missing some text \\pau=250\\ let me fix the question")
     }) 

setTimeout(changetext, 7000)

}
function changetext(){
    console.log('function changetext hit')
  
document.querySelector('#rb1butt').value = 'Gauge'
document.querySelector('#rb2butt').value = 'Farm'
document.querySelector('#rb3butt').value = 'Garden Co'
document.querySelector('#rb4butt').value = 'Sage'

RobotUtils.onService(function(ALAnimatedSpeech){
    ALAnimatedSpeech.say("Much better")
  }) 
    setTimeout(IntroDialogueSixCont, 3000)
}
function IntroDialogueSixCont(){
    countdown()
    RobotUtils.onService(function(ALAnimatedSpeech){
        ALAnimatedSpeech.say("What word is \\pau=100\\ supposed to go \\pau=100\\ in the blank spot?")
      }) 

     setTimeout(SixCorrect, 10000);
}
function QuestionCheck(answerpass){ 

  if(answerpass == 'Sage'){
      
      checkmarkShow()
     SixCorrect()
      secs = 0
  }
  else{
  
      xShow()
  }
  console.log(answerpass)
 } 
 function SixCorrect(){
   RobotUtils.onService(function(ALAnimatedSpeech){
       ALAnimatedSpeech.say("The answer is  \\pau=100\\ Sage \\pau=200\\ Next question")
/*         answercheck.textContent = '1963 Next Question in Five Seconds' */
      setTimeout(QuestionSevenWarp,5000)
      
     })
} 

function QuestionSevenWarp(){
   window.location.assign("7.html")
} 


/*End*/ 