# Programação de Funcionalidades

Serão apresentadas as funcionalidades das páginas concebidas com esclarecimentos sobre a utilização da plataforma.

## Funcionalidade – Tela Inicial
O site possui um menu e um rodapé que estão presentes em todas as páginas, facilitando a navegação nas várias telas existentes.<br>
No menu estão contidas as seguintes opções: Início, Quem Somos, Passageiro, Motorista, Ajuda, Recomendações, Fale conosco e Pedir corrida<br>
No rodapé também foram incluídas as opções Início, Quem Somos, Fale Conosco e Ajuda.<br>
A partir de então, a tela Inicial foi composta com um título, um pequeno texto de chamada aos usuários e ao lado, as opções de login para usuário e motorista, de restauração de senha e a criação de contas, conforme Figura 23.<br>
Essa tela abrange o requisito funcional RF-09 e sua funcionalidade é vista nos artefatos:<br>
•	index.html<br>
•	style.css<br>
•	tabstyle.css<br>
•	https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css <br>
•	mobile-navbar.js<br>
•	script-home.js<br>
•	script-tab-login.js<br>

## Funcionalidade – Cadastro do motorista
A opção da Tela Inicial “Cadastre-se como Motorista”, direciona para a página Cadastro do Motorista. (Figura 28).<br>
Para a efetivação do cadastro do Motorista é preciso preencher obrigatoriamente todos os campos da página e de incluir uma foto e, assim, clicar no botão “Finalizar Cadastro”.<br>
Essa tela atende ao requisito funcional RF-01 e RF12 e os artefatos da funcionalidade estão presentes em:<br>
•	cadastromotorista.html<br>
•	style.css<br>
•	https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css<br>
•	script-registration.js<br>
•	mobile-navbar.js<br>
•	script-cadastrarMotorista.js<br>
•	assets/img/tutor.png<br>

## Funcionalidade – Cadastro do Tutor
A partir da opção “Cadastre-se como usuário” contida na Tela inicial, é possível se direcionar para a tela de cadastro do Tutor já ilustrada na Figura 25.<br> 
Assim como na tela de cadastro do Motorista, para concluir o cadastro do tutor é preciso preencher todos os campos da página, mas de forma opcional, incluir uma foto, e assim clicar no botão “Finalizar Cadastro”.<br>
Tal ação atende aos requisitos funcionais RF-02 e RF-12 e os artefatos que compõem essa funcionalidade são:<br>
•	cadastrotutor.html<br>
•	style.css<br>
•	https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css<br>
•	script-registration.js<br>
•	mobile-navbar.js<br>
•	script-cadastrarTutor.js<br>
•	assets/img/tutor.png<br>

## Funcionalidade – Cadastro do Pet
Quando o usuário realiza o login como tutor, ele pode acessar a tela “Cadastro do Pet”, através da “Área do Tutor”, onde os dados do seu animal são inseridos (Figura 30).<br>
Todos os campos contidos nessa tela são obrigatórios, exceto o campo Cuidados Especiais se esse for oportuno. O registro é concluído ao clicar no botão “Finalizar Cadastro”.<br>
Assim é atendido o requisito funcional RF-03 utilizando os artefatos de funcionalidade:<br>
•	cadastropet.html<br>
•	style.css<br>
•	mobile-navbar.js<br>
•	script-cadastroPet.js<br>
•	assets/img/cachorroperfil.jpeg<br>

## Funcionalidade – Pedir corrida
A Tela Inicial traz a opção Pedir Corrida em seu Menu. Se o usuário não estiver logado, suas credenciais serão solicitadas e, caso isso já tenha sido feito, ele é direcionado diretamente para a tela Pedir Corrida (Figura 31).<br>
Nessa tela o tutor preenche o endereço de origem e o de destino, seleciona um ou dois pets e clica no botão Solicitar Corrida.<br>
Caso o desejo seja de agendar um dia e horário da corrida, os mesmos campos são requeridos e adicionalmente no campo Agendar Corrida inclui-se data e hora. Finaliza o pedido no botão Solicitar Corrida.<br>
Tais ações acatam aos requisitos funcionais RF-03 e RF-04 e os artefatos de funcionalidade são vistos em:<br>
•	calladriver.html<br>
•	style-calladriver.css<br>
•	style-map.css<br>
•	script-map.js<br>
•	script-calladriver.js<br>
•	mobile-navbar.js<br>
•	https://maps.googleapis.com/maps/api/js?key=AIzaSyA017yolnkWKAkqxdOjG5ETS-KZNoHZink&callback=initMap<br>

## Funcionalidade – Área do Motorista
Após a realização do login como motorista, na página Inicial, este é direcionado para a “Área do Motorista” (Figura 29), página onde tem acesso aos dados cadastrados e que permite alterá-los, com exceção da data de nascimento, cpf e cnh.<br> Nessa área, o motorista pode alterar o porte do animal que deseja transportar. A página só está disponível para usuários que estiverem logados na plataforma.<br>
A tela em questão atende aos requisitos RF-01, RF-12 e RF-14 e os artefatos de funcionalidade são:<br>
•	areadomotorista.html<br>
•	style.css<br>
•	https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css<br>
•	script-registration.js<br>
•	mobile-navbar.js<br>
•	script-cadastrarMotorista.js<br>
•	script-areaMotorista.js<br>
•	assets/img/agostinho.jpg<br>

