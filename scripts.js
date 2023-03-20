 
const container = document.querySelector('#container');


// Create indiv div num times
const makeDivs = function(numDivs) {
    for (i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        container.appendChild(div);
}
}

makeDivs(256);

