function templatePokeCubeHTML(ID, firstEvolution, secondEvolution, thirdEvolution, fourthEvolution,
                                firstEvoImg, secondEvoImg, thirdEvoImg, fourthEvoImg,
                                type, bg, shadow) {
    const fourthImgElement = fourthEvoImg ? `<div class="imgBx"><img src="${fourthEvoImg}"></div>
                                            <div class="poke-name ${bg}">
                                                <h2>${fourthEvolution}</h2>
                                            </div>` : `<div class="imgBx"></div>
                                            <div></div>` ;
    const thirdImgElement = thirdEvoImg ? `<div class="imgBx"><img src="${thirdEvoImg}"></div>
                                            <div class="poke-name ${bg}">
                                                <h2>${thirdEvolution}</h2>
                                            </div>` : `<div class="imgBx"></div>
                                            <div></div>` ;
    const secondImgElement = secondEvoImg ? `<div class="imgBx"><img src="${secondEvoImg}"></div>
                                            <div class="poke-name ${bg}">
                                                <h2>${secondEvolution}</h2>
                                            </div>` : `<div class="imgBx"></div>
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
                        <div class="imgBx"><img src="${firstEvoImg}"></div>
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
    const fourthImgElement = fourthEvoImg ? `<div class="imgBx"><img src="${fourthEvoImg}"></div>` : `<div class="imgBx"></div>`;                             
    return /*html*/`
        <div id="content${ID}-id" class="content">
            <div id="family${ID}-id" class="box mixShadow">
                <div class="card electric" style="--i:1;">
                    <div class="imgBx"><img src="${secondEvoImg}"></div>
                    <div class="poke-name electric-bg">
                        <h2>${secondEvolution}</h2>
                    </div>
                </div>
                <div class="card fire" style="--i:2;">
                    <div class="imgBx"><img src="${thirdEvoImg}"></div>
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
                    <div class="imgBx"><img src="${firstEvoImg}"></div>
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
                    <div class="imgBx"><img src="${secondEvoImg}"></div>
                    <div class="poke-name water-bg">
                        <h2>${secondEvolution}</h2>
                    </div>
                </div>
                <div class="card electric" style="--i:2;">
                    <div class="imgBx"><img src="${thirdEvoImg}"></div>
                    <div class="poke-name electric-bg">
                        <h2>${thirdEvolution}</h2>
                    </div>
                </div>
                <div class="card fire" style="--i:3;">
                    <div class="imgBx"><img src="${fourthEvoImg}"></div>
                    <div class="poke-name fire-bg">
                        <h2>${fourthEvolution}</h2>
                    </div>
                </div>
                <div class="card normal" style="--i:4;">
                    <div class="imgBx"><img src="${firstEvoImg}"></div>
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
