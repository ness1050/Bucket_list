
import {Dream} from "../module/model.js"

const username = localStorage.getItem("username");
const Username = document.getElementById("user-name") as HTMLElement;

Username.innerHTML = `<p> ${username} </p>`;

let dreams: Dream[] = loadDreams();

function loadDreams(): Dream[] {
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
        li.innerHTML = ` <input class="dream-check" type="checkbox" name="dream-check" id="dream-check-${dream.id}" ${
      dream.checked ? "checked" : ""
    }>
      <label for="dream-check-${dream.id}">${dream.name}, <span class="dream-theme">${dream.theme}</span></label>
      <button type="button"><img src="../assets/images/trash_delete.png" alt="delete"></button>
        `;

        const checkBox = li.querySelector(`input#dream-check-${dream.id}`) as HTMLInputElement;
        checkBox.addEventListener("change", () => toggleDreamComplete(dream.id));
        const deleteBtn = li.querySelector("button") as HTMLButtonElement;
        dreamList.appendChild(li);
    });
}

function toggleDreamComplete(id: number): void {
    dreams = dreams.map((dream) => dream.id === id ? {...dream, checked: !dream.checked} : dream);
    saveDream();
    renderDreams();
}


// We need to create add item or product
// we need an array of products to save the product into, using localstorage.
// we need a function to delete an item
// validation function to check if the product has a name
// set a them to the choosen item/product
// confirmation meddelande till user i funktionen.
// function boolean to mark a task or dream is done!.
