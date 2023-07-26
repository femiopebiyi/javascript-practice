var todo=[];
var input = prompt("what would you like to do?");

while(input!=="quit"){
    if (input==="new"){
        var newTodo=prompt("add to todo");
        todo.push(newTodo);
        console.log("you added a todo");
    }
    else if(input==="list"){
        console.log("**********")
        todo.forEach(function(todos, i){
            console.log(i + ": " + todos)
        })
        console.log("**********")
    }
    else if(input==="delete"){
        var index =prompt("what index would you like to delete?");
        todo.splice(index, 1)
        console.log("you deleted a todo")
    }
    var input = prompt("what would you like to do?");
}
console.log('you quit the app!!!')