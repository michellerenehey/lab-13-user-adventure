export function generateUser(formData){
    return {
        completed: {}, 
        insta: 0, 
        clif: 35,  
        name: formData.get('name'), 
        character: formData.get('character'), 

    };
}