const tabs = document.querySelectorAll(".tab");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        if(tab.id === "login-tab") {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        }
        if (tab.id === "register-tab") {
            registerForm.style.display = "block";
            loginForm.style.display = 'none';
        }
        tabs.forEach(t => {
            t.classList.remove("active");
        });
            tab.classList.add("active");
    });
});


function login() { 
    let login_email = document.getElementById("login-email").value;
    let login_password = document.getElementById("login-password").value;
    if (login_email == "student@gmail.com" && login_password == "test") {
        console.log(login_email)
        console.log(login_password)
        window.location.href = "student-dashboard.html";
    } else if(login_email == "faculty@gmail.com" && login_password == "test") {
        window.location.href = "faculty-dashboard.html";
    }
}