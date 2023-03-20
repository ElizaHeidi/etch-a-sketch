 
const container = document.querySelector('#container');
const div = document.querySelector('div');
const button = document.querySelector('button');

// Create indiv div num times
const makeDivs = function(numDivs) {
   // removes existing grid and starts fresh
   while (container.hasChildNodes()) {
    container.removeChild(container.lastChild)
   }
   // creates divs
    for (i = 0; i < numDivs; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
}
}
div.addEventListener('mouseover', function(e) {
    e.target.style.background = 'goldenrod';
})

// When clicked, button fires user prompt asks for number of squarws with max at 100.
// button creates new grid with x squares in same 960px space.   

button.addEventListener('click', () => {
let userSize = Number(prompt('Type how many squares you want your canvas to have. Enter no more than 100.', '100'))

while (userSize >100 ) {
    const userSize = Number(prompt('Number must be less than 100'));

} makeDivs(userSize * userSize);
})


   