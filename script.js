let degrees = {};
let data = []
let rotateList = [];
let counter = 0;
const familyOfOne = [83,95,108,113,114,115,122,123,124,125,126,127,128,131,132,137,142,143,150,151]
const familyOfTwo = [19,21,23,25,27,35,37,39,41,46,48,50,52,54,56,58,72,77,79,81,84,86,88,90,98,100,102,104,106,109,111,116,118,120,129,138,140]
const familyOfThree = [1,4,7,10,13,16,29,32,43,60,63,66,69,74,92,96,144,147]
const familyOfFour = [133]

async function init() {
    let start = 1;
    let amount = 28
    await getPokemonData(start,amount);
    createPokeCubes(start, amount);
    handlerRotation();
    
}


function handlerRotation() {
    if (counter === 11) 
        rotateCube(0);
    else if (counter === 25) 
        rotateCube(11);
    else if (counter === 38) 
        rotateCube(25);
    else if (counter === 55) 
        rotateCube(38);
    else if (counter === 75) 
        rotateCube(55);
    selectCubesToHover();
}

function rotateCube(step) {
    rotateList.slice(step).forEach(value => {
            initialRotate(value, 1);
        });
}


function selectCubesToHover() {
    let boxElemente = document.querySelectorAll('.card');
    boxElemente.forEach(function (boxElement) {
        let familyBox = boxElement.closest('.box');
        let familyBoxID = familyBox.id;
        let familyNumber = +familyBoxID.replace('family', '').replace('-id', '');
        createHoverListeners(familyBox, familyNumber);
    }); 
}


function initialRotate(ID, direction) {
    let box = document.getElementById(`family${ID}-id`);
    let rotationDirection = (direction === 1) ? 0 : 30;
    degrees[ID] = (degrees[ID] || -30) + rotationDirection;
    box.style.transform = `perspective(1000px) rotateY(${degrees[ID]}deg)`;
}


function createHoverListeners(familyElement, familyID) {
    if (degrees[familyID] !== 0) {
        familyElement.addEventListener('mouseenter', function() {
            familyElement.style.transform = `perspective(1000px) rotateY(${degrees[familyID] + 30}deg)`;
        });
        familyElement.addEventListener('mouseleave', function() {
            familyElement.style.transform = `perspective(1000px) rotateY(${degrees[familyID] - 0}deg)`;
        });
    }
}


function createPokeCubes(start, amount) {
    let element = document.getElementById('content-id');
    for (let idx = start; idx < amount; idx++){
        if(idx == 144) {
            element.innerHTML += templatePokeCubeOfSpecialThreeHTML(idx);
            helperFunction(idx);
        }
        if(familyOfThree.includes(idx) && idx !==144) {
            element.innerHTML += templatePokeCubeHTML(idx, 3);
            helperFunction(idx);
        }
        if(familyOfOne.includes(idx)) {
            element.innerHTML += templatePokeCubeHTML(idx, 1);
            helperFunction(idx);
        }
        if(familyOfTwo.includes(idx)) {
            element.innerHTML += templatePokeCubeHTML(idx, 2);
            helperFunction(idx);
        } 
        if(familyOfFour.includes(idx)) {
            element.innerHTML += templatePokeCubeOfSpecialFourHTML(idx);
            helperFunction(idx);
        } 
    }
}

function helperFunction(idx) {
    rotateList.push(idx);
    counter++;
}

function slider(ID, direction) {
    let box = document.getElementById(`family${ID}-id`);
    let rotationDirection = (direction === 1) ? -90 : 90;
    degrees[ID] = (degrees[ID] || -30) + rotationDirection;
    box.style.transform = `perspective(1000px) rotateY(${degrees[ID]}deg)`;

}


async function getPokemonData(start, amount) {
    for (let pokemonID = start; pokemonID <= amount; pokemonID++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonID;
        let response = await  fetch(url);
        let imgAnimated = `https://raw.githubusercontent.com/geekygreek7/animated-pokemon-gifs/master/${pokemonID}.gif`;
        let responseJson = await response.json();
        
        let pokemonData = {'name': responseJson.name,
                          'img': responseJson.sprites.other.home.front_default,  
                          'imgAnimated': imgAnimated,
                          'type':responseJson.types[0].type.name,
                          'base_stat_name': [], 
                          'all_types': [],
                          'all_ability': [],
                          'physicalStats': [responseJson.height,responseJson.weight]}; 
        getPokemonStats(responseJson, pokemonData); 
        getPokemonAllTypes(responseJson, pokemonData); 
        getPokemonAbilities(responseJson, pokemonData); 
        data.push(pokemonData);
        

    }
    
} 

function pokemonMoves(responseJson, pokemonData) {
  for (let move of responseJson.moves) {
        pokemonData.all_moves.push(move.moves.name);
    }
}
function getPokemonAbilities(responseJson, pokemonData) {
    for (let ability of responseJson.abilities) {
        pokemonData.all_ability.push(ability.ability.name);
    }
}
function getPokemonStats(responseJson, pokemonData) {
    for (let stat of responseJson.stats) {
        pokemonData.base_stat_name.push(stat.base_stat);
    }
}
function getPokemonAllTypes(responseJson, pokemonData) {
    for (let type of responseJson.types) {
        pokemonData.all_types.push(type.type.name);
    }
}


async function loadPokemon() {
    let lastPokemonIndex = data.length;
    let start = lastPokemonIndex + 1;
    let amount = start + 30;
    await getPokemonData(start,amount);
    createPokeCubes(start, amount);
    disableLoadBtn();
    handlerRotation();
}


function disableLoadBtn() {
    let element = document.getElementById('loadButton');
    if (data.length == 152) 
        element.classList.add('d-none');
}


function openPokeCard(ID) {
    let element = document.getElementById('pokemon-popup-id');
    element.classList.remove('d-none');
    document.body.style.overflow = 'hidden';
    const disableBtn = disablePokemonSwitchBtn(ID);
    element.innerHTML = templatePokemonCardHTML(ID, disableBtn[0], disableBtn[1]);
    
    createPokemonType(ID);
    createPokemonAbout(ID);
    renderChart(ID);

}

document.addEventListener("click", function (event) {
  let headerSection = document.querySelector(".card-header");
  let statsSection = document.querySelector(".stats-container");
  let overview = document.getElementById("content-id");


  if (!statsSection.contains(event.target) && !headerSection.contains(event.target) && !overview.contains(event.target)) {
    closePokeCard();
  }
});

function closePokeCard() {
    let element = document.getElementById('pokemon-popup-id');
    element.classList.add('d-none');
    document.body.style.overflow = 'auto';
}

function createPokemonType(ID) {
    const element = document.getElementById('types-id');
    for (let type of data[ID].all_types) {
        const capitalizedType = firstLetterUppercase(type);
        element.innerHTML += `<div class="card-type ${data[ID].type + '-bg'}">${capitalizedType}</div>`;
    }
}

function createPokemonAbout(ID) {
    const element = document.getElementById('abilities-id');
    element.innerHTML =  templatePokemonPhysicalStatsHTML(data[ID].physicalStats[0], data[ID].physicalStats[1]);
    for (let ability of data[ID].all_ability) {
        element.innerHTML += `<div>${ability}</div>`;
    }
}

function firstLetterUppercase(word) {
    return word[0].toUpperCase() + word.substring(1)
}

function switchPokemon(direction, ID) {
    if (direction == 1) 
        ID += 1;
    else if (direction == -1) 
        ID -= 1;
    openPokeCard(ID);

}

function disablePokemonSwitchBtn(ID) {
    if (data[ID + 1 ] == undefined)
        return [false, true];
    if (ID == 0) 
        return [true, false];
    if (ID == 150)
        return [false, true];
    return  [false, false]
}