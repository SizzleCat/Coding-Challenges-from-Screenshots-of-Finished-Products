const dropdowns = document.querySelectorAll('.down');
const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question-text')

questions.forEach(question => {
  question.addEventListener('click', (e)=> {

    if (e.target.nextElementSibling.classList.contains('flip-arrow')) {
      e.target.nextElementSibling.classList.remove('flip-arrow');
      e.target.parentElement.nextElementSibling.classList.remove('clicked');
      e.target.classList.remove('bolded');
    } else {
    removeClicked();
    e.target.nextElementSibling.classList.add('flip-arrow');
    const answer = e.target.parentElement.nextElementSibling;
    answer.classList.add('clicked');
    const bold = e.target;
    bold.classList.add('bolded');
    }
  })
})

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', (e)=> {

    if (e.target.classList.contains('flip-arrow')) {
      e.target.classList.remove('flip-arrow');
      e.target.parentElement.nextElementSibling.classList.remove('clicked');
      e.target.previousElementSibling.classList.remove('bolded');
    } else {
    removeClicked();
    e.target.classList.add('flip-arrow');
    const answer = e.target.parentElement.nextElementSibling;
    answer.classList.add('clicked');
    const bold = e.target.previousElementSibling;
    bold.classList.add('bolded');
    }
  })
})

function removeClicked() {
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('flip-arrow');
  })
  answers.forEach(answer => {
    answer.classList.remove('clicked');
  })
  questions.forEach(question => {
    question.classList.remove('bolded');
  })
}