const timerDisplay = document.querySelector(".timer");
const continueBtn = document.querySelector("#continue");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stopBtn");

let timer = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: "stopped",

    reset: function(){
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
    },

    addSecond: function(){
        if (this.seconds < 59){
            this.seconds++;
            return
        }
        if (this.minutes < 59){
            this.minutes++;
            this.seconds = 0;
            return
        }
        this.hours++;
        this.minutes = 0;
        this.seconds = 0;
    }
}

continueBtn.addEventListener("click", continueTimer);
pauseBtn.addEventListener("click", pauseTimer);

let startTimer;

function continueTimer(){
    if (timer.status === "stopped"){
        timer.status = "continue";
        timer.reset();
        startTimer = setInterval(updateDisplay, 1000);
    }
    if (timer.status === "paused"){
        timer.status = "continue";
        startTimer = setInterval(updateDisplay, 1000);
    }
}

function pauseTimer(){
    if (timer.status === "continue"){
        timer.status = "paused";
        clearInterval(startTimer);
    }
}

function updateDisplay(){
    if (timer.status === "continue"){
        timer.addSecond();
        timerDisplay.textContent = `${timer.hours}:${timer.minutes}:${timer.seconds}`;
    }
}