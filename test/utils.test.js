// import functions
import { generateUser } from '../utils.js'; 

const test = QUnit.test;

// TEST 1
test('generateUser should return a user object', (expect) => {
    //Arrange
    const expected = 
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
    expect.deepEqual(actual, expected);
});
