let userLogado = JSON.parse(sessionStorage.getItem('userLogadoP')) 

if (sessionStorage.getItem('tokenP') == null && userLogado == null){
    alert('Você deve fazer login para acessar esta página!')
    window.location.href = 'index.html'
    }else{

    let ola = document.getElementById("title")

    ola.innerHTML = "Olá, " + userLogado.nome;
    document.getElementById("name").value = userLogado.nome;
    document.getElementById("email").value = userLogado.user;
    document.getElementById("birthday").value = userLogado.dataNascimento;
    document.getElementById("CPF").value = userLogado.cpf;
    document.getElementById("CEP").value = userLogado.cep;
    document.getElementById("address").value = userLogado.endereco;
    document.getElementById("houseNumber").value = userLogado.numero;
    if(userLogado.complemento){
        document.getElementById("complement").value = userLogado.complemento;
    }
    document.getElementById("neighborhood").value = userLogado.bairro;
    document.getElementById("city").value = userLogado.cidade;
    document.getElementById("state").value = userLogado.estado;
    document.getElementById("cellphone").value = userLogado.celular;
    document.getElementById("password").value = userLogado.senha;
    document.getElementById("confirmPassword").value = userLogado.confirmacaoSenha;
}

function logout(){
    sessionStorage.removeItem('tokenP')
    window.location.href = 'index.html'
    sessionStorage.removeItem('userLogadoP')
}

function saveModifications(){
    sessionStorage.removeItem('userLogadoP')
    alert('Os dados foram alterados com sucesso!')
}

function cardRegistration(){
    let modal = document.querySelector('.modal3')
    modal.style.display = 'block';
}

function close3(){
    let modal = document.querySelector('.modal3')
    modal.style.display = 'none';
}
