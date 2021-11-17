
const daysEl    =  document.getElementById('days');
const hoursEl   =  document.getElementById('hours');
const minsEl    =  document.getElementById('mins');
const secondsEl = document.getElementById('seconds'); 

const newYears = '26 dec 2021';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const total=Math.floor(newYearsDate-currentDate)/1000;

   

    const days = Math.floor(total/3600/24);
    const hours = Math.floor(total/3600)%24;
    const mins = Math.floor(total/60) %60;
    const seconds = Math.floor(total)%60;


daysEl.innerHTML =  days;
hoursEl.innerHTML = hours;
minsEl.innerHTML = mins;
secondsEl.innerHTML =  seconds; 
  
}
countdown();
setInterval(countdown,1000);
 