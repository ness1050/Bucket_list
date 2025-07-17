
import {Dream} from "../module/model.js"

const username = localStorage.getItem("username");
const Username = document.getElementById("user-name") as HTMLElement;

Username.innerHTML = `<p> ${username} </p>`;

let dreams: Dream[] = loadDreams();

function loadDreams(): void {
    const storedDreams = localStorage.getItem("dreams");
    return storedDreams ? JSON.parse(storedDreams) : [];
}

function saveDream() : void {
    localStorage.setItem("dream", JSON.stringify(dreams));
}

function renderDreams(): void {
    let dreamList = document.querySelector(".dream-list") as HTMLUListElement;
    if(!dreamList) {
        const section = document.getElementById("main section") as HTMLElement;
        const ulList = document.createElement("ul");
        ulList.classList.add("dream-list");
        section.appendChild(ulList);
        dreamList = ulList;
    }

    dreamList.innerHTML = "";

    dreams.forEach((dream) => {
        const li = document.createElement("li");
        li.classList.add("dream-list_item");
        li.innerHTML = `
        `
    })
}


// We need to create add item or product
// we need an array of products to save the product into, using localstorage.
// we need a function to delete an item
// validation function to check if the product has a name
// set a them to the choosen item/product
// confirmation meddelande till user i funktionen.
// function boolean to mark a task or dream is done!.
