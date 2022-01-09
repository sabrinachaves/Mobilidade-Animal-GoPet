let userLogado = JSON.parse(sessionStorage.getItem('userLogadoP')) 

let origin = document.querySelector('#origin')
let validOrigin = false

let destination = document.querySelector('#destination')
let validDestination = false

let pet1 = document.querySelector('#petSelect1')
let validPet1 = false

let pet2 = document.querySelector('#petSelect2')
let validPet2= false

let payment = document.querySelector('#payment')
let validPayment= false

let agendamento = document.querySelector('#appointment_date')
let validAgendamento = false

//Verificar se está logado
if (sessionStorage.getItem('tokenP') == null && userLogado == null){
    alert('Você deve fazer login para acessar esta página!')
    window.location.href = 'index.html'
    }

origin.addEventListener('keyup', ()=>{
    if(origin.value.length <= 5){
        validOrigin = false
    }else{
        validOrigin = true
    }
})

destination.addEventListener('keyup', ()=>{
    if(destination.value.length <= 5){
        validDestination = false
    }else{
        validDestination = true
    }
})

function callADriver(){
    if(validOrigin && validDestination && (pet1.value || pet2.value) && appointment_date.value.length <1 && payment.value){
        window.location.href = 'tripArea.html'
    }else if(validOrigin && validDestination && (pet1.value || pet2.value) && appointment_date.value.length >1 && payment.value){
        alert("A sua corrida foi agendada. As instruções serão enviadas por e-mail.")
    }else{
        alert('Preencha a origem, o destino, o método de pagamento e escolha pelo menos um pet!')
    }
}




