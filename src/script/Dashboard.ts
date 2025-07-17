
import {Dream} from "../module/model.js"

const username = localStorage.getItem("username");
const Username = document.getElementById("user-name") as HTMLElement;

Username.innerHTML = `<p> ${username} </p>`;

const dreamArray: Dream[] = [];

// We need to create add item or product
// we need an array of products to save the product into, using localstorage.
// we need a function to delete an item
// validation function to check if the product has a name
// set a them to the choosen item/product
// confirmation meddelande till user i funktionen.
// function boolean to mark a task or dream is done!.
