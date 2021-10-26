// import quest list 
import questArray from '../data/quest-data.js'; 

// grab DOM elements 
const mapLinks = document.getElementById('map-links'); 

for (let quest of questArray){
    const link = document.createElement('a'); 
    link.href = `../quest/?id=${quest.id}`; 
    link.textContent = quest.title; 
    mapLinks.appendChild(link); 
}

// loop through each quest in quest-data array
// in the loop, with each one, generate an <a> tag 
// append the a tag with the quest ids as URL parameters
// mapLinks.appendChild(a) 