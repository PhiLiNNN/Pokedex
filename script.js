let degrees = {};
let data = []
const AMOUNT_OF_FAMILIES = 76; //  starting from one
const AMOUNT_OF_POKEMON = 20; 
const familyOfOne = [83,95,108,113,114,115,122,123,124,125,126,127,128,131,132,137,142,143,150,151]
const familyOfTwo = [19,21,23,25,27,35,37,39,41,46,48,50,52,54,56,58,72,77,79,81,84,86,88,90,96,98,100,102,104,106,109,111,116,118,120,129,138,140]
const familyOfThree = [1,4,7,10,13,16,29,32,43,60,63,66,69,74,92,144,147]
const familyOfFour = [133]

async function init() {
    await getPokemon();
    createPokeCubics();
    
}

function createPokeCubics() {
    let element = document.getElementById('content-id');
    element.innerHTML = '';
    for (let idx = 1; idx < 30; idx++){
        if(familyOfThree.includes(idx)) 
            
            element.innerHTML += templatePokeCubeHTML(idx, data[idx - 1].name, data[idx].name, data[idx + 1].name, '',
                                                      data[idx - 1].img, data[idx].img, data[idx + 1].img, '' );
        if(familyOfOne.includes(idx)) 
            element.innerHTML += templatePokeCubeHTML(idx, data[idx - 1].name, '','','',
                                                      data[idx - 1].img, '','','');
        if(familyOfTwo.includes(idx)) 
            element.innerHTML += templatePokeCubeHTML(idx, data[idx - 1].name, data[idx].name,'','',
                                                      data[idx - 1].img, data[idx].img, '','' );
        if(familyOfFour.includes(idx)) 
            element.innerHTML += templatePokeCubeHTML(idx, data[idx - 1].name, data[idx].name, data[idx + 1].name, data[idx + 2].name);
    }
}



function slider(ID, direction) {
    let box = document.getElementById(`family${ID}-id`);
    let rotationDirection = (direction === 1) ? -90 : 90;
    degrees[ID] = (degrees[ID] || 0) + rotationDirection;
    box.style.transform = `perspective(1000px) rotateY(${degrees[ID]}deg)`;
}

async function getPokemon() {
    for (let pokemon = 1; pokemon < 32; pokemon++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
        let response = await  fetch(url);
        let responseJson = await response.json();
        let pokeomData = {'name': responseJson['name'],
                          'img':responseJson.sprites.other.dream_world.front_default};
        data.push(pokeomData);   
    }
} 



// 151 

// async function includeHTML() {
//     let include = document.querySelectorAll('[w3-include-html]');
//     for (let i = 0; i < include.length; i++) {
//         const element = include[i];
//         let file = element.getAttribute("w3-include-html");
//         let resp = await fetch(file);
//         if(resp.ok) {
//              include[i].innerHTML = await resp.text();
//         } else {
//             include[i].innerHTML = 'Page not found';
//         }
//     }
// }