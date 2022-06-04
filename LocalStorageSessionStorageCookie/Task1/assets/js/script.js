
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let age = document.getElementById("age");
let form = document.querySelector("form");

let users = [];


form.addEventListener("submit", (e) => {
    if (firstName.value.trim().length !== 0 && lastName.value.trim().length !== 0 && age.value.trim().length !== 0 && !isNaN(age.value)) {
        let user = {
            firstName: firstName.value,
            lastName: lastName.value,
            age: age.value
        };
        if(localStorage.getItem("users")){
            users = [...JSON.parse(localStorage.getItem("users")), user]
        }else{
            users.push(user);
        }
        localStorage.setItem("users", JSON.stringify(users));
    }
})

let newUsers = JSON.parse(localStorage.getItem("users"));

if (newUsers !== null) {
    newUsers.forEach(user =>{
        let tbody = document.querySelector("tbody");
    
        tbody.innerHTML += `
            <tr>
                <th scope="col">${user.firstName}</th>
                <th scope="col">${user.lastName}</th>
                <th scope="col">${user.age}</th>
            </tr>`;
    
    })
} 








