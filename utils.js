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