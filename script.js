let first = document.querySelectorAll("li");


for(let i =0; i<first.length; i++){
    first[i].addEventListener("mouseover", function(){
    this.style.color = "green";
})
first[i].addEventListener("mouseout", function(){
    this.style.color="black"
})
    first[i].addEventListener("click", function(){
        this.classList.toggle("done")
    })
}

var gi = [1,2,3,4,5,6,6,7,7,8,8,9,9,9,9,9,9,9,9,9];


gi.forEach (function(clout, i){
    console.log( i + " "+clout)
})