let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el")

function increment1(team) {
    console.log("incrementing 1");
    if (team === "home") {
        homeScore += 1;
        homeEl.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += 1;
        guestEl.textContent = guestScore;
    }
}

function increment2(team) {
    if (team === "home") {
        console.log("incrementing 2");
        homeScore += 2;
        homeEl.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += 2;
        guestEl.textContent = guestScore;
    }
}

function increment3(team) {
    console.log("incrementing 3");
    if (team === "home") {
        homeScore += 3;
        homeEl.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += 3;
        guestEl.textContent = guestScore;
    }
}

let reset = document.getElementById("resetGame");

function newGame() {

    homeEl.textContent = 0;
    guestEl.textContent = 0;

}
