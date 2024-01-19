const bill = document.querySelector('.bill')
const tip = document.querySelector('.tip')

const calculate = document.querySelector('.calculate')


calculate.addEventListener('click', function(){

    // if(calc_bill || calc_tip == isNaN){
    //     alert('please input a value to begin')
    // }
    let calc_bill = parseFloat(bill.value)
    let calc_tip = (parseFloat(tip.value) / 100.00) * calc_bill

    let total = calc_bill + calc_tip
    const cost = total.toFixed(2)
    document.querySelector('.total').innerHTML = `$${cost}`
});








