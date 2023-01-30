const robinBtn = document.getElementById("robin-btn")
const diegoBtn = document.getElementById("diego-btn")
const aaronBtn = document.getElementById("aaron-btn")
const micaelBtn = document.getElementById("micael-btn")
const startBtn = document.getElementById("next-btn")
const timerZone = document.getElementById("timerZone")

robinBtn.addEventListener('click', function(){
 robinBtn.style. backgroundColor = "rgb(144, 196, 136)";
 startBtn.style.display = "block"
 startBtn.style.backgroundColor = "rgba(92, 164, 89, 255) "
})

diegoBtn.addEventListener('click', function(){
 diegoBtn.style. backgroundColor = "rgb(144, 196, 136)";
 startBtn.style.display = "block"
 startBtn.style.backgroundColor = "rgba(92, 164, 89, 255) "
})

aaronBtn.addEventListener('click', function(){
 aaronBtn.style. backgroundColor = "rgb(144, 196, 136)";
 startBtn.style.display = "block"
 startBtn.style.backgroundColor = "rgba(92, 164, 89, 255) "
})

micaelBtn.addEventListener('click', function(){
 micaelBtn.style. backgroundColor = "rgb(144, 196, 136)";
 startBtn.style.display = "block"
 startBtn.style.backgroundColor = "rgba(92, 164, 89, 255) "
})

startBtn.addEventListener("click", function(){
  robinBtn.style.display = 'none'
  diegoBtn.style.display = 'none'
  aaronBtn.style.display = 'none'
  micaelBtn.style.display = 'none'
  startBtn.style.display = 'none'
  timerZone.style.display = 'block'
})

//timer section

const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const save_btn = document.getElementById("save");

let seconds = 0;
let interval = null;

// Event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener("click", stop);
save_btn.addEventListener("click", reset);

// Update the timer
function timer () {
	seconds++;

	// Format our time
	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - (hrs * 3600)) / 60);
	let secs = seconds % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
	if (interval) {
		return
	}

	interval = setInterval(timer, 1000);
}

function stop () {
	clearInterval(interval);
	interval = null;
}

function reset () {
	stop();
	seconds = 0;
	time_el.innerText = '00:00:00';
}