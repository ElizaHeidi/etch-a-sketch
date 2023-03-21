 
const container = document.querySelector('#container');
const div = document.querySelector('div');
const button = document.querySelector('button');


const makeDivs = function(numDivs) {
   // removes existing grid and starts fresh
   while (container.hasChildNodes()) {
    container.removeChild(container.lastChild)
   }
   // creates individual divs
    for (i = 0; i < numDivs; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
}
}
// Permanently changes div color on mouseover
div.addEventListener('mouseover', function(e) {
    e.target.style.background = 'goldenrod';
})

// When clicked, button fires user prompt asks for number of squares with max at 100
button.addEventListener('click', () => {
let userSize = Number(prompt('Type how many squares you want your canvas to have. Must be less than 100.', '42'))

// If user inputs > 100, re-fires prompt with alt message 
while (userSize >100 ) {
    const userSize = Number(prompt('Number must be less than 100'));

} 
//automatically size container grid rows and columns based on userSize
container.style.gridTemplateRows = `repeat(${userSize}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${userSize}, 1fr)`;

makeDivs(userSize * userSize);
})


   