//export {countdown} 

//if exporting variables are necessary, place export in front
//for importing it may look something like
//import {sayHi, sayBye} from './say.js';
$(document).ready(
    function () {
        FastClick.attach(document.body);
    }
);
//Var makes it a global variable so calling it multiple times isn't required
 var image = document.getElementById('imageanw')

 function checkmarkShow(){
    image.src="images/checkmark.png"
    image.alt="checkmark"
    console.log('checkmark')
}
 function xShow(){
    image.src="images/x.png"
    image.alt="x"
    console.log('x')
} 
/* document.addEventListener('touchstart', this.touchstart);
document.addEventListener('touchmove', this.touchmove);

function touchstart(e) {
    e.preventDefault()
}

function touchmove(e) {
    e.preventDefault()
} */
//Start Timer Stuff
var mins = 1;
  
//calculate the seconds
 var secs = /* mins * */ 10;

//countdown function is evoked when page is loaded
 function countdown() {
    setTimeout('Decrement()', 10);
}
//Now a global variable
var seconds = document.getElementById("seconds");
//Decrement function decrement the value.
 function Decrement() {
    if (document.getElementById) {
       /*  minutes = document.getElementById("minutes"); */
       
       //seconds = document.getElementById("seconds");
        //if less than a minute remaining
        //Display only seconds value.
       /*  if (seconds < 59) {
            seconds.value = secs;
        } */

        //Display both minutes and seconds
        //getminutes and getseconds is used to
        //get minutes and seconds
      /*   else { */
           /*  minutes.value = getminutes(); */
           //makes the element's value equal to the function contain secs 
            seconds.value = getseconds();
        //}
        //when less than a minute remaining
        //colour of the minutes and seconds
        //changes to red
        /* if (mins < 1) {
            minutes.style.color = "red";
            seconds.style.color = "red";
        } */
         if (secs < 2) {
            /* minutes.style.color = "red"; */
            seconds.style.color = "red";
        } 
        //if seconds becomes zero,
        //then page alert time up
      /*   if (mins < 0) {
            alert('time up');/* Will probably be removed since alerts probably aren't supported on Pepe 
            minutes.value = 0;
            seconds.value = 0;
        } */
        if (secs < 0) {
            /*alert('time up'); Will probably be removed since alerts probably aren't supported on Pepe */
           /*  minutes.value = 0; */
            seconds.value = 0;
            // document.querySelector('#answercheck').innerHTML = 'This shit hit'
        }
        //if seconds > 0 then seconds is decremented
        else {
            secs--;
            setTimeout('Decrement()', 1000);
        }
    }
}

/*   function getminutes() {
    //minutes is seconds divided by 60, rounded down
    mins = Math.floor(secs / 60);
    return mins;
}  */

 function getseconds() {
    //take minutes remaining (as seconds) away 
    //from total seconds remaining
    //returns the value of secs declared earlier
    return secs /* - Math.round(mins * 60); */
}
//End Timer Stuff


function exampleFunction() {
    document.getElementById("exampleID").innerText = "Lorain County Community College Quiz"

    setTimeout(showStartButton,8000)
}
function showStartButton(){

}
//This is the last function that compiles before hitting the exit function
function exampleFunction2() {
    document.getElementById("exampleID").innerText = "You reached the end of the quiz! Thanks for playing!";
    RobotUtils.onService(function(ALAnimatedSpeech){
        ALAnimatedSpeech.say("You reached the end of the quiz! \\pau=200\\ Thanks for playing! \\pau=200\\ Exiting Now")
      /*   ALBehaviorManager.stopBehavior("lccc_quiz-8ca62c/behavior_1"); */
      }) 
    setTimeout(exit, 7000)
}
function exampleButton() {
    /* RobotUtils.onServices(function (ALLeds, ALTextToSpeech) {
        ALLeds.randomEyes(2.0);
        ALTextToSpeech.say("Hello world");
    }); */
    window.location.assign("1.html")
}

function exit() {
    RobotUtils.onService(function (ALBehaviorManager) {
        ALBehaviorManager.stopBehavior("lccc_quiz-8ca62c/behavior_1");
    });
};



function returntoIndex(){
    window.location.assign("index.html")
}
function IntroDialogueZero(){
    RobotUtils.onService(function(ALAnimatedSpeech){
        ALAnimatedSpeech.say("I'll ask you a question \\pau=100\\ that relates to Lorain County \\pau=100\\ Community College \\pau=200\\ ")
        
      }) 
    RobotUtils.onService(function(ALAnimatedSpeech){
        ALAnimatedSpeech.say("They will consist of multiple choice \\pau=200\\ and true or false questions. \\pau=250\\ Make sure you pay attention  \\pau=100\\ to the question \\pau=100\\ and choices \\pau=100\\ to help you pick the right answer.")
        
      }) 
    
      
      RobotUtils.onService(function(ALAnimatedSpeech){
        ALAnimatedSpeech.say("Get ready to start in three \\pau=1000\\two \\pau=1000\\one \\pau=1000\\")
        
      }) 
}

 





 



