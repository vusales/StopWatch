/**define html elements */
var displayDiv = document.getElementById('display');
var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn =  document.getElementById('reset');
var lapBtn = document.getElementById('lap');


/*Define variables*/
var time = 0 ; 
var interval = undefined ;
var lapcount = 0;

$(window).on("load", function(){


  function ShowTime(t){
    var minutes = Math.floor(t/60);
    var seconds = t-(minutes*60);
    if(minutes<10){
      minutes = "0" + minutes ; 
    } 
    if(seconds<10 ){
      seconds = "0"+ seconds;
    }

    return minutes + ":" + seconds ; 
  }

  $(resetBtn).on("click", function(){
    clearInterval(interval);
    time = 0; 
    lapcount = 0;
    interval = undefined; 
    displayDiv.innerHTML = "00:00";
    document.querySelector('#laps').innerHTML="";    
  });
  
  $(startBtn).on("click", function(){
    clearInterval(interval);
    interval = setInterval(function(){
      time ++ ;
      displayDiv.innerHTML = ShowTime(time);
  
    }, 1000);
  });

  $(stopBtn).on('click', function (){
    clearInterval(interval);
  });


  $(lapBtn).on("click", function(){
    lapcount ++ ; 
    var h4 = document.createElement('h4');
    h4.innerText = "Lap"+ lapcount + ":  " + ShowTime(time);
    document.querySelector('#laps').append(h4);
  });

  

 









});





