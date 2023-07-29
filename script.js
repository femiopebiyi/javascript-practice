var movies= [
    {
        title: 'Oppenheimer',
        star: 5,
        hasSeen:true
    },
    {
        title:"Barbie",
        star: 5,
        hasSeen: false
    },
    {
        title: "John Wick",
        star : 2,
        hasSeen: false
    }
]
movies.forEach(function(movie){
    var result= "You Have ";
    if(movie.hasSeen){
        result+= "seen "
    }
    else{
        result+="not seen "
    }
    result+=  movie.title + " " + movie.star +"-stars"
    console.log(result)
})
