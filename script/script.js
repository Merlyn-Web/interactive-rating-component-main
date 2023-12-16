//sa se class ak id mwen rale nan html ki pemet mwen controle boutton yo epi kote note moun nan chwazi a pral paret
const allstars = document.querySelectorAll('.star');
let currentrating = document.getElementById('currentrating');


//sa se id mwen rale nan html la ki pral pemet mwen fe interaksyon yo 
let container = document.getElementById('container');
let button = document.getElementById('submit');
let containeraff = document.getElementById('containeraff');


//sa se fonksyon ki pemet mete numero boutton an lew klike
allstars.forEach((star, i) => {
    star.onclick = function () {
        let current_star_level = i + 1;
        currentrating.innerText = `${current_star_level}`
    }
})


//sa se fonksyon ki pemet retire premye menu an epi afiche dezyem menu an lew klike sou boutton an
button.onclick = function remove() {
    container.classList.add('inactive')
    containeraff.classList.add('container2aff')
}