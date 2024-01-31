function templatePokeCubeHTML(ID, firstEvolution, secondEvolution, thirdEvolution, fourthEvolution,
                                firstEvoImg, secondEvoImg, thirdEvoImg, fourthEvoImg,
                                type, bg, shadow) {
                            
    const fourthImgElement = fourthEvoImg ? /*html*/`<div class="imgBx" onclick="openPokeCard(${ID + 2})"><img src="${fourthEvoImg}"></div>
                                            <div class="poke-name ${bg}">
                                                <h2>${fourthEvolution}</h2>
                                            </div>` : `<div class="imgBx cursor"></div>
                                            <div></div>` ;
    const thirdImgElement = thirdEvoImg ? /*html*/`<div class="imgBx" onclick="openPokeCard(${ID + 1})"><img src="${thirdEvoImg}"></div>
                                            <div class="poke-name ${bg}">
                                                <h2>${thirdEvolution}</h2>
                                            </div>` : `<div class="imgBx cursor"></div>
                                            <div></div>` ;
    const secondImgElement = secondEvoImg ? /*html*/`<div class="imgBx" onclick="openPokeCard(${ID })"><img src="${secondEvoImg}"></div>
                                            <div class="poke-name ${bg}">
                                                <h2>${secondEvolution}</h2>
                                            </div>` : `<div class="imgBx cursor"></div>
                                            <div></div>` ;
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
                        <div class="imgBx" onclick="openPokeCard(${ID - 1})"><img src="${firstEvoImg}"></div>
                        <div class="poke-name ${bg}">
                            <h2>${firstEvolution}</h2>
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

function templatePokeCubeOfSpecialThreeHTML(ID, firstEvolution, secondEvolution, thirdEvolution, fourthEvolution,
                                firstEvoImg, secondEvoImg, thirdEvoImg, fourthEvoImg) {
    const fourthImgElement = fourthEvoImg ? `<div class="imgBx"><img src="${fourthEvoImg}"></div>` : `<div class="imgBx cursor"></div>`;                             
    return /*html*/`
        <div id="content${ID}-id" class="content">
            <div id="family${ID}-id" class="box mixShadow">
                <div class="card electric" style="--i:1;">
                    <div class="imgBx" onclick="openPokeCard(${ID})"><img src="${secondEvoImg}"></div>
                    <div class="poke-name electric-bg">
                        <h2>${secondEvolution}</h2>
                    </div>
                </div>
                <div class="card fire" style="--i:2;">
                    <div class="imgBx" onclick="openPokeCard(${ID + 1})"><img src="${thirdEvoImg}"></div>
                    <div class="poke-name fire-bg">
                        <h2>${thirdEvolution}</h2>
                    </div>
                </div>
                <div class="card blank" style="--i:3;">
                    ${fourthImgElement}
                    <div class="poke-name">
                        <h2>${fourthEvolution}</h2>
                    </div>
                </div>
                <div class="card ice" style="--i:4;">
                    <div class="imgBx" onclick="openPokeCard(${ID - 1})"><img src="${firstEvoImg}"></div>
                    <div class="poke-name ice-bg">
                        <h2>${firstEvolution}</h2>
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


function templatePokeCubeOfSpecialFourHTML(ID, firstEvolution, secondEvolution, thirdEvolution, fourthEvolution,
                                firstEvoImg, secondEvoImg, thirdEvoImg, fourthEvoImg) {
    return /*html*/`
        <div id="content${ID}-id" class="content">
            <div id="family${ID}-id" class="box mixShadowfour">
                <div class="card water" style="--i:1;">
                    <div class="imgBx" onclick="openPokeCard(${ID})"><img src="${secondEvoImg}"></div>
                    <div class="poke-name water-bg">
                        <h2>${secondEvolution}</h2>
                    </div>
                </div>
                <div class="card electric" style="--i:2;">
                    <div class="imgBx" onclick="openPokeCard(${ID + 1})"><img src="${thirdEvoImg}"></div>
                    <div class="poke-name electric-bg">
                        <h2>${thirdEvolution}</h2>
                    </div>
                </div>
                <div class="card fire" style="--i:3;">
                    <div class="imgBx" onclick="openPokeCard(${ID + 2})"><img src="${fourthEvoImg}"></div>
                    <div class="poke-name fire-bg">
                        <h2>${fourthEvolution}</h2>
                    </div>
                </div>
                <div class="card normal" style="--i:4;">
                    <div class="imgBx" onclick="openPokeCard(${ID - 1})"><img src="${firstEvoImg}"></div>
                    <div class="poke-name normal-bg">
                        <h2>${firstEvolution}</h2>
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

function templatePokemonCardHTML(ID, name, bg, img, isLeftButtonActive, isRightButtonActive) {
    if(ID == 149) 
        bg = 'mewtow'
    if(ID == 150) 
        bg = 'mew'
    return /*html*/`
            <div class=" wrapper">
            <div class="pokemon-card">
                <div class="card-header ${bg}">
                    <div class="menu">
                        <button onclick="closePokemonCard()">x</button>
                        <h1>${name}</h1>
                        <h2>#${ID}</h2>
                    </div>
                    <div id="types-id" class="subheader-type"></div>
                </div>
                <div class="stats-container">
                    <img src="${img}" alt="">
                    <div class="toggle-section">
                        <button onclick="switchPokemon(-1, ${ID})" ${isLeftButtonActive ? 'disabled' : ''}>x</button>
                        <h2>About</h2>
                        <button onclick="switchPokemon(1, ${ID})" ${isRightButtonActive ? 'disabled' : ''}>x</button>
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
