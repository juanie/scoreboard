let num1 = 0
let num2 = 0
let homeSumEl = document.getElementById("homeSum")
let guestSumEl = document.getElementById("guestSum")
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

function plusOne(){
    num1 += 1
    let homeScore = num1
     homeSumEl.textContent = num1
     console.log("Click")

}

function plusTwo(){
    num1 += 2
    let homeScore = num1
     homeSumEl.textContent = num1

}
function plusThree(){
    num1 += 3
    let homeScore = num1
     homeSumEl.textContent = num1

}
function plusOneGuest(){
    num2 += 1
    let guestScore = num2
     guestSumEl.textContent = num2
}

function plusTwoGuest(){
    num2 += 2
    let guestScore = num2
     guestSumEl.textContent = num2
}

function plusThreeGuest(){
    num2 += 3
    let guestScore = num1
    guestSumEl.textContent = num2
}