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

export function loadProfile(){
    const name = document.getElementById('name'); 
    const character = document.getElementById('character'); 
    const insta = document.getElementById('insta'); 
    const clif = document.getElementById('clif'); 

    const user = getUser(); 

    name.textContent = user.name; 
    character.textContent = user.character; 
    insta.textContent = user.insta; 
    clif.textContent = user.clif;

}