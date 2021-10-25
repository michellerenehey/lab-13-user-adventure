// import functions
import { generateUser, setUser } from '../utils.js'; 

const test = QUnit.test;

// TEST 1
test('generateUser should return a user object', (expect) => {
    //Arrange
    const userObject = 
        {
            completed: {}, 
            insta: 0, 
            clif: 35, 
            name: 'Michelle', 
            character: 'Newbie'
        };
    
    const formData = new FormData(); 
    formData.set('name', 'Michelle'); 
    formData.set('character', 'Newbie'); 

    //Act 
    const actual = generateUser(formData); 

    //Expect
    expect.deepEqual(actual, userObject);
});

// TEST 2
test('setUser should store user info in LS', (expect) => {
    //arrange 
    localStorage.removeItem('USER'); 
    const userObject = 
        {
            completed: {}, 
            insta: 0, 
            clif: 35, 
            name: 'Michelle', 
            character: 'Newbie'
        };
    
    //act
    setUser(userObject); 
    const actual = JSON.parse(localStorage.getItem('USER')); 

    //assert
    expect.deepEqual(actual, userObject); 
}); 