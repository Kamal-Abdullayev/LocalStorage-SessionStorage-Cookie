const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const checkBox = document.querySelector("#checkbox");
const loginForm = document.querySelector(".login-form");
const loginPage = document.querySelector(".login-page");

let user = {
    username: "kamal",
    password: "kamal",
    isLogin: false
}

if (!localStorage.getItem("dbUser")) {
    let dbUser = []
    dbUser.push(user);
    localStorage.setItem("dbUser", JSON.stringify(dbUser))
}


let dbUser = JSON.parse(localStorage.getItem("dbUser"));
let sessionUser = JSON.parse(sessionStorage.getItem("dbUser"));


form.addEventListener("submit", () => {
    dbUser.forEach(e => {
        if (e.username == username.value && e.password == password.value && !checkBox.checked) {
            let dbUser = []
            user.isLogin = true;
            dbUser.push(user);
            localStorage.setItem("dbUser", JSON.stringify(dbUser))

        } else if (e.username == username.value && e.password == password.value && checkBox.checked) {
            let dbUser = []
            user.isLogin = true;
            dbUser.push(user);

            var minutesToAdd = 10;
            var currentDate = new Date();
            var futureDate = new Date(currentDate.getTime() + minutesToAdd * 6000);
            var expiresDateString = futureDate.toUTCString();

            localStorage.setItem("dbUser", JSON.stringify(dbUser))
            document.cookie = `dbUser=${JSON.stringify(dbUser)}; expires=${expiresDateString}; path=/`;
        } else {
            alert("User not found!");
        }
    })

})



let logout = document.querySelector(".btn.btn-danger")

logout.addEventListener("click", () => {
    dbUser.forEach(e => {
        let dbUser = []
        user.isLogin = false;
        dbUser.push(user);
        localStorage.setItem("dbUser", JSON.stringify(dbUser));
        document.cookie = `dbUser=${JSON.stringify(dbUser)}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    });
    document.location.reload()
})


dbUser.forEach(user => {
    if (user.isLogin == true) {
        loginForm.style.display = "none";
        loginPage.style.display = "block";
    } else {
        loginForm.style.display = "block";
        loginPage.style.display = "none";
    }
})

