const bill = document.getElementById('bill');
const numPeopleInput = document.getElementById('number-of-people'); 
const numPeopleForm = document.getElementById('number-people-form')
const tipBtns = document.querySelectorAll('.tip-btn');
const customInput = document.getElementById('custom')
const tipPerPerson = document.getElementById('tip-per-person');
const totalPerPerson = document.getElementById('total-per-person');
const reset = document.getElementById('reset');
const error = document.getElementById('error')

tipBtns.forEach((tipBtn) => {
  tipBtn.addEventListener('click', (e) => {
    customInput.blur()
    customInput.value = null
    tipBtns.forEach((tipBtn) => {
      tipBtn.classList.remove('clicked');
    })
    e.target.classList.add('clicked');
  });
});

customInput.addEventListener('focus', unclicked);
function unclicked() {
  if (customInput === document.activeElement) {
    tipBtns.forEach((tipBtn) => {
      tipBtn.classList.remove('clicked')
    })
  }
}

numPeopleForm.addEventListener('submit', function() {
  if (numPeopleInput.value === '') {
    error.style.display = 'block'
    numPeopleInput.style.border='1px solid red'
    setTimeout(hideError, 1700)
    function hideError() {
      error.style.display = 'none'
      numPeopleInput.style.border='';
    }
  } else {
    const billValue = +bill.value;
    let adjustedPercent = 0;
    tipBtns.forEach((tipBtn) => {
      const clickedBtn = tipBtn.classList.contains('clicked')
      if (clickedBtn) {
        const percent = tipBtn.innerText
        adjustedPercent = +percent.substring(0, percent.length -1)
        console.log(adjustedPercent)
      }
    })

    if (adjustedPercent === 0) {
      adjustedPercent = customInput.value;
    }

    const numPeople = +numPeopleInput.value
    const calcTipPerPerson = (((adjustedPercent / 100) * billValue) / numPeople).toFixed(2)
    const calcTotalPerPerson = ((((adjustedPercent / 100) * billValue) + billValue) / numPeople).toFixed(2)

    tipPerPerson.innerText = calcTipPerPerson
    totalPerPerson.innerText = calcTotalPerPerson
    reset.disabled = false;
  }
});


reset.addEventListener('click', () => {
  location.reload()
  reset.disabled = true;
})

