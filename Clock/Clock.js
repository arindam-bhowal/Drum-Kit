const secondHand= document.querySelector('.second-hand');
const minuteHand= document.querySelector('.minute-hand');
const hourHand= document.querySelector('.hour-hand');

function displayTime(){
    let now= new Date();

    // For seconds 

    let sec= now.getSeconds();
    // console.log(sec);
    secDegree= sec*6+90;
    secondHand.style.transform= `rotate(${secDegree}deg)`;
    
    
    // For Hour 
    let minute= now.getMinutes();
    // console.log(minute);
    minuteDegree= minute*6+90;
    minuteHand.style.transform= `rotate(${minuteDegree}deg)`;


    // For Hour 
    let hour=  now.getHours();
    // console.log(hour);
    hourDegree= hour*30+90;
    hourHand.style.transform= `rotate(${hourDegree}deg)`;

}

setInterval(displayTime, 1000);