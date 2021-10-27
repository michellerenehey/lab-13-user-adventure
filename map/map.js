// import quest list 
import questArray from '../data/quest-data.js'; 
import { getUser } from '../utils.js';
import { renderUser } from '../render-user.js';

// grab DOM elements 
const mapLinks = document.getElementById('map-links'); 

// 
let user = getUser(); 

//
if (user.clif <= 0) {
    window.location.replace('../gameover'); 
}

// 
for (let quest of questArray){
    displayLink(quest); 
}

renderUser(user); 

// create function for links 
function displayLink(quest){
    const link = document.createElement('a'); 
    link.href = `../quest/?id=${quest.id}`; 
    link.textContent = quest.title; 
    mapLinks.appendChild(link); 
}

// create function for removing link 
function displaySpan(quest){
    const linkSpan = document.createElement('span'); 
    linkSpan.textContent = quest.title; 
    mapLinks.appendChild(linkSpan); 
}