const sqaures = document.querySelector('.squares');
const createSqaure = document.createElement('div');

for(let i = 0; i < 256; i++){ 
    const createSqaure = document.createElement('div');
    createSqaure.className = 'square';
    sqaures.append(createSqaure);
}

