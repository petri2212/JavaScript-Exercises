let myLeads = []
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
//const cant be riassigned, so inputEl = "hello" this dont work
//localStorage.clear()
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

//localStorage.setItem("myLeads",  "www.examplead.com")
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

tabBtn.addEventListener("click", function(){
    //fa la query a chrome che mi da la tab attiva tra quelle della pragina, currentWindow:true quella più alta di layer
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        //quando trova la tab fa la funzione
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads()
    })

    
})

//you have to double click
deleteBtn.addEventListener("dblclick", function () {

    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    renderLeads()

})

inputBtn.addEventListener("click", function () {



    myLeads.push(inputEl.value);
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads));
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


