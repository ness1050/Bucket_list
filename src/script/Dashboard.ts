
import {Dream} from "../module/model.js"
// We need to create add item or product
// we need an array of products to save the product into, using localstorage.
// we need a function to delete an item
// validation function to check if the product has a name
// set a them to the choosen item/product
// confirmation meddelande till user i funktionen.
// function boolean to mark a task or dream is done!.
const Username = document.getElementById("user-name") as HTMLElement;
const username = localStorage.getItem("username");


let dreams: Dream[] = loadDreams();




function loadDreams(): Dream[] {
    const storedDreams = localStorage.getItem("dreams");
    return storedDreams ? JSON.parse(storedDreams) : [];
}

function saveDream(dreams: Dream[]) : void {
    localStorage.setItem("dreams", JSON.stringify(dreams));
}

function renderDreams(): void {
    const dreams = loadDreams();
    let dreamList = document.querySelector(".dream-list") as HTMLUListElement;
    if(!dreamList) {
        const section = document.getElementById("main-section") as HTMLElement;
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
        deleteBtn.addEventListener("click", ()=> deleteDream(dream.id));

    });
}

function toggleDreamComplete(id: number): void {
    const dreams = loadDreams();
    const updateDreams = dreams.map((dream) => dream.id === id ? {...dream, checked: !dream.checked} : dream);
    saveDream(updateDreams);
    renderDreams();
}


function deleteDream(id:number) {
   dreams = dreams.filter((dream) => dream.id !== id);
   saveDream(dreams);
   renderDreams(); 
}

const dream1 = {
    id: 2,
    name: "audi",
    theme: "Car",
    checked: true
}

dreams.push(dream1);

export function addDream(name:string, theme: string): void {
    const dreams = loadDreams();
    console.log("i am here!")
    const newDream : Dream = {
        id: dreams.length > 0 ? Math.max(...dreams.map(d => d.id)) + 1 : 1, 
        name,
        theme,
        checked: false
    };

    dreams.push(newDream);
    console.log("i am here!")

    saveDream(dreams);
    renderDreams();
}


document.addEventListener("DOMContentLoaded", ()=> {
    if (Username) {
        Username.innerHTML = `<p>${username}</p>`;
    } else {
        console.error("no element with user-name found!");

    }
    let section = document.getElementById("main-section") as HTMLElement;
    if(!section) {
        console.error("no section found!");
        section = document.createElement("section");
        section.id = "main-section";
        const outerSection = document.querySelector("main section") as HTMLElement;

        console.log("section created!")
        if (outerSection) {
        outerSection.appendChild(section);
        } else {
        console.error("Outer section not found, appending to main");
        document.querySelector("main")!.appendChild(section);
        }
    }

    if(!document.querySelector(".dream-list"))  {
        const ul = document.createElement("ul");
        ul.classList.add("dream-list");
        section.appendChild(ul);
        renderDreams();
    }
})