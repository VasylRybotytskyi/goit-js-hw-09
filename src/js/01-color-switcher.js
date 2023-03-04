//Get refs
const refs ={
    body: document.body,
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}
//Set initial value
const INTERVAL_DELAY = 1000;
let intervalId = null;

//Set event listener click on Btn
refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

refs.stopBtn.disabled = true;
//Get random hex color
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
//Start Btn
function onStartBtn() {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, INTERVAL_DELAY);

    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    
}
//Stop Btn
function onStopBtn() {
    clearInterval(intervalId);
    
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}




