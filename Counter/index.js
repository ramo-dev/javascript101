const number = document.querySelector('.number')
const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')

value = 0;

increase.addEventListener('click',()=>{
    value++;
    number.textContent=value;
})
decrease.addEventListener('click',()=>{
    value--;
    number.textContent = value;
})