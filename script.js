const robinBtn = document.getElementById("robin-btn")
const diegoBtn = document.getElementById("diego-btn")
const aaronBtn = document.getElementById("aaron-btn")
const micaelBtn = document.getElementById("micael-btn")
const startBtn = document.getElementById("next-btn")
const timerZone = document.getElementById("timerZone")
let present_members = document.getElementById("present-members")
 
let present = []

robinBtn.addEventListener('click', function(){
 robinBtn.style. backgroundColor = "rgb(144, 196, 136)";
 startBtn.style.display = "block"
 startBtn.style.backgroundColor = "rgba(92, 164, 89, 255)"
	present.push(" Robin")
	robinBtn.disabled = true; 
})

diegoBtn.addEventListener('click', function(){
 diegoBtn.style. backgroundColor = "rgb(144, 196, 136)";
 startBtn.style.display = "block"
 startBtn.style.backgroundColor = "rgba(92, 164, 89, 255) "
	present.push(" Diego")
	disabled = true; 
	diegoBtn.disabled = true; 
})

aaronBtn.addEventListener('click', function(){
 aaronBtn.style. backgroundColor = "rgb(144, 196, 136)";
 startBtn.style.display = "block"
 startBtn.style.backgroundColor = "rgba(92, 164, 89, 255) "
	present.push(" Aaron")
	disabled = true; 
	aaronBtn.disabled = true; 
})

micaelBtn.addEventListener('click', function(){
 micaelBtn.style. backgroundColor = "rgb(144, 196, 136)";
 startBtn.style.display = "block"
 startBtn.style.backgroundColor = "rgba(92, 164, 89, 255) "
	present.push(" Micael")
	console.log(present)
	disabled = true; 
	micaelBtn.disabled = true; 
})

startBtn.addEventListener("click", function(){
  robinBtn.style.display = 'none'
  diegoBtn.style.display = 'none'
  aaronBtn.style.display = 'none'
  micaelBtn.style.display = 'none'
  startBtn.style.display = 'none'
  timerZone.style.display = 'block'
		document.getElementsByTagName("footer")[0].innerHTML = present
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
	timerZone.style.display = 'none'
	document.getElementsByTagName("footer")[0].innerHTML = ''
	document.getElementById("checkmark").style.display = 'block'
	setInterval(() => {
		window.location.reload();
	}, 2000);
}