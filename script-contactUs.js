'use strict'

let names = document.querySelector('#name')
let validName = false

let email = document.querySelector('#email')
let validEmail = false

let message = document.querySelector('textarea')
let validMessage = false

names.addEventListener('keyup', ()=>{
    if(names.value.length <= 3){
        validName = false
    }else{
        validName = true
    }
})

email.addEventListener('keyup', ()=>{
    if(email.value.length < 10){
        validEmail = false
    }else{
        validEmail = true
    }
})

message.addEventListener('change', ()=>{
    if(message.value.length < 10){
        validMessage = false
    }else{
        validMessage = true
    }
})

function contactUs(){
    if(validName && validEmail && validMessage){
        alert('Mensagem enviada com sucesso!')
        window.location.href='contactUs.html'
    }else{
        alert('Você deve preencher todos os campos')
    }
}


