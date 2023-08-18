let input = document.querySelector("input");
// $("input").keypress(function (event){
//     if(event.which===13){
//         alert("you pressed enter")
//     }
// })

$("h1").on("click", function (){
    $(this). css("color", "red")
})

$("input").on("keypress", function(){
    console.log("dattebayo")
})

