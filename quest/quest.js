import questArray from '../data/quest-data.js'; 
import { findById } from '../utils.js'; 

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
    input.value = choice.id; 
    
    label.appendChild(input); 
    questChoices.append(label); 
}
