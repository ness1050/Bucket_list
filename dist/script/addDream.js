import { addDream } from "./Dashboard.js";
const form = document.querySelector("form");
const dreamInput = document.getElementById("dream");
const catogerySelect = document.getElementById("dream-select");
const dreamErrorMessage = document.getElementById("dream-error-message");
const themeError = document.getElementById("theme-error-message");
const userName = document.getElementById("username");
if (userName) {
    userName.textContent = localStorage.getItem("username");
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const dreamName = dreamInput.value.trim();
    const catogery = catogerySelect.value;
    dreamErrorMessage.style.display = "none";
    themeError.style.display = "none";
    let isValid = true;
    if (!dreamName) {
        dreamErrorMessage.style.display = "block";
        isValid = false;
    }
    if (!catogery) {
        themeError.style.display = "block";
        isValid = false;
    }
    if (isValid) {
        addDream(dreamName, catogery);
        form.innerHTML = `<h2 > The Dream added succesfully!</h2>`;
        console.log("Added dream!");
        redirect();
    }
});
function redirect(delay = 4000) {
    setTimeout(() => {
        window.location.replace('/src/pages/dashboard.html');
    }, delay);
}
//# sourceMappingURL=addDream.js.map