const reviews = [
{
  id: 1,
  name: "Tanya Sinclair",
  job: "UX Engineer",
  quote: "“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”",
  img: "images/image-tanya.jpg",
},
{
  id: 2,
  name: "John Tarkpor",
  job: "Junior Front-end Developer",
  quote: "“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”",
  img: "images/image-john.jpg",
}
];

const img = document.getElementById("person-img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const quote = document.getElementById("quote");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

// set starting item
let currentItem = 0;

// load inital item
window.addEventListener('DOMContentLoaded', 
   showPerson(currentItem)
);

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  name.textContent  = item.name;
  job.textContent  = item.job;
  quote.textContent  = item.quote;
}

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
  console.log('next');
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
  console.log('previous');
});