"use strict";

window.onload = () => {
    let theDropdown = document.querySelector("#usersDropdown");
    let userTableBody = document.querySelector("#userTable tbody");

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
                newOption.value = JSON.stringify(user);
                theDropdown.appendChild(newOption);
            });
        })
        .catch((error) => {
            console.log(`Oops! That didn't work out. Error: ${error}`);
        });

    // Event listener for dropdown change
    theDropdown.addEventListener("change", () => {
        let selectedUser = JSON.parse(theDropdown.value);
        // Clear previous table rows
        userTableBody.innerHTML = "";
        // Create new row for selected user
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${selectedUser.id}</td>
            <td>${selectedUser.name}</td>
            <td>${selectedUser.username}</td>
            <td>${selectedUser.email}</td>
            <td>${selectedUser.address.street}, ${selectedUser.address.city}, ${selectedUser.address.zipcode}</td>
            <td>${selectedUser.phone}</td>
        `;
        // Append new row to table body
        userTableBody.appendChild(newRow);
    });
};
