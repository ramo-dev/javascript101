const colorValue = document.querySelector('.color')
const body = document.querySelector('html')
const randomize = document.querySelector('.randomize')
const outputColor = document.querySelector('.randomized-color')
const strobe = document.querySelector('.strobe')
const flare = document.querySelector('.flare')
const colorPicker = document.querySelector('.color');
const colorPreview = document.querySelector('.color-preview');
const apply = document.querySelector('.apply')


let colors = ['Aqua','Azure','Beige','Black','Crimson','Cyan','Fuchsia','Gold','Green','Grey','Indigo','Ivory',	'Khaki',	'Lavender','Magenta','Maroon','Navy','Olive','Orange','Pink','Purple','Red','Pink','Blue','Tan','Turquoise','Violet','White','Yellow']


let pickedColor = ''
let intervalID = null

//color randomizer function
const colorRandomizer = (element) => {
    let random = Math.floor(Math.random() * colors.length)
    element.style.backgroundColor = colors[random]
    pickedColor = colors[random]
    return pickedColor
}
// colorRandomizer(body)
// console.log(pickedColor)


// get color value from input
colorPicker.addEventListener('input', (event) => {
    clearInterval(intervalID)
    const selectedColor = event.target.value;
    colorPreview.style.backgroundColor = selectedColor;
    apply.addEventListener('click',()=>{
        body.style.backgroundColor = selectedColor; 
        outputColor.textContent = `Selected Color: ${selectedColor}`;  
    })
});


//randomize color with the randomize button
randomize.addEventListener('click',()=>{
    clearInterval(intervalID)
    colorRandomizer(body)
    colorPreview.style.backgroundColor = pickedColor
    outputColor.innerHTML = `color : ${pickedColor}` 
})

//strobe colors using the strobe button
strobe.addEventListener('click', ()=> {
    outputColor.innerHTML = `Strobe mode selected!`
    clearInterval(intervalID)
    body.style.transition = '0s'
    colorPreview.style.transition = '0s'
    intervalID = setInterval(()=>{
        colorRandomizer(body)
        colorPreview.style.backgroundColor = pickedColor
    },500)
})

//flare colors using the flare button
flare.addEventListener('click', ()=>{
    outputColor.innerHTML = `Flare mode selected!`
    clearInterval(intervalID)
    body.style.backgroundColor = '#fff'
    body.style.transition = '1.5s'
    colorPreview.style.transition = '1.5s'
    outputColor.style.transition = '0.5s'
    intervalID = setInterval(()=>{
        colorRandomizer(body)
        colorPreview.style.backgroundColor = pickedColor
    },1500)
})