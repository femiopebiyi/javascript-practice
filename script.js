var p1 =document.querySelector("#p1")
var p2 = document.getElementById ("p2")
let h1 = document.querySelector("h1")
let reset = document.querySelector("#reset")
let input = document.querySelector("input")
let limitDisplay = document.querySelector('p span')
let p1count = document.querySelector("#p1count")
let p2count = document.querySelector("#p2count")
var p1score = 0
var p2score = 0
let winningScore = 5
var gameOver = false

p1.addEventListener("click", function(){
    if(!gameOver){
        p1score++
        if(p1score===winningScore){
            gameOver = true
            p1count.classList.toggle("green")
        }
        p1count.textContent = p1score
    }
    
})



p2.addEventListener("click", function(){
    if(!gameOver){
        p2score++
        if(p2score===winningScore){
            gameOver = true
            p2count.classList.toggle("green")
        }
        p2count.textContent = p2score
        
    }
})
reset.addEventListener('click', function(){
    p1score = 0;
    p2score = 0;
    p1count.textContent = 0;
    p2count.textContent = 0;
    p1count.classList.remove("green");
    p2count.classList.remove("green");
    gameOver = false;
})
function resett(){
    p1score = 0;
    p2score = 0;
    p1count.textContent = 0;
    p2count.textContent = 0;
    p1count.classList.remove("green");
    p2count.classList.remove("green");
    gameOver = false;
}

input.addEventListener("change", function(){
    limitDisplay.textContent = input.value;
    winningScore= Number(input.value)
    resett()
})