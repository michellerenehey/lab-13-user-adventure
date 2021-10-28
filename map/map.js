
import questArray from '../data/quest-data.js'; 
import { getUser, completedAllQuests } from '../utils.js';
import { renderUser } from '../render-user.js';

// grab DOM elements 
const mapLinks = document.getElementById('map-links'); 

// 
let user = getUser(); 

//
if (user.clif <= 0 || completedAllQuests(user)){
    window.location.replace('../gameover'); 
}

// 
for (let quest of questArray){
    if (user.completed[quest.id]){
        displaySpan(quest); 
    } else {
        displayLink(quest); 
    }
}

// update user "score"
renderUser(user); 

// create function for links 
function displayLink(quest){
    const link = document.createElement('a'); 
    link.href = `../quest/?id=${quest.id}`; 
    link.textContent = quest.title; 
    link.classList.add('map-directions'); 
    link.classList.add('live-link'); 
    link.style.top = quest.map.top; 
    link.style.left = quest.map.left;
    mapLinks.appendChild(link); 
}

// create function for removing link 
function displaySpan(quest){
    const linkSpan = document.createElement('span'); 
    linkSpan.textContent = `Complete: ${quest.title}`; 
    linkSpan.classList.add('map-directions'); 
    linkSpan.classList.add('dead-link'); 
    linkSpan.style.top = quest.map.top; 
    linkSpan.style.left = quest.map.left;
    mapLinks.appendChild(linkSpan); 
}