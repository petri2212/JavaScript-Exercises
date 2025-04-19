// document.getElementById("count-el").innerText = 5;
// code runner ---> ctrl+alt+N for run
let countEl = document.getElementById("count-el")
let savedEl = document.getElementById("save-el")
let count = 0;

function increment(){
    count += 1
    countEl.textContent = count
  //  console.log(count) 
}

function save(){
    let countStr = count + " - "
    savedEl.textContent += countStr //i use .textContent because .innerText loose the second space in " - "
    countEl.textContent = 0
    count = 0
  //  console.log(count) 
}


