let counter = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let newCountEl = document.getElementById("newCEl")
let amte = document.getElementById("not")
let count = 0


function increment(){
    count += 1
    console.log(count)
    counter.textContent = count
}


function save(){
    if( count === 0){
        amte.textContent = "nothing to save"
    }else{
        let data = count + " - "
        saveEl.textContent += data
        count = 0
        counter.textContent = count
        amte.textContent = ""
    }
};

function newc (){
    saveEl.textContent = "Previous entries:"
    amte.textContent = ""
}