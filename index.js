let homeCount = 0;
let guestCount = 0;

let home = document.getElementById("home");
let guest = document.getElementById("guest")

function increment(num, team) {
        if(team === home){
            if(num === 1){
            homeCount = homeCount + 1;
            home.innerText = homeCount;
        } else if(num === 2) {
            homeCount = homeCount + 2;
            home.innerText = homeCount;
        } else {
            homeCount = homeCount + 3;
            home.innerText = homeCount;
        }
    }

        if(team === guest){
            if(num === 1){
            guestCount = guestCount + 1;
            guest.innerText = guestCount;
        } else if(num === 2) {
            guestCount = guestCount + 2;
            guest.innerText = guestCount;
        } else {
            guestCount = guestCount + 3;
            guest.innerText = guestCount;
        }
    }
   
}

let reset = document.getElementById("newGame");

function newGame() {
    home.innerText = 0;
    guest.innerText = 0;
}

// let isLeading = document.getElementById("leader");

// function l() {
//     console.log("working");
// }

// isLeading.innerHTML
// // function isleading () {
// //     if(homeCount > guestCount){
// //         console.log("highlight leader");
// //     } else if(guestCount > homeCount){
// //         console.log("highlight guest");
// //     }
// // }
