# AN ADVENTURE IN THE ENCHANTMENTS

### The enchantments are a magical hiking area in Washington. You can only access them via permits, and permits are extremely hard to get. Going there is a dream! On our adventure we'll encounter a few things: 
* Aasgard pass: 
    * The mountain pass leading into the "core" of the Enchantments, this pass gains 2,230 feet in elevation in less than 1 mile. 
* Mountain goats: 
    * The mountain goats rule the Enchanments! They're harmless, usually, but can ocassionally cause problems. The like to stick around campsites, because they drink camper's urine. 
* Wind storms: 
    * I've had the chance to hike through the Enchantments only one time, and it was in late September. We experienced a SEVERE windstorm, that was super destructive. We were safe (tucked in some trees), but many campers had damaged gear. 

### One annoying thing about the Enchantments is they've become an Instagram ...nightmare. So, we'll incorporate that into today's lab. Our success on our adventure will be: 
    * Health points === clif-bars
    * Gold === Instagram likes

## HOME PAGE
### HTML 
- [x] a form holding: 
    - [x] text input for user name
    - [x] radio buttons for character choices 
    - [x] submit button

### EVENTS
* On submit: 
    * generate a user object using form data: **function: generateUser()**
        * completed: {quest1: true, quest2: false, quest3: false }
        * name: 
        * class: 
        * gold: 
        * hp: 
    * store user data in local storage: **function: setUser()** 
    * redirect to the map page 

### APP.JS
* Import functions needed 
* Grab the form by it's ID (using the DOM) = userForm 
* Add event listener to userForm: 
    * prevent default
    * createFormData object
    * pass it to generateUser function 
    * save to local storage
    * redirect to map page 

## MAP PAGE
### HTML
- [x] list of links for each quest 
    * generated from quest-data using query parameters: URL = quest?key=value
    * should not be clickable if user has already completed the quest
    * should contain a URL search parameter containing quest ID
- [ ] image of map 
- [ ] header that includes adventurer name, insta likes and clif-bar amounts (user **loadProfile()** function)
### EVENTS
* On page load:     
    * Game logic (TBD)
### MAP.JS
* import quest data
* grab the link-holder (using the DOM) = mapLinks
* loop through each quest in the quest-data array to create links
    * in loop: generate an `<a>` tag 
    * append a with href = `../quest/?id=${<quest-id>}`
    * append a with textContent (set it to the quest.title)
    * mapLinks.appendChild(a)

## QUEST DETAILS PAGE
### HTML (all dynamically made)
- [ ] title
- [ ] description 
- [ ] quest image
- [ ] quest choices (form radio buttons)
- [ ] header that includes adventurer name, insta likes and clif-bar amounts (user **loadProfile()** function)


### EVENTS
* On page load: 
    * get the quest ID from the URL search parameter and load the quest data onto the page 
* On form submit: 
    * update the user data (in local storage)
    * redirect back to the map page 
### QUEST.JS
* import quest-data
* import functions needed (findByID)
* use search params to determine which quest to display (params = new URLSearchParams(window.location.search)), and run this through findById(quests, params.get('id'))
* update HTML elements with the quest data 
    * grab title, image, description from DOM
    * update each of the above
    * to render the choice a user picked, do a for-loop: for (let choice of QuestData.choices)
        * create label
        * create input
        * update input type, name, value
        * label.textContent = choice.description;
        * label.appendChild(input); 
        * questChoices.append(label); 


## userObject { } (to store in LS): 
* completed {} 
* likes: 0, 
* clif-bars: 35, 
* name: ' ' (comes from formData input)
* race: ' ' (comes from formData radio buttons)

## FUNCTIONS: 
* **generateUser(formData)** 
    * takes in user data (from form) 
    * return the userData object above 

* **setUser(userObject)** 
    * sends the userData up to LS

* **findByID(id)**

**loadProfile()**
    * grab html header elements (name, character, insta, clif)
    * call getUser() to grab items from local storage
    * append name, character, insta, and clif with info from LS


## END GAME PAGE

### HTML 
* Header (just like our other pages, with user stats) 
* Body: 
    * empty `<p>` tag for final results (pull down from up top?) -- IF TIME
    * empty `<p>` tag where we will put the final story 
    * empty `<button>` to start over -- IF TIME
## EVENTS
- grab user from local storage
- grab final-story (p tag) from html 

- grab clifPoints score (based on userObject)
- grab instaLikes score (based on userObject)
- grab clifPoint result message (based on clif score)
- grab Insta results msesage (if dead, show dead; else show alive)

- update text on page save as story
- set story to be in the empty p element 

## TO-DO
* Create a "score" function for clifPoints: 
    * if clifbars <= 0; finished
    * if clifbars < 10; weak
    * else; strong

* Create a "score" function for instaLikes: 
    * if insta === 0; poor [ Ron Swanson ]
    * if insta < 50; modest [ you're a regular person ]
    * else; rich [ influencer ]

* Create a story arc: 
* clifPoints results / messages: 
    * finished: 'you ran out of food, so now you live off the earth's bounty - mushrooms, anyone?'
    * weak: 'you don't have enough food to sustain your journey, you must turn around'
    * strong: 'you're strong as hell - you finish the backpacking trip, and become a lifetime guide'

* alive & Insta points results / messages: 
    * poor: 'your social presence is like Ron Swanson, better stay in the woods until your phone runs out of battery'
    * modest: 'hey! you have an average social presence!'
    * rich: 'wow. you are an influncer! now, turn your phone off and enjoy the woods!'

* finished & Insta points results / messages: 
     * poor: 'we'll see you on the trail, Ron Swanson'
    * modest: 'the local pub will brew a beer in your honor, come down and enjoy it anytime'
    * rich: 'you live in the woods for so long, and are so well-known, that they name an Alpine lake after you. you swim in it every day.'   

