function templatePokeCubeHTML(ID, firstEvolution, secondEvolution, thirdEvolution, fourthEvolution, firstEvoImg, secondEvoImg, thirdEvoImg, fourthEvoImg) {

    const fourthImgElement = fourthEvoImg ? `<div class="imgBx"><img src="${fourthEvoImg}"></div>` : `<div class="imgBx"></div>`;
    const thirdImgElement = thirdEvoImg ? `<div class="imgBx"><img src="${thirdEvoImg}"></div>` : `<div class="imgBx"></div>`;
    const secondImgElement = secondEvoImg ? `<div class="imgBx"><img src="${secondEvoImg}"></div>` : `<div class="imgBx"></div>`;

    return /*html*/`
        <div id="content${ID}-id" class="content">
            <div id="family${ID}-id" class="box">
                <div class="card" style="--i:1;">
                    ${secondImgElement}
                    <div class="poke-name">
                        <h2>${secondEvolution}</h2>
                    </div>
                </div>
                <div class="card" style="--i:2;">
                    ${thirdImgElement}
                    <div class="poke-name">
                        <h2>${thirdEvolution}</h2>
                    </div>
                </div>
                <div class="card" style="--i:3;">
                    ${fourthImgElement}
                    <div class="poke-name">
                        <h2>${fourthEvolution}</h2>
                    </div>
                </div>
                <div class="card" style="--i:4;">
                    <div class="imgBx"><img src="${firstEvoImg}"></div>
                    <div class="poke-name">
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

