let homeScore = 0;
let guestScore = 0;

let home = document.getElementById("home");
let guest = document.getElementById("guest")

function increment1(team) {
    if (team === "home") {
        homeScore += 1;
        home.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += 1;
        guest.textContent = guestScore;
    }
}

function increment2(team) {
    if (team === "home") {
        homeScore += 2;
        home.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += 2;
        guest.textContent = guestScore;
    }
}

function increment3(team) {
    if (team === "home") {
        homeScore += 3;
        home.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += 3;
        guest.textContent = guestScore;
    }
}

let reset = document.getElementById("newGame");

function newGame() {
    home.textContent = 0;
    guest.textContent = 0;
}


// function start() {
//     home.textContent = 0;
//     guest.textContent = 0;
// }

// let isLeading = document.getElementById("leader");

// function l() {
//     console.log("working");
// }

// isLeading.innerHTML
// // function isleading () {
// //     if(homeScore > guestScore){
// //         console.log("highlight leader");
// //     } else if(guestScore > homeScore){
// //         console.log("highlight guest");
// //     }
// // }

// Stopwatch https://javacodepoint.com/how-to-create-a-stopwatch-in-javascript/
// let stopwatch = document.getElementById("stopwatch");
// let startBtn = document.getElementById("start-btn");
// let timeoutId = null;
// let ms = 0;
// let sec = 0;
// let min = 0;