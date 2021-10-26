const aasgard = {
    id: 'aasgard',
    title: 'Trek Up Aasgard Pass',
    map: {},
    image: ,
    description: `You reach Aasgard Pass, and need to decide what to do as you approach. Remember, this pass has 2,230 ft elevation gain in under 1 mile... it will kick your BUTT. What do you do?!`,
    choices: [{
        id: 'continue',
        description: 'Climb on!',
        result: `You are feeling fit, and have been training for this for a while! You decide to continue up the pass. You gain 20 instagram likes, but lose 10 clif bars for the effort`,
        insta: 20,
        clif: -10,
    }, {
        id: 'break',
        description: `Take a break`,
        result: `It is a hot day, and you are exhausted! You decide to take a break and swim at Colchuck Lake. You gain 10 instagram likes for the beautiful lake, and 5 clif bars for taking a break`,
        insta: 10,
        clif: 5,
    }, {
        id: 'sos',
        description: `No way, call search & rescue`,
        result: `You are scared as hell. It is too far, and you forgot lunch. You call search and rescue, taking 10 instagram likes and 20 clif bars from your journey.`,
        insta: -10,
        clif: -20,
    }]
};

const goats = {
    id: 'goats',
    title: 'Encounter Mountain Goats!',
    map: {},
    image: ,
    description: `Mountain goats are the GOAT of the Enchantments! But, remember, they aren't the most cuddly creatures, and this is their home. You turn around a bend and one is in the middle of the trail. What's your plan?`,
    choices: [{
        id: 'fight',
        description: `Throw rocks at the dang thing, I have a hike to finish!`,
        result: `You are in their turf, why on earth would you throw rocks at it? This was a selfish move, and you will lose 50 instagram likes and 50 clif bars for your actions.`,
        insta: -50, 
        clif: -50, 
    }, {
        id: 'wait',
        description: `Wait it out, it will move eventually...`,
        result: `Give them their space - you got it. Being patient in the wilderess gets you 10 instagram likes and 10 extra clif bars, nice work!`,
        insta: 10, 
        clif: 10, 
    }, {
        id: 'befriend',
        description: `Wow, that is a cutie, let's feed it!`,
        result: `You are going to feed the little guy?! Wow. Bold move. Unfortunately this will get you a lot of instagram likes (ugh), but cost you 25 clif bars`,
        insta: 20, 
        clif: -25, 
    }]
};

const wind = {
    id: 'wind',
    title: 'Suffer A Wind Storm',
    map: {},
    image: ,
    description: `Conditions can be rough when you're at 9,000 feet. You never know what's going to hit! Today a windstorm sweeps through the land, with raging winds upwards of 80mph. You see the trees start to sway, what do you do?`,
    choices: [{
        id: 'break',
        description: `Find some trees and take a break.`,
        result: `Finding shelter is always the best move when a storm hits in the woods. Your smart deicion-making earns you 15 clif bars (but, unfortunately, resting isn't great for your instagram... 0 likes)`,
        insta: 0, 
        clif: 15,
    }, {
        id: 'continue',
        description: `Let's press on! Keep going!`,
        result: `Ahhhh, famous last words. These winds are STRONG, so good luck! This choice is popular, and will make for some wild photos, so 5 instagram likes your way. Unfortunately, it will cost you 15 clif bars.`,
        insta: 5, 
        clif: -15, 
    }, {
        id: 'sos',
        description: `I'm scared. Someone call search & rescue.`,
        result: `It's okay to be scared in the woods, but this doesn't quite warrant an immediate rescue. This decision gets you 0 instagram likes and costs you 30 clif bars.`,
        insta: 0, 
        clif: -30, 
    }]
};

const questArray = [
    aasgard,
    goats,
    wind,
];

export default questArray;