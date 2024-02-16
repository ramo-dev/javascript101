let rightBox = document.querySelector('#right');
let leftBox = document.querySelector('#left');
const button = document.querySelector('button');
let trashContainer = document.querySelector('.trash-container');
let selected = null;

button.addEventListener('click', addNote);

function addNote() {
    const noteInput = document.querySelector('input');
    const note = noteInput.value.trim();
    if (note !== '') {
        const card = createCard(note);
        leftBox.appendChild(card);
        noteInput.value = ''; 
    } else {
        alert('Please enter a non-empty note.');
    }
}

function createCard(note) {
    const card = document.createElement('div');
    card.classList.add('list');
    card.draggable = true;
    card.innerHTML = `
        <img src="icon.png" alt="" draggable="false">
        ${note}
    `;
    card.addEventListener('dragstart', handleDragStart);
    return card;
}

function handleDragStart(e) {
    selected = e.target;
}

function handleDrop(e) {
    e.preventDefault();
    if (selected) {
        e.target.appendChild(selected);
    }
    trashContainer.classList.remove('drag-over');
}

function handleDragOver(e) {
    e.preventDefault();
    trashContainer.classList.add('drag-over');
}

function handleDragLeave() {
    trashContainer.classList.remove('drag-over');
}

function handleTrashDrop() {
    if (selected) {
        selected.remove();
        selected = null;
    }
    trashContainer.classList.remove('drag-over');
    setTimeout(()=> {
        alert('Note deleted successfully!😊⚡')
    },1)
    
    
}

rightBox.addEventListener('drop', handleDrop);
rightBox.addEventListener('dragover', handleDragOver);
leftBox.addEventListener('drop', handleDrop);
leftBox.addEventListener('dragover', handleDragOver);
trashContainer.addEventListener('drop', handleTrashDrop);
trashContainer.addEventListener('dragover', handleDragOver);
trashContainer.addEventListener('dragleave', handleDragLeave);
