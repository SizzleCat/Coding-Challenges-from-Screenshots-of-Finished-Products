

const btns = document.querySelectorAll('.button')


// forget this
// function loadCard(title) {
//   fetch("./data.json")
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     data.forEach(item => {
//       if (title === item.title) {
//         current = item["timeframes"][frequency]["current"];
//         previous = item["timeframes"][frequency]["previous"];
//         console.log('current is ' + current)
//   // const className = title.toLowerCase().replace(' ', '-');
//   // console.log('className is ' + className)
//         const currentSpan = document.querySelector(".current-"+className);
//         currentSpan.innerHTML = current;
//         const previousSpan = document.querySelector(".previous-"+className);
//         previousSpan.innerHTML = previous;
//       }
//     })
//   })
// }

fetch("./data.json")
.then(response => {
   return response.json();
})
.then(data => {
  console.log(data);

  btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const frequency = e.currentTarget.innerText.toLowerCase();
      console.log('frequency ' + frequency);

      data.forEach(item => {
        title = item.title;
        // console.log('title is ' + title)
        // current = item.timeframes.${frequency}.current;
        // previous = item.timeframes.${frequency}.previous;
        current = item["timeframes"][frequency]["current"];
        previous = item["timeframes"][frequency]["previous"];
        // console.log('current is ' + current)

        const classTitle = title.toLowerCase().replace(' ', '-');
        // console.log('classTitle is ' + classTitle)

        const currentSpan = document.querySelector(".current-"+classTitle);
        currentSpan.innerHTML = current;
        const previousSpan = document.querySelector(".previous-"+classTitle);
        previousSpan.innerHTML = previous;
        
        // const divToChange = document.querySelector("."+className);
        // console.log(divToChange);
        // divToChange.innerHTML = `
        //     <img class="icon" src="images/icon-${className}.svg" alt="${title}">
        //     <div class="top-card">
        //       <header>
        //         <h3>${title}</h3>
        //         <img src="images/icon-ellipsis.svg" alt="ellipsis">
        //       </header>
        //       <div class="stats">
        //         <h4>${current}hrs</h4>
        //         <p><span class="pale_span">Last week - ${previous}hrs</span></p>
        //       </div>
        //     </div>
        // `
        // let anElement = document.querySelector("."+title);
        // let anElement = document.getElementById(title);
        //console.log(anElement)

        // containerDiv = document.querySelector('container');
        // allInnerHTML += thisInnerHTML;
        // document.querySelector(".container").innerHTML += allInnerHTML; // this works for whole list of classes
        // console.log(innerHTML);

      })
    })


  })
});
