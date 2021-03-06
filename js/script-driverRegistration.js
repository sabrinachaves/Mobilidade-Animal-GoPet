'use strict'

let errorMsg = document.querySelector("#errorMsg")
let successMsg = document.querySelector("#successMsg")

let names = document.querySelector('#name')
let labelName = document.querySelector('#labelName')
let validName = false

let birthday = document.querySelector('#birthday')
let labelBirthday = document.querySelector('#labelBirthday')
let validBirthday = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let cpf = document.querySelector('#CPF')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let cnh = document.querySelector('#CNH')
let labelCnh = document.querySelector('#labelCnh')
let validCnh = false

let cep = document.querySelector('#CEP')
let labelCep = document.querySelector('#labelCep')
let validCep = false

let address = document.querySelector('#address')
let labelAddress = document.querySelector('#labelAddress')
let validAddress = false

let houseNumber = document.querySelector('#houseNumber')
let labelNumber = document.querySelector('#labelNumber')
let validNumber = false

let complement = document.querySelector('#complement')
let labelComplement = document.querySelector('#labelComplement')

let neighborhood = document.querySelector('#neighborhood')
let labelNeighborhood = document.querySelector('#labelNeighborhood')
let validNeighborhood = false

let city = document.querySelector('#city')
let labelCity = document.querySelector('#labelCity')
let validCity = false

let state = document.querySelector('#state')
let labelState = document.querySelector('#labelState')
let validState = false

let cellphone = document.querySelector('#cellphone')
let labelCellphone = document.querySelector('#labelCellphone')
let validCellphone = false

let model = document.querySelector('#model')
let labelModel = document.querySelector('#labelModel')
let validModel = false

let color = document.querySelector('#color')
let labelColor = document.querySelector('#labelColor')
let validColor = false

let plaque = document.querySelector('#plaque')
let labelPlaque = document.querySelector('#labelPlaque')
let validPlaque = false

let password = document.querySelector('#password')
let labelPassword = document.querySelector('#labelPassword')
let validPassword = false

let confirmPassword = document.querySelector('#confirmPassword')
let labelConfirm = document.querySelector('#labelConfirm')
let validConfirm = false

let photoDriver = document.querySelector('#flImage')
let validDriver = false


names.addEventListener('keyup', ()=>{
    if(names.value.length <= 10){
        labelName.setAttribute('style', 'color: red')
        validName = false
    }else{
        labelName.setAttribute('style', 'color: green')
        validName = true
    }
})


birthday.addEventListener('keyup', ()=>{
    if(birthday.value.length < 1){
        labelBirthday.setAttribute('style', 'color: red')
        validBirthday = false
    }else{
        labelBirthday.setAttribute('style', 'color: green')
        validBirthday = true
    }
})

email.addEventListener('keyup', ()=>{
    if(email.value.length < 10){
        labelEmail.setAttribute('style', 'color: red')
        validEmail = false
    }else{
        labelEmail.setAttribute('style', 'color: green')
        validEmail = true
    }
})


cpf.addEventListener('keyup', ()=>{
    if(cpf.value.length < 11){
        labelCpf.setAttribute('style', 'color: red')
        labelCpf.innerHTML = 'Cpf* Insira um cpf v??lido'
        validCpf = false
    }else{
        labelCpf.setAttribute('style', 'color: green')
        labelCpf.innerHTML = 'Cpf*'
        validCpf = true
    }
})

cnh.addEventListener('keyup', ()=>{
    if(cnh.value.length < 9){
        labelCnh.setAttribute('style', 'color: red')
        labelCnh.innerHTML = 'CNH* Insira uma cnh v??lida'
        validCnh = false
    }else{
        labelCnh.setAttribute('style', 'color: green')
        labelCnh.innerHTML = 'CNH*'
        validCnh = true
    }
})

cep.addEventListener('keyup', ()=>{
    if(cep.value.length < 8){
        labelCep.setAttribute('style', 'color: red')
        labelCep.innerHTML = 'CEP* Insira um CEP v??lido'
        validCep = false
    }else{
        labelCep.setAttribute('style', 'color: green')
        labelCep.innerHTML = 'CEP*'
        validCep = true
    }
})

address.addEventListener('keyup', ()=>{
    if(address.value.length < 3){
        labelAddress.setAttribute('style', 'color: red')
        validAddress = false
    }else{
        labelAddress.setAttribute('style', 'color: green')
        validAddress = true
    }
})

address.addEventListener('keyup', ()=>{
    if(address.value.length < 3){
        labelAddress.setAttribute('style', 'color: red')
        validAddress = false
    }else{
        labelAddress.setAttribute('style', 'color: green')
        validAddress = true
    }
})

houseNumber.addEventListener('keyup', ()=>{
    if(houseNumber.value.length < 1){
        labelNumber.setAttribute('style', 'color: red')
        validNumber = false
    }else{
        labelNumber.setAttribute('style', 'color: green')
        validNumber = true
    }
})

neighborhood.addEventListener('keyup', ()=>{
    if(neighborhood.value.length < 3){
        labelNeighborhood.setAttribute('style', 'color: red')
        validNeighborhood = false
    }else{
        labelNeighborhood.setAttribute('style', 'color: green')
        validNeighborhood = true
    }
})

