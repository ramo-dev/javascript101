
const calculate = document.querySelector('.calculate')


calculate.addEventListener('click', function(){
    const input = document.querySelector('.date')
    const date = new Date(input.value)
    const userYear = date.getFullYear()//user year
    const current_date = new Date()
    const current_year = current_date.getFullYear()//2024
    

    const total = document.querySelector('.total')
    try{
        if (input.value.length == 0 || input.value.length < 0){
            total.innerHTML = `Please enter a valid year!`
        }
        else{
            let age = parseInt(current_year - userYear)
            total.innerHTML = `You are ${age} years old!`
        }
    }
    catch(e){
        console.log(e)

    }
})
