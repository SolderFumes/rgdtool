const recipes = {
    'Luck':            ['Accrue',    'Abate'],
    'Protection':      ['Fervor',    'Ardor'],
    'Regeneration':    ['Virulent',  'Theriac'],
    'Healing':         ['Fervor',    'Accrue'],
    'Stats Up':        ['Tenebrous', 'Gambol'],
    'Swiftness':       ['Gambol',    'Skew'],
    'Warping':         ['Abate',     'Ichor'],
    'Resistance':      ['Vigor',     'Ardor'],
    'Brawn':           ['Vigor',     'Ichor'],
    'Affluence':       ['Virulent',  'Lucre'],
    'Jumping':         ['Cavort',    'Lucre'],
    'Chance':          ['Cavort',    'Skew'],
    'Sustaining':      ['Tenebrous', 'Theriac'],
    'Ice Resistance':  ['Luminous',  'Algid'],
    'Fire Resistance': ['Luminous',  'Torrid'],
    'Balance':         ['Torrid',    'Algid'],
};
const potion_effects = {
    "Luck": "Gain 🍀 3; if you're the only player alive, gain 🍀 5 instead.",
    "Protection": "Gain ❤️ Max HP equal to 10 × World #.",
    "Regeneration": "Regenerate ❤️ HP equal to the Room #.",
    "Healing": "Heal ❤️ HP equal to 10 × World #.",
    "Stats Up": "Boost your stats when consumed.",
    "Swiftness": "Gain ➔ 3.",
    "Warping": "Warp forwards or backwards a world. (The direction this potion will warp in is only visible when picked up!)",
    "Resistance": "Gain 🛡 1 if you have no 🛡 Defense; then gain 🛡 2.",
    "Brawn": "Gain 💪 Strength equal to triple the World # when used.",
    "Affluence": "Gain 💰 Circuits equal to the Room #. Cannot be used in the room in which you acquired it.",
    "Jumping": "Gain ↑ 20.",
    "Chance": "Gain the effect of a random potion; then heal ❤️ 25.",
    "Sustaining": "Gain 💛 5; then heal ❤️ 25.",
    "Ice Resistance": "Gain immunity to water hazards, freezing, and icicles. Lasts for thirty rooms.",
    "Fire Resistance": "Gain immunity to fire hazards and taking burn damage. Lasts for thirty rooms.",
    "Balance": "Resets your ➔ Walkspeed and ↑ Jump power if they are below average; then gain ➔ 1 and ↑ 5."
};
const possibleBerries = ['Fervor', 'Ardor', 'Virulent', 'Theriac', 'Accrue', 'Tenebrous', 'Gambol', 'Skew', 'Abate', 'Ichor', 'Vigor', 'Lucre', 'Cavort', 'Luminous', 'Algid', 'Torrid'];

// *** BERRY STUFF ***
let hadBerries = [];
let berryContainer = document.getElementById('berryContainer');
let berryCards = [];
possibleBerries.forEach((berry) => {
    let card = document.createElement('div');
    card.className = 'berry';
    card.style.borderColor = 'grey'; //need to specify for weird dom stuff
    card.onclick = () => { clickBerry(card) };
    berryContainer.appendChild(card);

    let img = document.createElement('img');
    img.src = `/images/${berry}.gif`;
    
    let nameText = document.createElement('p');
    nameText.innerText = berry;
    
    card.appendChild(img);
    card.appendChild(nameText);
    berryCards.push(card);
});

function clickBerry(card) {
    let berryName = card.querySelector('p').innerText;
    if (card.style.borderColor == 'grey') {
        card.style.borderColor = 'green';
        hadBerries.push(berryName);
    }
    else {
        card.style.borderColor = 'grey';
        hadBerries.splice(hadBerries.indexOf(berryName), 1);
    }
    updatePotions();
}

//*** POTION STUFF ***
let potionContainer = document.getElementById('potionContainer');
let potionCards = [];

function checkCraftable() {
    let retList = [];
    for (let [name, recipe] of Object.entries(recipes)) {
        if (hadBerries.includes(recipe[0]) && hadBerries.includes(recipe[1])) {
            retList.push(name);
        }
    }
    console.log(retList);
    return retList;
}

function updatePotions() {
    let craftable = checkCraftable();
    //remove non-craftable potion cards
    potionCards.forEach((card) => {
        let potionName = card.querySelector('p');
        if (!craftable.includes(potionName)) {
            card.remove()
        }
    });

    //create new potion cards
    craftable.forEach((potionName) => {
        //if card doesn't already exist
        if (!potionCards.includes(potionName)) {
            let card = document.createElement('div');
            card.className = 'potion';
            potionContainer.appendChild(card);

            let img = document.createElement('img');
            img.src = `/images/${potionName}.gif`;

            let nameText = document.createElement('p');
            nameText.innerText = potionName;

            let effectText = document.createElement('p');
            effectText.innerText = potion_effects[potionName];

            let recipeText = document.createElement('p');
            recipeText.innerText = `${recipes[potionName][0]}, ${recipes[potionName][1]}`;

            let potionText = document.createElement('div');
            potionText.className = 'potionText';
            potionText.appendChild(nameText);
            potionText.appendChild(effectText);
            potionText.appendChild(recipeText);
            
            card.appendChild(img);
            card.appendChild(potionText);
            potionCards.push(card);
        }
    });
}