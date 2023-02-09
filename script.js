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
	diegoBtn.disabled = true; 
})

aaronBtn.addEventListener('click', function(){
 aaronBtn.style. backgroundColor = "rgb(144, 196, 136)";
 startBtn.style.display = "block"
 startBtn.style.backgroundColor = "rgba(92, 164, 89, 255) "
	present.push(" Aaron")
	aaronBtn.disabled = true; 
})

micaelBtn.addEventListener('click', function(){
 micaelBtn.style. backgroundColor = "rgb(144, 196, 136)";
 startBtn.style.display = "block"
 startBtn.style.backgroundColor = "rgba(92, 164, 89, 255) "
	present.push(" Micael")
	console.log(present)
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

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
				downloadLink.click();
			}

			function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));        
    }

    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}

function reset () {
	stop();
	seconds = 0;
	time_el.innerText = '00:00:00';
	timerZone.style.display = 'none'
	document.getElementsByTagName("footer")[0].textContent = ''
	document.getElementById("checkmark").style.display = 'block'
	setInterval(() => {
		window.location.reload();
	}, 2000);
}