## Funcionalidade – Área do Tutor
Quando o tutor realiza login como passageiro, na página Inicial, abre-se a página “Área do Tutor” (Figura 26), onde é possível visualizar os dados cadastrados e alterá-los, com exceção da data de nascimento, cpf e cnh. Essa área também permite o acesso ao cadastro do animal, através do botão “Cadastrar Pet”. Só é possível acessar a página após o login.<br>
A página “Área do Tutor” atende aos requisitos RF-12 e RF-14 e os artefatos de funcionalidade são:<br>
•	areadotutor.html<br>
•	style.css<br>
•	https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css<br>
•	script-registration.js<br>
•	mobile-navbar.js<br>
•	script-cadastrarTutor.js<br>
•	script-areaTutor.js<br>
•	assets/img/perfiltutor.JPG<br>

## Funcionalidade – Tela de corrida
Após solicitar a corrida sem agendamento, o usuário é imediatamente redirecionado para a “Tela de corrida” (Figura 31), onde é possível visualizar o mapa com o trajeto e as localizações do motorista e a sua própria, além da foto, da avaliação e do nome completo do motorista, a placa, a cor e o modelo do veículo. Nesta página também é possível entrar em contato com o motorista, através do chat e do ícone que redireciona para o discador do telefone, realizando a ligação.<br>
Essa funcionalidade atende os requisitos funcionais RF-07, RF-08 e RF-11. Os artefatos de funcionalidade são:<br>
•	corrida.html<br>
•	style.css<br>
•	https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.cssscript-registration.js<br>
•	mobile-navbar.js<br>
•	assets/img/mapacorrida.JPG<br>

## Funcionalidade – Fale conosco
A funcionalidade “Fale Conosco” (Figura 38) permite que qualquer pessoa entre em contato com a Go Pet, através de mensagem, seja para tirar dúvidas, fazer críticas ou sugestões. Todos os campos da página são obrigatórios.<br>
A funcionalidade atende o requisito RF-06 e os artefatos de funcionalidades são apresentados em:<br>
•	faleconosco.html<br>
•	style2.css<br>
•	mobile-navbar.js<br>
•	script-faleconosco.js<br>
•	assets/img/faleconosco.jpg<br>

## Funcionalidade – Ajuda
Na página da funcionalidade “Ajuda” (Figura 36) é possível encontrar as principais respostas para as dúvidas frequentes, essas são divididas entre dúvidas para tutores e motoristas. Ao clicar em uma pergunta, abre-se na mesma página a resposta. <br>
Esta funcionalidade atende o requisito funcional RF-05. Os artefatos de funcionalidade são:<br>
•	faq.html<br>
•	style2.css<br>
•	mobile-navbar.js<br>
•	https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js<br>

## Funcionalidade – Motorista
A página “Motorista” (Figura 35), que pode ser acessada através do menu, apresenta as principais vantagens de se tornar um motorista da Go Pet, além disso, é possível acessar a página de cadastro ao clicar no botão “Criar cadastro”.
Os artefatos de funcionalidade se encontram em:<br>
•	motorista.html<br>
•	style2.css<br>
•	mobile-navbar.js<br>
•	assets/img/motorista.jpeg<br>

## Funcionalidade – Passageiro
Na página “Passageiro” (Figura 34), acessada pelo menu, é possível encontrar as principais vantagens de utilizar os serviços da Go Pet, além disso, é possível acessar a página de cadastro ao clicar no botão “Criar cadastro”.
Os artefatos de funcionalidade atendem ao requisito RF-02 se encontram em:<br>
•	passageiro.html<br>
•	style2.css<br>
•	mobile-navbar.js<br>
•	assets/img/gato-passageiro.jpeg<br>

## Funcionalidade – Recomendações
A página “Recomendações” (Figura 37) apresenta os principais cuidados e dicas que o tutor deve ter com o pet antes e durante a viagem para evitar transtornos e garantir uma corrida mais segura para o animal, o tutor e o motorista. A tela pode ser acessada através do menu.<br>
A funcionalidade atende o requisito RF-10 e os artefatos de funcionalidade são:<br>
•	recommendations.html<br>
•	style2.css<br>
•	mobile-navbar.js<br>
•	assets/img/recommendations.jpg<br>

## Funcionalidade – Quem Somos
É possível visualizar na página “Quem Somos” o propósito e motivação da empresa atendendo ao requisito RF-16. Essa tela é acessada através do menu e está ilustrada na Figura 33.<br>
Os artefatos que compõem essa funcionalidade são listados a seguir:<br>
•	whoweare.html<br>
•	style2.css<br>
•	mobile-navbar.js


















