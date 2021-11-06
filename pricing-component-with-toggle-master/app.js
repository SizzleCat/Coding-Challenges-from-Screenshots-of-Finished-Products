const toggle = document.querySelector('.toggle-housing');
const toggleBtn = document.querySelector('.toggle-button');
const basic = document.getElementById('basic');
const pro = document.getElementById('professional');
const master = document.getElementById('master');

toggle.addEventListener('click', function() {
  if (toggleBtn.classList.contains('toggled')) {
    toggleBtn.classList.remove('toggled');
    basic.innerText = '199.99';
    pro.innerText = '249.99';
    master.innerText = '399.99';
  } else {
  toggleBtn.classList.add('toggled');
  basic.innerText = '19.99';
  pro.innerText = '24.99';
  master.innerText = '39.99';
  }
})