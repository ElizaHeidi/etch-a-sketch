 
const container = document.querySelector('#container');
const div = document.querySelector('div');
const button = document.querySelector('button');

// Create indiv div num times
const makeDivs = function(numDivs) {
    for (i = 0; i < numDivs; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
}
}
makeDivs(256);

div.addEventListener('mouseover', function(e) {
    e.target.style.background = 'goldenrod';
})

// When clicked, button fires user prompt asks for number of squarws with max at 100.
//prompt('Type how many squares you want your canvas to BeforeUnloadEvent. Enter no more than 100.', '100') 
// button creates new grid with x squares in same 960px space.   

const squares = function() {
    prompt('Type how many squares you want your canvas to have. Enter no more than 100.', '100')
}
   