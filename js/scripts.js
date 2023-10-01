// selecionar elementos
const passNum = document.querySelector(".passNumA")
const lastPassNum = document.querySelector(".passNumB")
const audioNewPass = document.querySelector('audio')

// variáveis globais

let actualPass = 0
let actualPassString = ""
let priorityActualPass = 0
let priorityActualPassString = ""
let priorityActualPassStringP = ""
let lastPass = "0000"
let priorityLastPass = "000"
let passSize = 4
let priorityPassSize = 3

//funções

const newPass = () => {
    actualPass += 1
    actualPassString = actualPass.toString()

    for(let i = 0; actualPassString.length < passSize; i++){
        actualPassString = `0${actualPassString}`
    }

    passNum.innerText = actualPassString 
      
}

const newPassPriority = () => {
    priorityActualPass += 1
    priorityActualPassString = priorityActualPass.toString()

    for(let i = 0; priorityActualPassString.length < priorityPassSize; i++){
        priorityActualPassString = `0${priorityActualPassString}`
    }

    priorityActualPassStringP = `P${priorityActualPassString}`

    passNum.innerText = priorityActualPassStringP
    
}


//eventos

document.addEventListener("keypress", (e) => {
    if (e.key === "n" || e.key === "N" ) {
        audioNewPass.load()
        newPass()
        lastPassNum.innerText = lastPass 
        lastPass = actualPassString
        audioNewPass.play()
    }
})

document.addEventListener("keypress", (e) => {
    if (e.key === "p" || e.key === "P" ) {
        audioNewPass.load()
        newPassPriority() 
        lastPassNum.innerText = lastPass
        lastPass = priorityActualPassStringP
        audioNewPass.play()
        
    }
})