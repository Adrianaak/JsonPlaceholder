"use strict"

window.onload = ()=> {

    const newTodoForm = document.querySelector("#newTodoForm");

    //listen for the form submission and call createAComment
    newTodoForm.addEventListener("submit", createNewTodo)

} 

function buttonClick() {

    let newTodo = document.getElementById("newTodo").value;

     // Call the API using fetch
     fetch("https://jsonplaceholder.typicode.com/todos/" + newTodo)
     .then((response) => {
         if (!response.ok) {
             throw new Error(`HTTP error! Status: ${response.status}`);
         }
         return response.json();
     })
     .then((data) => {
         // Display the todo's information
         document.getElementById("results").innerHTML = `
             <p>User ID: ${data.userId}</p>
             <p>Title: ${data.title}</p>
             <p>Completed: ${data.completed ? 'Yes' : 'No'}</p>
         `;
         document.getElementById("message").innerText = ''; // Clear any previous error message
     })
     .catch((error) => {
         // Display error message
         document.getElementById("results").innerHTML = '';
         document.getElementById("message").innerText = `Error: ${error}`;
     });
}

const createNewTodo = async (event) => {

    //call preventDefault to keep the page from reloading
    event.preventDefault();

    //generate a new form data object
    let formData = new FormData(event.target);

    //generate a JavaScript Object from the formData object created above
    let formDataAsObject = Object.fromEntries(formData);

    //try catch for error handling
    try {

        //make a fetch (POST) request to create a comment in the API
        let response = await fetch("https://jsonplaceholder.typicode.com/todos",
            {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                //take the data from the form and build the body of the request
                body: JSON.stringify(formDataAsObject)
            }
        );
        //turn the response in to something we can work with
        let newTodo = await response.json();

        //put the comments in the console
        console.log(newTodo)

    } catch (err) {

        //what the hell happend
        console.log("something went south")

    }

}



