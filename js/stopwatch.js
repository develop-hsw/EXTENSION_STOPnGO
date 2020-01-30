let startTime = 0;
let stopTime = 0;
let timeStart = 0;

let min;
let sec;
let millisec;

let stopCount = 0;

let startBtn = document.getElementById("startButton");
let stopBtn = document.getElementById("pauseButton");
let clearBtn = document.getElementById("clearButton");

let startState = startBtn.addEventListener("click", function () {
    if (startState !== 1) {
        if (!startTime) {
            startTime = Date.now();
        } else {
            startTime += (Date.now() - stopTime);
        }

        timeStart = setInterval(function () {
            let currentTime = new Date(Date.now() - startTime);

            min = addZero(currentTime.getMinutes());
            sec = addZero(currentTime.getSeconds());
            millisec = addZero(Math.floor(currentTime.getMilliseconds() / 10));

            document.getElementById("stop_min").innerText = min;
            document.getElementById("stop_sec").innerText = sec;
            document.getElementById("stop_millisec").innerText = millisec;
        }, 1);
        startState = 1;
    }
    stopState = 0;
    stopBtn.innerText = "일시정지";
    clearState = 0;
})

let stopState = stopBtn.addEventListener("click", function () {
    if (stopState !== 1) {
        if (timeStart) {
            clearInterval(timeStart);
            stopTime = Date.now();
        }
        startBtn.innerText = "재시작";
        stopState = 1;
    }
    startState = 0;
    clearState = 1;
})


let clearState = clearBtn.addEventListener("click", function () {
    if (clearState === 1) {

        document.getElementById("stop_min").innerText = "00";
        document.getElementById("stop_sec").innerText = "00";
        document.getElementById("stop_millisec").innerText = "00";

        startBtn.innerText = "시작";
        stopBtn.innerText = "일시정지";

        startTime = 0;
        stopTime = 0;
        min = 0;
        sec = 0;
        millisec = 0;
    }
})

function addZero(input) {
    return (input < 10 ? "0" + input : input);
}