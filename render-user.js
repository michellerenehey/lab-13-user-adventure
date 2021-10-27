
const userProfile = document.getElementById('user-profile'); 

export function renderUser(user){
    const userInfoText = document.createElement('div'); 
    userInfoText.classList.add('user-info-text'); 

    const name = document.createElement('span'); 
    name.textContent = user.name; 

    const character = document.createElement('span'); 
    character.setAttribute('id', 'character-id');
    character.textContent = `Character: ${user.character}`; 

    const insta = document.createElement('span'); 
    insta.setAttribute('id', 'insta-id');
    insta.textContent = `Instagram Likes: ${user.insta}`; 

    const clif = document.createElement('span'); 
    clif.setAttribute('id', 'clif-id');
    clif.textContent = `Clif Bars: ${user.clif}`; 
    
    userInfoText.append(name, character, insta, clif); 
    userProfile.append(userInfoText); 

}

export function updateUser(user){
    const character = document.getElementById('character-id'); 
    character.textContent = `Character: ${user.character}`; 

    const insta = document.getElementById('insta-id');  
    insta.textContent = `Instagram Likes: ${user.insta}`; 

    const clif = document.getElementById('clif-id'); 
    clif.textContent = `Clif Bars: ${user.clif}`; 
}