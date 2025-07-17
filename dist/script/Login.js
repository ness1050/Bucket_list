import { validate } from "../script/validator/validate.js";
// import { redirect } from "../main.js";
const userName = document.getElementById("username");
const errorMessage = document.getElementById("error-message");
const btn = document.getElementById("btn");
const loginForm = document.getElementById("form");
// innan den submiter username för validering och password funktionilitet!
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Hämtar id så att man kan manipluera visibilitet!
    const passInput = document.getElementById("password");
    const togglePassword = document.getElementById("btn-pass");
    togglePassword.addEventListener("click", () => {
        if (passInput.type === 'password') {
            passInput.type = 'text';
        }
        else {
            passInput.type = 'password';
        }
    });
    const StringName = userName.value.trim();
    console.log("hello");
    if (validate(StringName)) {
        localStorage.setItem("username", StringName);
        redirect();
    }
    else {
        errorMessage.textContent = "failed to validate!!";
        return;
    }
});
function redirect(delay = 2000) {
    setTimeout(() => {
        window.location.replace('/src/pages/dashboard.html');
    }, delay);
}
//# sourceMappingURL=Login.js.map