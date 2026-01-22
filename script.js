const backgrounds = [
    "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    "linear-gradient(135deg, #1d4350, #a43931)",
    "linear-gradient(135deg, #4568dc, #b06ab3)",
    "linear-gradient(135deg, #43cea2, #185a9d)",
    "linear-gradient(135deg, #ff512f, #dd2476)",
    "linear-gradient(135deg, #141e30, #243b55)"
];

let bgIndex = 0;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock").innerText =
        `${hours}:${minutes}:${seconds}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").innerText =
        now.toLocaleDateString(undefined, options);
}

function changeBackground() {
    document.body.style.background = backgrounds[bgIndex];
    bgIndex = (bgIndex + 1) % backgrounds.length;
}

// Initial load
changeBackground();
updateClock();

// Update clock every second
setInterval(updateClock, 1000);

// Change background every 1 minute
setInterval(changeBackground, 60000);
