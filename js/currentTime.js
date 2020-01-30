const clockContainer = document.querySelector(".js-current");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();
    
    clockTitle.innerText = `현재시각
    ${currentHour < 10 ? `0${currentHour}` : currentHour} : ${currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} : ${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();