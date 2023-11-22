const gridBtn = document.querySelector('#grid-btn');
gridBtn.addEventListener('click', () => {
    const mainDiv = document.querySelector('#main-container');
    while (mainDiv.lastElementChild) {
        mainDiv.removeChild(mainDiv.lastElementChild)
    }
    var xVal = document.querySelector('#cols').value;
    var yVal = document.querySelector('#rows').value;
    console.log(xVal);
    console.log(yVal);
    gridCreator(xVal, yVal);
})

function gridCreator(x, y) {
    numCells = x * y;
    const mainContainer = document.querySelector('#main-container');
    gridColumns = ''
    for (i=0; i<x; i++) {
        gridColumns = gridColumns.concat('auto ')
    }
    mainContainer.style['grid-template-columns'] = gridColumns;
    for (i=0; i<numCells; i++) {
        const div = document.createElement('div');
        div.classList.add('etch-cell');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'gray'
        })
        mainContainer.appendChild(div)
    }
}