city.addEventListener('keyup', ()=>{
    if(city.value.length < 3){
        labelCity.setAttribute('style', 'color: red')
        validCity = false
    }else{
        labelCity.setAttribute('style', 'color: green')
        validCity = true
    }
})

state.addEventListener('keyup', ()=>{
    if(state.value.length < 2 || state.value.length > 2){
        labelState.setAttribute('style', 'color: red')
        labelState.innerHTML = 'Estado* Digite apenas a sigla'
        validState = false
    }else{
        labelState.setAttribute('style', 'color: green')
        labelState.innerHTML = 'Estado*'
        validState = true
    }
})

cellphone.addEventListener('keyup', ()=>{
    if(cellphone.value.length < 11 || cellphone.value.length > 11){
        labelCellphone.setAttribute('style', 'color: red')
        labelCellphone.innerHTML = 'Celular com DDD* Digite o celular no formato XXXXXXXXXXX'
        validCellphone = false
    }else{
        labelCellphone.setAttribute('style', 'color: green')
        labelCellphone.innerHTML = 'Celular com DDD*'
        validCellphone = true
    }
})

model.addEventListener('keyup', ()=>{
    if(model.value.length < 2){
        labelModel.setAttribute('style', 'color: red')
        validModel = false
    }else{
        labelModel.setAttribute('style', 'color: green')
        validModel = true
    }
})

color.addEventListener('keyup', ()=>{
    if(color.value.length < 2){
        labelColor.setAttribute('style', 'color: red')
        validColor = false
    }else{
        labelColor.setAttribute('style', 'color: green')
        validColor = true
    }
})

plaque.addEventListener('keyup', ()=>{
    if(plaque.value.length < 7){
        labelPlaque.setAttribute('style', 'color: red')
        validPlaque = false
    }else{
        labelPlaque.setAttribute('style', 'color: green')
        validPlaque = true
    }
})

password.addEventListener('keyup', ()=>{
    if(password.value.length < 8){
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = 'Senha* A senha deve ter pelo menos 8 caracteres'
        validPassword = false
    }else{
        labelPassword.setAttribute('style', 'color: green')
        labelPassword.innerHTML = 'Senha*'
        validPassword = true
    }
})

confirmPassword.addEventListener('keyup', ()=>{
    if(confirmPassword.value !== password.value ){
        labelConfirm.setAttribute('style', 'color: red')
        labelConfirm.innerHTML = 'Confirmar senha* As senhas est??o diferentes'
        validConfirm = false
    }else{
        labelConfirm.setAttribute('style', 'color: green')
        labelConfirm.innerHTML = 'Confirmar senha*'
        validConfirm = true
    }
})

confirmPassword.addEventListener('keyup', ()=>{
    if(confirmPassword.value !== password.value ){
        labelConfirm.setAttribute('style', 'color: red')
        labelConfirm.innerHTML = 'Confirmar senha* As senhas est??o diferentes'
        validConfirm = false
    }else{
        labelConfirm.setAttribute('style', 'color: green')
        labelConfirm.innerHTML = 'Confirmar senha*'
        validConfirm = true
    }
})


function driverRegistration(){
    if(validName && validBirthday && validEmail && validCpf && validCnh && validCep && validAddress &&
        validNumber && validNeighborhood && validCity && validState && validCellphone && validModel && validColor && 
        validPlaque && validPassword && validConfirm){

            let userListDriver = JSON.parse(localStorage.getItem('userListDriver') || '[]')

            userListDriver.push(
                {
                    nameCad: names.value,
                    birthdayCad: birthday.value,
                    emailCad: email.value,
                    cpfCad: cpf.value,
                    cnhCad: cnh.value,
                    cepCad: cep.value,
                    addressCad: address.value,
                    houseNumberCad: houseNumber.value,
                    complementCad: complement.value,
                    neighborhoodCad: neighborhood.value,
                    cityCad: city.value,
                    stateCad: state.value,
                    cellphoneCad: cellphone.value,
                    modelCad: model.value,
                    colorCad: color.value,
                    plaqueCad: plaque.value,
                    passwordCad: password.value,
                    confirmPasswordCad: confirmPassword.value
                }
            )

            localStorage.setItem('userListDriver', JSON.stringify(userListDriver))
            
            
            successMsg.setAttribute('style', 'display:block')
            successMsg.innerHTML = '<strong>O usu??rio est?? sendo cadastrado...</strong>'
            errorMsg.setAttribute('style', 'display:none')
            errorMsg.innerHTML = ''

            window.scrollTo(0, 0);

            setTimeout(()=>{
                window.location.href = '/index.html'
            }, 3000)
    }else{
        errorMsg.setAttribute('style', 'display:block')
        errorMsg.innerHTML = '<strong>Preencha corretamente todos os campos obrigat??rios para se cadastrar</strong>'
        successMsg.innerHTML = ''
        successMsg.setAttribute('style', 'display:none')
        window.scrollTo(0, 0);
    }
}