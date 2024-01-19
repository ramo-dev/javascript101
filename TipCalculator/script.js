const bill = document.querySelector('.bill');
const tip = document.querySelector('.tip');
const calculateButton = document.getElementById('calculateButton');

calculateButton.addEventListener('click', function() {
  let calc_bill = parseFloat(bill.value);
  let calc_tip = (parseFloat(tip.value) / 100.00) * calc_bill;

  let total = calc_bill + calc_tip;
  const cost = total.toFixed(2);
  document.querySelector('.total').innerHTML = `$${cost}`;
});


calculateButton.classList.add('disabled');
calculateButton.disabled = true;


bill.addEventListener('input', toggleCalculateButton);
tip.addEventListener('input', toggleCalculateButton);

function toggleCalculateButton() {
  if (bill.value && tip.value) {
    calculateButton.classList.remove('disabled');
    calculateButton.disabled = false;
  } else {
    calculateButton.classList.add('disabled');
    calculateButton.disabled = true;
  }
}
