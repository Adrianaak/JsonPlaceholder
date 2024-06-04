"use strict";

window.onload = () => {
    document.getElementById("theButton").addEventListener("click", function () {
        // Get the todo ID from the input field
        var todoId = document.getElementById("todoId").value;

        // Call the API using fetch
        fetch("https://jsonplaceholder.typicode.com/todos/" + todoId)
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
                    <p>Todo ID: ${data.id}</p>
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
    });
};
