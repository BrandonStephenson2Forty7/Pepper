/*Question Four Javascript */
function IntroDialogueFour(){
    countdown()

    RobotUtils.onService(function(ALAnimatedSpeech){
       ALAnimatedSpeech.say("Where do you go \\pau=100\\ to obtain Student IDs")
       
     }) 

     setTimeout(FourCorrect, 10000);
    
    /*  setTimeout(5000)
       window.location.assign("1.html")  */
}
function QuestionCheck(answerpass){
    
   if(answerpass == 'The Bass Library'){
       
       checkmarkShow()
       FourCorrect()
       secs = 0
   }
   else{
     /*   console.log('GET THE FUCK OUT OF MY HOUSE')
       console.log(answerpass) */
       xShow()
   }
   console.log(answerpass)
  } 
 function FourCorrect(){
   RobotUtils.onService(function(ALAnimatedSpeech){
       ALAnimatedSpeech.say("The answer is the Bass Library.\\pau=200\\ Next question")
/*         answercheck.textContent = '1963 Next Question in Five Seconds' */
      setTimeout(QuestionFiveWarp,5000)
      
     })
} 

function QuestionFiveWarp(){
   window.location.assign("5.html")
} 
/*End */