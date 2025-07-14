function timer(){
   let date = new Date();
   let time = date.toLocaleTimeString();
   document.getElementById("clock").innerHTML = time;
   setTimeout(timer , 1000);
   
}
timer();
