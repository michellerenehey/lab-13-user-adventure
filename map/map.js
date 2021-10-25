// import quest list 
import questArray from '../data/quest-data.js'; 

// grab DOM elements 
const mapLinks = document.getElementById('map-links'); 

// loop through each quest in quest-data array
// in the loop, with each one, generate an <a> tag 
// append the a tag with the quest ids as URL parameters
// mapLinks.appendChild(a) 