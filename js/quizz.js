// Clock animation

const hoursDiv = document.getElementById('seconds');
const minutesDiv = document.getElementById('minutes');
const secondsDiv = document.getElementById('hours');


function setDate(){
    
    const now = new Date();
    const seconds = now.getSeconds();
    const secDeg = ((seconds/60)* 360 + 90);
    secondsDiv.style.transform = `rotate(${secDeg}deg)`;
    
    
    const mins = now.getMinutes();
    const minDeg = ((mins/60) * 360) + ((seconds/60)*6) + 90;
    minutesDiv.style.transform = `rotate(${minDeg}deg)`;
    
    
    const hour = now.getHours();
    const hourDeg = ((hour/12)*360) + ((mins/60)*30) + 90;
    hoursDiv.style.transform = `rotate(${hourDeg}deg)`;
      
}
setInterval(setDate,1000);
