// import functions
import { generateUser, setUser, getUser, scoreQuest } from '../utils.js'; 

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

// TEST 3
test('getUser should return user objct from LS', (expect) => {
    //arrange
    const userObject = 
        {
            completed: {}, 
            insta: 0, 
            clif: 35, 
            name: 'Michelle', 
            character: 'Newbie'
        };
    
    setUser(userObject); 

    //act
    const actual = getUser(); 

    //assert 
    expect.deepEqual(actual, userObject); 
}); 

// TEST 4 
test('scoreQuest should update insta, clif and completed on the userObject', (expect) => {
    //arrange
    const userObject = 
        {
            completed: {}, 
            insta: 0, 
            clif: 35, 
            name: 'Michelle', 
            character: 'Newbie'
        };
    const choiceObject = {
        id: 'continue',
        description: 'Climb on!',
        result: `You are feeling fit, and have been training for this for a while! You decide to continue up the pass. You gain 20 instagram likes, but lose 10 clif bars for the effort`,
        insta: 20,
        clif: -10,
    }; 
    const questId = 'aasgard'; 
    
    //act
    scoreQuest(choiceObject, questId, userObject); 

    //assert 
    expect.equal(userObject.insta, 20); 
    expect.equal(userObject.clif, 25); 
    expect.equal(userObject.completed[questId], true); 
})