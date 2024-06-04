"use strict";

window.onload = () => {
    let theDropdown = document.querySelector("#usersDropdown");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            data.forEach((user) => {
                let newOption = document.createElement("option");
                newOption.textContent = user.name;
                newOption.value = user;
                theDropdown.appendChild(newOption);
            });
        })
        .catch((error) => {
            console.log(`Oops! That didn't work out. Error: ${error}`);
        });
};
