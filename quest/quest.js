import questArray from '../data/quest-data.js'; 
import { findById, scoreQuest, setUser, getUser } from '../utils.js'; 
import { renderUser, updateUser } from '../render-user.js'; 

let user = getUser(); 
renderUser(user); 

const params = new URLSearchParams(window.location.search); 
const questData = findById(params.get('id'), questArray); 

const title = document.getElementById('quest-title'); 
title.textContent = questData.title; 

const description = document.getElementById('quest-description'); 
description.textContent = questData.description; 

const img = document.getElementById('quest-image'); 
img.src = `../assets/${questData.image}`; 

const questChoices = document.getElementById('quest-choices'); 

for (let choice of questData.choices){
    const label = document.createElement('label'); 
    label.textContent = choice.description; 

    const input = document.createElement('input'); 
    input.type = 'radio'; 
    input.name = 'choice-radio-buttons'; 
    input.required = true; 
    input.value = choice.id; 
    
    label.append(input); 
    questChoices.append(label); 
}

const submitBtn = document.createElement('button'); 
submitBtn.textContent = 'Submit'; 
questChoices.append(submitBtn); 

questChoices.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const selectedRadio = document.querySelector('input[type="radio"]:checked');
    const userChoice = findById(selectedRadio.value, questData.choices); 

    const questDetails = document.getElementById('quest-details'); 
    questDetails.classList.add('hidden'); 

    const questResults = document.getElementById('quest-results'); 
    
    const resultP = document.createElement('p'); 
    resultP.textContent = userChoice.result; 
    
    const backLink = document.createElement('a'); 
    backLink.href = '../map'; 
    backLink.textContent = 'Go back to the map!'; 

    questResults.append(resultP, backLink); 
    questResults.classList.remove('hidden'); 

    const user = getUser(); 
    scoreQuest(userChoice, questData.id, user); 
    setUser(user);
    updateUser(user); 
    
    // const character = document.getElementById('character-id'); 
    // character.textContent = `Character: ${user.character}`; 

    // const insta = document.getElementById('insta-id');  
    // insta.textContent = `Instagram Likes: ${user.insta}`; 

    // const clif = document.getElementById('clif-id'); 
    // clif.textContent = `Clif Bars: ${user.clif}`; 


// grab selected radio button from choices array (findByID)
// get user data from LS
// update user using scoreQuest function
    // takes choice, questID, user
    // update insta, clif, and completed object
// reset LS
// display the result associated with the button 
// display a link to go back to the map 
}); 