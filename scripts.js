 
const container = document.querySelector('#container');
const div = document.querySelector('div');

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



   