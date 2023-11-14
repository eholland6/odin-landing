const gridBtn = document.querySelector('#grid-btn');
gridBtn.addEventListener('click', function() {
    var xVal = document.querySelector('#cols').value;
    var yVal = document.querySelector('#rows').value;
    console.log(xVal);
    console.log(yVal);
    gridCreator(xVal, yVal);
})

function gridCreator(x, y) {
    numCells = x * y;
    const mainContainer = document.querySelector('#main-container');
    for (i=0; i<numCells; i++) {
        const div = document.createElement('div');
        div.textContent = 'I am a div boi!';
        mainContainer.appendChild(div)
    }
}