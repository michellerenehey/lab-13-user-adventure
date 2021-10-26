
const userProfile = document.getElementById('user-profile'); 

export function renderUser(user){
    const userInfoText = document.createElement('div'); 
    userInfoText.classList.add('user-info-text'); 

    const name = document.createElement('span'); 
    name.textContent = user.name; 

    const character = document.createElement('span'); 
    character.textContent = `Character: ${user.character}`; 

    const insta = document.createElement('insta'); 
    insta.textContent = `Instagram Likes: ${user.insta}`; 

    const clif = document.createElement('clif'); 
    clif.textContent = `Clif Bars: ${user.clif}`; 
    
    userInfoText.append(name, character, insta, clif); 
    userProfile.append(userInfoText); 

}
