import { addDream } from "./Dashboard.js";


const form = document.querySelector("form") as HTMLFormElement;
const dreamInput = document.getElementById("dream") as HTMLInputElement;

const catogerySelect = document.getElementById("dream-select") as HTMLSelectElement;
const dreamErrorMessage = document.getElementById("dream-error-message") as HTMLElement;
const themeError = document.getElementById("theme-error-message") as HTMLElement;


const userName = document.getElementById("username") as HTMLElement;
if(userName) {
    userName.textContent = localStorage.getItem("username");
}

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const dreamName = dreamInput.value.trim();
    const catogery = catogerySelect.value;

    dreamErrorMessage.style.display = "none";
    themeError.style.display = "none";

    let isValid = true;

    if (!dreamName) {
        dreamErrorMessage.style.display = "block";
        isValid =false;

    }

    if(!catogery) {
        themeError.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        addDream(dreamName, catogery);
        form.innerHTML = `<h2 > The Dream added succesfully!</h2>`;
        console.log("Added dream!")
        redirect();
    }
})


function redirect(delay: number = 4000) {
    setTimeout(()=> {
        window.location.replace('/src/pages/dashboard.html');
    }, delay);
}