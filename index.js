homeEl = document.getElementById("home")
guestEl = document.getElementById("guest")
homeEl.textContent = 0
guestEl.textContent = 0
let homeCount = 0
let guestCount = 0

function add1() {
    homeCount += 1
    homeEl.textContent = homeCount
}

function add2() {
    homeCount += 2
    homeEl.textContent = homeCount
}

function add3() {
    homeCount += 3
    homeEl.textContent = homeCount
}

function addOne() {
    guestCount += 1
    guestEl.textContent = guestCount
}

function addTwo() {
    guestCount += 2
    guestEl.textContent = guestCount
}

function addThree() {
    guestCount += 3
    guestEl.textContent = guestCount
}