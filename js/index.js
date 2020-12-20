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


// Title animation

anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });




