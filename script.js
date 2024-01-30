let degrees = {};
let data = []
let rotateList = [];
let counter = 0;
const familyOfOne = [83,95,108,113,114,115,122,123,124,125,126,127,128,131,132,137,142,143,150,151]
const familyOfTwo = [19,21,23,25,27,35,37,39,41,46,48,50,52,54,56,58,72,77,79,81,84,86,88,90,96,98,100,102,104,106,109,111,116,118,120,129,138,140]
const familyOfThree = [1,4,7,10,13,16,29,32,43,60,63,66,69,74,92,144,147]
const familyOfFour = [133]
const typeBackgrounds = {
    'fire': 'fire',
    'water': 'water',
    'grass': 'grass',
    'bug': 'bug',
    'normal': 'normal',
    'poison': 'poison',
    'psychic': 'psychic',
    'fighting': 'fighting',
    'rock': 'rock',
    'ghost': 'ghost',
    'ground': 'ground',
    'fairy': 'fairy',
    'ice': 'ice',
    'dragon': 'dragon'
};


async function init() {
    let start = 1;
    let amount = 28
    await getPokemon(start,amount);
    createPokeCubics(start, amount);
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


function createPokeCubics(start, amount) {
    let element = document.getElementById('content-id');
    for (let idx = start; idx < amount; idx++){
        if(idx == 151) {
            element.innerHTML += templatePokeCubeHTML(idx, data[idx - 1].name, '','','', data[idx - 1].img, '','','', 'mew');
            rotateList.push(idx);
            counter++;
        }
        if(idx == 144) {
            element.innerHTML += templatePokeCubeOfSpecialThreeHTML(idx, data[idx - 1].name, data[idx].name, data[idx + 1].name, '',
                                                      data[idx - 1].img, data[idx].img, data[idx + 1].img, '', 'ice','electric','fire');
            rotateList.push(idx);
            counter++;
        }
        if(familyOfThree.includes(idx) && idx !==144) {
            let type = handlerPokemonTypeBg(data[idx - 1].type);
            element.innerHTML += templatePokeCubeHTML(idx, data[idx - 1].name, data[idx].name, data[idx + 1].name, '',
                                                      data[idx - 1].img, data[idx].img, data[idx + 1].img, '', type);
            rotateList.push(idx);
            counter++;
        }
        if(familyOfOne.includes(idx) && idx !==151) {
            let type = handlerPokemonTypeBg(data[idx - 1].type);
            element.innerHTML += templatePokeCubeHTML(idx, data[idx - 1].name, '','','', data[idx - 1].img, '','','',  type);
            rotateList.push(idx);
            counter++;
        }
        if(familyOfTwo.includes(idx)) {
            let type = handlerPokemonTypeBg(data[idx - 1].type);
            element.innerHTML += templatePokeCubeHTML(idx, data[idx - 1].name, data[idx].name,'','',
                                                        data[idx - 1].img, data[idx].img, '','' , type);
            rotateList.push(idx);
            counter++;
        } 
        if(familyOfFour.includes(idx)) {
            let type = handlerPokemonTypeBg(data[idx - 1].type);
            element.innerHTML += templatePokeCubeHTML(idx, data[idx - 1].name, data[idx].name, data[idx + 1].name, data[idx + 2].name,
                                                      data[idx - 1].img, data[idx].img, data[idx + 1].img, data[idx + 2].img, type);
            rotateList.push(idx);
            counter++;
        } 
    }
}


function handlerPokemonTypeBg(type) {
    if (type in typeBackgrounds) 
        return typeBackgrounds[type];
    else 
        return type;
}


function slider(ID, direction) {
    let box = document.getElementById(`family${ID}-id`);
    let rotationDirection = (direction === 1) ? -90 : 90;
    degrees[ID] = (degrees[ID] || -30) + rotationDirection;
    box.style.transform = `perspective(1000px) rotateY(${degrees[ID]}deg)`;

}


async function getPokemon(start, amount) {
    for (let pokemonID = start; pokemonID <= amount; pokemonID++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonID;
        let response = await  fetch(url);
        let responseJson = await response.json();
        let pokeomData = {'name': responseJson['name'],
                          'img':responseJson.sprites.other.dream_world.front_default,
                          'type':responseJson.types[0].type.name};        
        data.push(pokeomData);
    }
} 


async function loadPokemon() {
    let lastPokemonIndex = data.length;
    let start = lastPokemonIndex + 1;
    let amount = start + 30;
    await getPokemon(start,amount);
    createPokeCubics(start, amount);
    disableLoadBtn();
    handlerRotation();
}


function disableLoadBtn() {
    let element = document.getElementById('loadButton');
    if (data.length == 152) 
        element.classList.add('d-none');
}