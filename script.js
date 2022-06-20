setInterval(function(){
     const display = document.getElementById("display");
    let time = new Date();
    let hour =time.getHours();
    let minutes =time.getMinutes();
    let seconds = time.getSeconds();
    
    let Day="AM";
    if(hour>12){
        Day="PM";
        hour=hour -12;

    }
    if(hour == 0){
        Day = 12;
    }
    if(minutes < 10){
        minutes ="0" + minutes;
    }
    if(seconds < 10){
        seconds ="0" + seconds;
    }
    if(hour < 10){
        hour ="0" + hour;
    }

   
     display.innerHTML=`${hour}: ${minutes}: ${seconds}: ${Day}`
})

