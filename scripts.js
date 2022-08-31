const grid = document.querySelector('.grid');
const sizeInput = document.querySelector('.size-input');


 createGrid(256);

function createGrid(squares) {
    for(let i = 0; i < squares; i++){ 
        let createSquare = document.createElement('div');
        createSquare.className = 'square';
        grid.append(createSquare);
        createSquare.addEventListener("mouseover", func, false);
        // square.addEventListener("mouseout", func1, false);
        grid.append(createSquare);
            function func()
        { 
            createSquare.style.backgroundColor = 'blue';
        }
    }
}

function defineGrid() {
    let gridWidth = prompt('Enter grid size <100');
    if (gridWidth > 100 || gridWidth < 0) {
        alert('wtf u are doing saomi chan')
        return;
    }
    console.log('defined grid ' + gridWidth);
    grid.style.gridTemplateColumns = `repeat(${gridWidth}, auto)`;
    grid.innerHTML = '';
    createGrid(gridWidth*gridWidth);
}

sizeInput.addEventListener('click', defineGrid, false);

// function func1()
// {  
//    square.style.("style", "background-color:white;")
// }
