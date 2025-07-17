
import { validate } from "../script/validator/validate.js";
import {name} from "../variables.js"
// import { redirect } from "../main.js";


const userName = document.getElementById("username") as HTMLInputElement;
const errorMessage = document.getElementById("error-message") as HTMLParagraphElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
const loginForm = document.getElementById("form") as HTMLFormElement;



// innan den submiter username för validering och password funktionilitet!
loginForm.addEventListener("submit", (event: Event) => {

    event.preventDefault();
    // Hämtar id så att man kan manipluera visibilitet!
    const passInput = document.getElementById("password") as HTMLInputElement;
    const togglePassword = document.getElementById("btn-pass") as HTMLButtonElement;

    togglePassword.addEventListener("click", ()=> {
        if(passInput.type === 'password') {
            passInput.type = 'text';
        } else {
            passInput.type = 'password';
        }
    })
    
    const StringName = userName.value.trim();
    console.log("hello");
    if (validate(StringName)) {
        localStorage.setItem("username", StringName);
        redirect();
    } else {
        errorMessage.textContent = "failed to validate!!";
       return;
    }
})




function redirect(delay: number = 2000) {
    setTimeout(()=> {
        window.location.replace('/src/pages/dashboard.html');
    }, delay);
}