import { clifPointsMessages, finishedInstaPointsMessages, aliveInstaPointsMessages } from './messages.js'; 
import { renderUser } from '../render-user.js';
import { getUser } from '../utils.js'; 

// get userObject from LS 
const user = getUser(); 

// update header
renderUser(user); 

// grab story spot in HTML
const finalStoryHealth = document.getElementById('final-story-health'); 
const finalStoryInsta = document.getElementById('final-story-insta'); 

// grab user scores
const instaResult = instaPoints(user.insta); 
const clifResult = clifPoints(user.clif); 

// grab clif message 
const clifMessage = clifPointsMessages[clifResult]; 

// grab insta message 
let secondMessage = ''; 
if (clifResult === 'finished') {
    secondMessage = finishedInstaPointsMessages; 
} else {
    secondMessage = aliveInstaPointsMessages; 
}
const instaMessage = secondMessage[instaResult]; 

let story = 'Your trip has come to an end, '; 
story += user.name + ' the ' + user.character + '.'; 
story += 'Your fate? ' + clifMessage + '.'; 

let instaStory = 'What about your Instagram?' + instaMessage + '.'; 

finalStoryHealth.textContent = story; 
finalStoryInsta.textContent = instaStory; 

// play again button
const playAgainBtn = document.getElementById('play-again'); 

playAgainBtn.addEventListener('click', () => {
    localStorage.removeItem('USER'); 
    window.location.replace('..'); 
}); 

// functions 
function clifPoints(clif){
    if (clif <= 0){
        return 'finished'; 
    } else if (clif < 10){
        return 'weak'; 
    } else 
        return 'strong'; 
}

function instaPoints(insta){
    if (insta <= 0){
        return 'poor'; 
    } else if (insta < 20){
        return 'modest'; 
    } else 
        return 'rich'; 
}

