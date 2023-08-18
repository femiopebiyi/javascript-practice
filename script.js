let input = document.querySelector("input");
$("input").keypress(function (event){
    if(event.which===13){
        alert("you pressed enter")
    }
})