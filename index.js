let countEL = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
let count = 0
function increment(){
    count += 1
    countEL.textContent = count
}

function save(){
    let par = count + " - "
    saveEL.textContent += par
    countEL.textContent = 0
    count = 0
}