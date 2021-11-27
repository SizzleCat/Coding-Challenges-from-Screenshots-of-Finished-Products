slider = document.getElementById('slider');
views = document.getElementById('views');
price = document.getElementById('price');
toggle = document.querySelector('.toggle-housing');
toggleBtn = document.querySelector('.toggle-button');

slider.addEventListener('input', function() {
  this.style.background=`linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${this.value}%, hsl(224, 65%, 95%) ${this.value}%, hsl(224, 65%, 95%) 100%)`;
})

toggle.addEventListener('click', function() {
  toggleBtn.classList.toggle('toggled');
  if (toggleBtn.classList.contains('toggled')) {
    yearlyBillingPlans();
  } else {
    monthlyBillingPlans();
  }
})

slider.addEventListener('input', function() {
  if (toggleBtn.classList.contains('toggled')) {
    yearlyBillingPlans();
  } else {
    monthlyBillingPlans();
  }
})

function monthlyBillingPlans() {
  if (slider.value < 20) {
    views.innerText='10K PAGEVIEWS';
    price.innerText='$8.00';
  }
  if (slider.value >= 20 && slider.value < 40) {
    views.innerText='50K PAGEVIEWS';
    price.innerText='$12.00';
  }
  if (slider.value >= 40 && slider.value < 60) {
    views.innerText='100K PAGEVIEWS';
    price.innerText='$16.00';
  }
  if (slider.value >= 60 && slider.value < 80) {
    views.innerText='500K PAGEVIEWS';
    price.innerText='$24.00';
  }
  if (slider.value >= 80) {
    views.innerText='1M PAGEVIEWS';
    price.innerText='$36.00';
  }
}

function yearlyBillingPlans() {
  if (slider.value < 20) {
    views.innerText='10K PAGEVIEWS';
    price.innerText='$6.00';
  }
  if (slider.value >= 20 && slider.value < 40) {
    views.innerText='50K PAGEVIEWS';
    price.innerText='$9.00';
  }
  if (slider.value >= 40 && slider.value < 60) {
    views.innerText='100K PAGEVIEWS';
    price.innerText='$12.00';
  }
  if (slider.value >= 60 && slider.value < 80) {
    views.innerText='500K PAGEVIEWS';
    price.innerText='$18.00';
  }
  if (slider.value >= 80) {
    views.innerText='1M PAGEVIEWS';
    price.innerText='$27.00';
  }
}