/*Question Three Javascript */
function IntroDialogueThree(){
    countdown()

    RobotUtils.onService(function(ALAnimatedSpeech){
       ALAnimatedSpeech.say("What building is not on LC campus")
       
     }) 

     setTimeout(ThreeCorrect, 10000);
    
    /*  setTimeout(5000)
       window.location.assign("1.html")  */
}
function QuestionCheck(answerpass){
    
    

   if(answerpass == 'Mellott Athletic Center'){
       
       checkmarkShow()
       ThreeCorrect()
       secs = 0
   }
   else{
      /*   console.log('GET THE FUCK OUT OF MY HOUSE')
        console.log(answerpass) */
        xShow()
    }
    console.log(answerpass)
}
 function ThreeCorrect(){
   RobotUtils.onService(function(ALAnimatedSpeech){
       ALAnimatedSpeech.say("The answer is the Mellott Atlhetic Center. Next question")
/*         answercheck.textContent = '1963 Next Question in Five Seconds' */
      setTimeout(QuestionFourWarp,5000)
      
     })
} 

function QuestionFourWarp(){
   window.location.assign("4.html")
} 
/*End */