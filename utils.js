import questArray from './data/quest-data.js';

export function generateUser(formData){
    return {
        completed: {}, 
        insta: 0, 
        clif: 35,  
        name: formData.get('name'), 
        character: formData.get('character'), 

    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject); 
    localStorage.setItem('USER', userString); 
}

export function getUser(){
    const userString = localStorage.getItem('USER'); 
    return JSON.parse(userString); 
}


export function findById(id, itemList) {
    for (let item of itemList) {
        if (item.id === id){
            return item;
        }
    }
}


export function scoreQuest(choiceObject, questID, userObject){
    userObject.insta += choiceObject.insta; 
    userObject.clif += choiceObject.clif; 
    userObject.completed[questID] = true;
}

export function completedAllQuests(userObject){
    for (let quest of questArray){
        if (!userObject.completed[quest.id]){
            return false;} 
    }
    return true; // needs to be out of the loop
}