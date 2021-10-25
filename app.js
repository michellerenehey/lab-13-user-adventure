// import functions 
import { generateUser, setUser } from './utils.js'; 

// grab DOM stuffs: user form 
const userForm = document.getElementById('user-form'); 

// what happens when we hit submit... 
userForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const formData = new FormData(userForm); 
    const userObj = generateUser(formData);
    setUser(userObj); 
    window.location.replace('./map');  
}); 