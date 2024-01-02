let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el")

function increment1(team) {
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
        homeScore += 2;
        homeEl.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += 2;
        guestEl.textContent = guestScore;
    }
}

function increment3(team) {
    if (team === "home") {
        homeScore += 3;
        homeEl.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += 3;
        guestEl.textContent = guestScore;
    }
}

let reset = document.getElementById("new");

function newGame() {
    homeEl.textContent = 0;
    guestEl.textContent = 0;

}
