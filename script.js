let degrees = {};

function init() {
    createPokeCubics();
}

function createPokeCubics() {
    let element = document.getElementById('content-id');
    element.innerHTML = '';
    for (let idx = 0; idx < 2; idx++){
        element.innerHTML += templatePokeCubeHTML(idx);
    }
}

function slider(ID, direction) {
    let box = document.getElementById(`box${ID}-id`);
    let rotationDirection = (direction === 1) ? -90 : 90;
    degrees[ID] = (degrees[ID] || 0) + rotationDirection;
    box.style.transform = `perspective(1000px) rotateY(${degrees[ID]}deg)`;
}




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