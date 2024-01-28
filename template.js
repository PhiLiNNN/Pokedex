function templatePokeCubeHTML(ID, firstEvolution, secondEvolution, thirdEvolution, fourthEvolution) {
    return /*html*/`
        <div id="content${ID}-id" class="content">
            <div id="family${ID}-id" class="box">
                <div class="card" style="--i:1;">
                    <div class="imgBx"><img src="./img/1.png" alt=""></div>
                    <h2>${secondEvolution}</h2>
                </div>
                <div class="card" style="--i:2;">
                    <div class="imgBx"><img src="./img/2.png" alt=""></div>
                    <h2>${thirdEvolution}</h2>
                </div>
                <div class="card" style="--i:3;">
                    <div class="imgBx"><img src="./img/3.png" alt=""></div>
                    <h2>${fourthEvolution}</h2>
                </div>
                <div class="card" style="--i:4;">
                    <div class="imgBx"><img src="./img/3.png" alt=""></div>
                    <h2>${firstEvolution}</h2>
                </div>
            </div>
            <div class="btns">
                <div class="prev" onclick="slider(${ID}, -1)"></div>
                <div class="next" onclick="slider(${ID}, 1)"></div>
            </div>
        </div>
    `;
}
