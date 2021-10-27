import { clifPointsMessages, finishedInstaPointsMessages, aliveInstaPointsMessages } from './messages.js'; 
import { renderUser } from '../render-user.js';
import { getUser } from '../utils.js'; 

// get userObject from LS 
const user = getUser(); 

// update header
renderUser(user); 

// grab story spot in HTML
const finalStory = document.getElementById('final-story'); 

// grab user scores

// grab messages 




function clifPoints(clif){
    if (clif <= 0){
        return 'finished'; 
    } else if (clif < 10){
        return 'weak'; 
    } else 
        return 'healthy'; 
}
