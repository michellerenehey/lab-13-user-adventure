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