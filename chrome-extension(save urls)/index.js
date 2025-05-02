let myLeads = []
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
//const cant be riassigned, so inputEl = "hello" this dont work

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = ""
    console.log(myLeads);
    renderLeads()
})

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        //target open another page
        //listItems += "<li>" +"<a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i]+ "</li>" ;
        //this is a string
        listItems += `<li>
        <a target='_blank' href='${myLeads[i]} '>  ${myLeads[i]} </a>
        </li>` ;
    }
    ulEl.innerHTML = listItems
}


