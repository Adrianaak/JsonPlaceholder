"use strict"

window.onload = () => {

    document.getElementById("theButton").addEventListener("click", function () {
        // Get the todo ID from the input field
        var todoId = document.getElementById("todoId").value;
    })

}

// Call the API using fetch
        fetch("https://jsonplaceholder.typicode.com/todos/", {} )
            .then ((response) => response.json())
            .then((data) => {
              data.forEach((user)=>{
                console.log(user.Id)
              })
            })
             .catch((error) => {
                console.log(`Could not fetch verse: ${error}`);
             });