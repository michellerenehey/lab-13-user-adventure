import questArray from '../data/quest-data.js'; 
import { findById, scoreQuest, setUser, getUser } from '../utils.js'; 
import { renderUser } from '../render-user.js'; 

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

    const span = document.createElement('span'); 
    span.textContent = choice.description;
    
    label.append(input, span); 
    questChoices.append(label); 
}

const submitBtn = document.createElement('button'); 
submitBtn.textContent = 'Submit'; 
questChoices.append(submitBtn); 

// questChoices.addEventListener('submit', (e) => {
//     e.preventDefault(); 
//     const selectedRadio = document.querySelector('input[type="radio"]:checked'); 
//     const choice = findById(questData.choices, selectedRadio.value); 

//     const user = getUser(); 

//     scoreQuest(choice, questData.id, user); 
//     setUser(user); 

//     // display results
//     // link back to the map

// }); 