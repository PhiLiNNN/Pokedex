const typeBackgrounds = {
    'fire': 'fire',
    'water': 'water',
    'grass': 'grass',
    'electric': 'electric',
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
const setToFlying = ['Beedrill', 'Venomoth', 'Geodude', 'Magnemite', 'Magneton', 'Gastly', 'Haunter', 'Koffing', 'Weezing', 'Mew']; //add pokemon for flying effect with class"bottom"
const setNotToFlying =['Pidgey', 'Spearow', 'Farfetchd', 'Doduo', 'Dodrio'] //add pokemon to remove flying effect"
let fourthImgElement;
let thirdImgElement;
let secondImgElement;
let firstImgElement;


function handlerPokemonTypeBg(type) {
    if (type in typeBackgrounds) 
        return typeBackgrounds[type];
    else 
        return type;
}


function emptyCardHTML() {
    return /*html*/ `<div class="imgBx cursor"></div>` ;
}


function fillCardHTML(ID) {
    const type = handlerPokemonTypeBg(data[ID].type);
    const bg = type + '-bg';
    if ((data[ID].all_types[1] == 'flying' || setToFlying.includes(data[ID].name)) && !setNotToFlying.includes(data[ID].name)) {
        return /*html*/`
            <div class="imgBx flying" onclick="openPokeCard(${ID })">
                <img src="${data[ID].imgAnimated}">
            </div>
            <div class="poke-name ${bg}">
                <h2>${data[ID].name}</h2>
            </div>`;
    }
    else {
        return /*html*/`
            <div class="imgBx" onclick="openPokeCard(${ID })">
                <img src="${data[ID].imgAnimated}">
            </div>
            <div class="poke-name ${bg}">
                <h2>${data[ID].name}</h2>
            </div>`;
    }
}


function checkFamilySize(ID, family) {
    firstImgElement =  fillCardHTML(ID - 1);
    if(family == 3) {
        fourthImgElement = emptyCardHTML();
        thirdImgElement =  fillCardHTML(ID + 1);
        secondImgElement =  fillCardHTML(ID);
    } else if(family == 2) {
        fourthImgElement = emptyCardHTML();
        thirdImgElement = emptyCardHTML();
        secondImgElement =  fillCardHTML(ID); 
        
    } else if(family == 1) {
        fourthImgElement = emptyCardHTML();
        thirdImgElement = emptyCardHTML();
        secondImgElement = emptyCardHTML();
    }
}


function templatePokeCubeHTML(ID, family) {
    let type = handlerPokemonTypeBg(data[ID - 1].type);
    checkFamilySize(ID, family);
    const shadow = type + 'Shadow';
    if (ID == 150) 
        type = 'mewtow'
    if (ID == 151) 
        type = 'mew'
    return /*html*/`
        <div id="content${ID}-id" class="content">
                <div id="family${ID}-id" class="box ${shadow}">
                    <div class="card ${type}" style="--i:1;">
                        ${secondImgElement}
                    </div>
                    <div class="card ${type}" style="--i:2;">
                        ${thirdImgElement}
                    </div>
                    <div class="card ${type}" style="--i:3;">
                        ${fourthImgElement}
                    </div>
                    <div class="card ${type}" style="--i:4;">
                        ${firstImgElement}
                    </div>
                </div>
            <div class="btns">
                <div class="prev" onclick="slider(${ID}, -1)"></div>
                <div class="next" onclick="slider(${ID}, 1)"></div>
            </div>
        </div>
    `;
}


function templatePokeCubeOfSpecialThreeHTML(ID) {     
    return /*html*/`
        <div id="content${ID}-id" class="content">
            <div id="family${ID}-id" class="box mixShadow">
                <div class="card electric" style="--i:1;">
                    <div class="imgBx flying" onclick="openPokeCard(${ID})"><img src="${data[ID].imgAnimated}"></div>
                    <div class="poke-name electric-bg">
                        <h2>${data[ID].name}</h2>
                    </div>
                </div>
                <div class="card fire" style="--i:2;">
                    <div class="imgBx flying" onclick="openPokeCard(${ID + 1})"><img src="${data[ID + 1].imgAnimated}"></div>
                    <div class="poke-name fire-bg">
                        <h2>${data[ID + 1].name}</h2>
                    </div>
                </div>
                <div class="card blank" style="--i:3;">
                    <div class="imgBx cursor"></div>
                    <div class="poke-name">
                        <h2></h2>
                    </div>
                </div>
                <div class="card ice" style="--i:4;">
                    <div class="imgBx flying" onclick="openPokeCard(${ID - 1})"><img src="${data[ID - 1].imgAnimated}"></div>
                    <div class="poke-name ice-bg">
                        <h2>${data[ID - 1].name}</h2>
                    </div>
                </div>
            </div>
            <div class="btns">
                <div class="prev" onclick="slider(${ID}, -1)"></div>
                <div class="next" onclick="slider(${ID}, 1)"></div>
            </div>
        </div>
    `;
}


function templatePokeCubeOfSpecialFourHTML(ID) {
    return /*html*/`
        <div id="content${ID}-id" class="content">
            <div id="family${ID}-id" class="box mixShadowfour">
                <div class="card water" style="--i:1;">
                    <div class="imgBx" onclick="openPokeCard(${ID})"><img src="${data[ID].imgAnimated}"></div>
                    <div class="poke-name water-bg">
                        <h2>${data[ID].name}</h2>
                    </div>
                </div>
                <div class="card electric" style="--i:2;">
                    <div class="imgBx" onclick="openPokeCard(${ID + 1})"><img src="${data[ID + 1].imgAnimated}"></div>
                    <div class="poke-name electric-bg">
                        <h2>${data[ID + 1].name}</h2>
                    </div>
                </div>
                <div class="card fire" style="--i:3;">
                    <div class="imgBx" onclick="openPokeCard(${ID + 2})"><img src="${data[ID + 2].imgAnimated}"></div>
                    <div class="poke-name fire-bg">
                        <h2>${data[ID + 2].name}</h2>
                    </div>
                </div>
                <div class="card normal" style="--i:4;">
                    <div class="imgBx" onclick="openPokeCard(${ID - 1})"><img src="${data[ID - 1].imgAnimated}"></div>
                    <div class="poke-name normal-bg">
                        <h2>${data[ID - 1].name}</h2>
                    </div>
                </div>
            </div>
            <div class="btns">
                <div class="prev" onclick="slider(${ID}, -1)"></div>
                <div class="next" onclick="slider(${ID}, 1)"></div>
            </div>
        </div>
    `;
}


function templatePokemonCardHTML(ID, isLeftButtonActive, isRightButtonActive,) {
    let name = data[ID].name;
    let background  = data[ID].type;
    let img = data[ID].img;
    if(ID == 149) 
        background = 'mewtow'
    if(ID == 150) 
        background = 'mew'
    return /*html*/`
            <div class=" wrapper">
            <div id="pokemon-card-id" class="pokemon-card">
                <div  class="card-header ${background}">
                    <div class="menu ">
                        <a  onclick="closePokeCard()">
                            <img class="close-btn" src="./img/close.svg" alt="" >
                        </a>
                        <h1>${name}</h1>
                        <h2>#${ID + 1}</h2>
                    </div>
                    <div id="types-id" class="subheader-type"></div>
                </div>
                <div class="stats-container">
                    <div>
                        <img class="pokemon-image" src="${img}" alt="">
                    </div>
                    <div class="toggle-section">
                        <button onclick="switchPokemon(-1, ${ID}); event.stopPropagation();" ${isLeftButtonActive ? 'disabled' : ''}>
                            <svg class="svg ${data[ID].type}-bg ${isLeftButtonActive ? 'svg-disabled' : ''}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                            </svg>
                        </button>
                        <h2>About</h2>
                        <button onclick="switchPokemon(1, ${ID}); event.stopPropagation();" ${isRightButtonActive ? 'disabled' : ''}>
                            <svg class="svg ${data[ID].type}-bg ${isRightButtonActive ? 'svg-disabled' : ''}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                            </svg>
                        </button>
                    </div>  
                    <div class="about-container">
                        <div class="left">
                            <div>Height</div>
                            <div>Weight</div>
                            <div>Abilities</div>
                        </div>
                        <div id="abilities-id" class="right"></div>
                    </div>
                    <h2>Base Stats</h2>
                    <div class="stats"><canvas id="myChart"></canvas></div>
                </div>
            </div>
        </div>
    `;
}


function templatePokemonPhysicalStatsHTML(height, Weight) {
    return /*html*/`
        <div id="abilities-id" class="right">
            <div>${height}</div>
            <div>${Weight}</div>
        </div>     
     `;
}
