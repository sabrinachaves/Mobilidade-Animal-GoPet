'use strict'

let errorMsg = document.querySelector("#errorMsg")
let successMsg = document.querySelector("#successMsg")

let names = document.querySelector('#name')
let labelName = document.querySelector('#labelName')
let validName = false

let age = document.querySelector('#age')
let labelAge = document.querySelector('#labelAge')
let validAge = false

let race = document.querySelector('#race')
let labelRace = document.querySelector('#labelRace')
let validRace = false

let color = document.querySelector('#color')
let labelColor = document.querySelector('#labelColor')
let validColor = false

let weight = document.querySelector('#weight')
let labelWeight = document.querySelector('#labelWeight')
let validWeight = false

let care = document.querySelector('#care')
let labelCare = document.querySelector('#labelCare')
let validCare = false

names.addEventListener('keyup', ()=>{
    if(names.value.length <= 1){
        labelName.setAttribute('style', 'color: red')
        validName = false
    }else{
        labelName.setAttribute('style', 'color: green')
        validName = true
    }
})


age.addEventListener('keyup', ()=>{
    if(age.value.length < 1){
        labelAge.setAttribute('style', 'color: red')
        validAge = false
    }else{
        labelAge.setAttribute('style', 'color: green')
        validAge = true
    }
})

race.addEventListener('keyup', ()=>{
    if(race.value.length < 1){
        labelRace.setAttribute('style', 'color: red')
        validRace = false
    }else{
        labelRace.setAttribute('style', 'color: green')
        validRace = true
    }
})

color.addEventListener('keyup', ()=>{
    if(color.value.length < 1){
        labelColor.setAttribute('style', 'color: red')
        validColor = false
    }else{
        labelColor.setAttribute('style', 'color: green')
        validColor = true
    }
})

weight.addEventListener('keyup', ()=>{
    if(weight.value.length < 1){
        labelWeight.setAttribute('style', 'color: red')
        validWeight = false
    }else{
        labelWeight.setAttribute('style', 'color: green')
        validWeight = true
    }
})


function petRegistration(){
    if(validName && validAge && validRace && validColor && validWeight){

            let userListPet = JSON.parse(localStorage.getItem('userListPet') || '[]')

            userListPet.push(
                {
                    nameCad: names.value,
                    ageCad: age.value,
                    raceCad: race.value,
                    colorCad: color.value,
                    weightCad: weight.value,
                    careCad: care.value,
                }
            )

            localStorage.setItem('userListPet', JSON.stringify(userListPet))
            
            
            successMsg.setAttribute('style', 'display:block')
            successMsg.innerHTML = '<strong>O pet está sendo cadastrado...</strong>'
            errorMsg.setAttribute('style', 'display:none')
            errorMsg.innerHTML = ''

            window.scrollTo(0, 0);

            setTimeout(()=>{
                window.location.href = 'tutorArea.html'
            }, 3000)
    }else{
        errorMsg.setAttribute('style', 'display:block')
        errorMsg.innerHTML = '<strong>Preencha corretamente todos os campos obrigatórios cadastrar o Pet</strong>'
        successMsg.innerHTML = ''
        successMsg.setAttribute('style', 'display:none')
        window.scrollTo(0, 0);
    }
}