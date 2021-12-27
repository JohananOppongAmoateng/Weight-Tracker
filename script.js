const weight = document.getElementById("weight")
const date = document.getElementById("date")
const addbtn = document.getElementById("addbtn")

addbtn.addEventListener("click",addWeight)

function addWeight(){
    const table = document.getElementById("table")
    const row = document.createElement("tr")
    table.appendChild(row)
    const weighttd =row.insertCell(0)
    const datetd =row.insertCell(1)
   
    weighttd.innerText = weight.value
    datetd.innerText = date.value
    
    weight.value = ""
    date.value=""
}