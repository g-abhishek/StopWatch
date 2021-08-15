var flag = false;
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;


function start(){
  flag = true;
  stopWatch()

}

function stop(){
  flag = false;  
}

function reset(){
  flag = false;

  document.getElementById("count").innerHTML = "00"
  document.getElementById("sec").innerHTML = "00"
  document.getElementById("min").innerHTML = "00"
  document.getElementById("hr").innerHTML = "00" 
}

function stopWatch(){
  if(flag){
    count = count + 1;

    if(count === 100){
      sec = sec + 1
      count = 0
    }
    if(sec === 60){
      min = min + 1
      sec = 0
    }
    if(min === 60){
      hr = hr + 1
      min = 0
      sec = 0
    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if(count < 10){
      countString = "0"+count;
    }
    if(sec < 10){
      secString = "0"+sec;
    }
    if(min < 10){
      minString = "0"+min;
    }
    if(hr < 10){
      hrString = "0"+hr;
    }

    document.getElementById("count").innerHTML = countString
    document.getElementById("sec").innerHTML = secString
    document.getElementById("min").innerHTML = minString
    document.getElementById("hr").innerHTML = hrString

    // it calls the function after every 10 milliseconds
    setTimeout(() => {
      stopWatch()
    }, 10) // for count // 100 part of 1000milisecond // 1 sec = 1000milisecond
  }
  
  
}