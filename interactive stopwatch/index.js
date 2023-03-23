
const timer = document.querySelector("#timerDisplay");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");
const errorMsg = document.querySelector("#errorMsg");


let isStoped = true;
let secs = 0;
let mins = 0;
let hrs = 0;
let intervalId = null;

startBtn.addEventListener("click", () => {
    if(isStoped)
    {
        isStoped = false;
        intervalId = setInterval(updateTime, 1000); // update the timer every 1 sec
    }
    else
    {
        errorMsg.textContent = "The stopWatch is already running";
        setTimeout(() => errorMsg.textContent = "", 1200);
    }
} );

stopBtn.addEventListener("click", () => {
    if(isStoped == false)
    {
        isStoped = true;
        clearInterval(intervalId);
    }
    else
    {
        errorMsg.textContent = "The stopWatch has already been paused or hasn't yet started running";
        setTimeout(() => errorMsg.textContent = "", 2000);
    }
} );

resetBtn.addEventListener("click", () => {
    isStoped = true;
    clearInterval(intervalId);
    hrs = 0;
    mins = 0;
    secs = 0;
    timer.textContent = "00:00:00";

} );



function updateTime()
{
    
    secs += 1
    if(secs == 60)
    {
        secs = 0;
        mins += 1;
        if(mins == 60)
        {
            mins = 0;
            hrs += 1;
        }
    }
    
    let secs_to_display = zerosPadding(secs);
    let mins_to_display = zerosPadding(mins);
    let hrs_to_display = zerosPadding(hrs);

    function zerosPadding(timeUnit)
    {
        return timeUnit < 10 ? "0" + timeUnit : timeUnit;
    }

    timer.textContent = `${hrs_to_display}:${mins_to_display}:${secs_to_display}`;

}





