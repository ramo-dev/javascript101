let lists = document.querySelectorAll('.list');
let rightBox = document.querySelector('#right');
let leftBox = document.querySelector('#left');
let selected = null;

for(let list of lists){
    list.addEventListener("dragstart", (e)=>{
        selected = e.target;

        rightBox.addEventListener("dragover", (e)=>{
            e.preventDefault();
        });
        rightBox.addEventListener('drop', ()=>{
            rightBox.appendChild(selected);
            selected = null;
        });
        leftBox.addEventListener("dragover", (e)=>{
            e.preventDefault();
        });
        leftBox.addEventListener('drop', ()=>{
            leftBox.appendChild(selected);
            selected = null;
        });
    });
}
