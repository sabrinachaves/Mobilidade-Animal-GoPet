# Plano de Testes de Software

Delineando essa etapa do projeto, foi elaborado o Plano de Testes que visa apresentar as ações a serem realizadas, abrangendo requisitos, descrevendo os objetivos a serem alcançados, os caminhos que direcionam à execução dos testes e por fim, os critérios de aceitação.<br>
São condições para a realização dos testes de software a publicação do site na internet, um navegador, conexão com a internet, ferramentas essas que possibilitam o acesso ao site.<br>
O Plano de Testes contendo as especificações dos casos de teste são descritos a seguir:<br>

<p align = "center">Quadro 4 – Caso de teste 01: Cadastrar motorista</p>
<div align="center">

|Caso de Teste CT-01       | CT-01 – Cadastrar Motorista   |
|--------------------------|-------------------------------|
|**Requisitos associados** | RF-01 – Permitir cadastrar motoristas que deverão escolher as categorias de animais (raça e  porte), que poderão ser alteradas conforme necessidade e disponibilidade.|
|**Objetivo do Teste**     | Verificar se o cadastro do motorista está sendo concluído corretamente.                      |
|**Passos**                | Opção 1:<br> 1. Acessar o Navegador<br> 2. Informar o endereço do Site<br> 3. Visualizar a página principal<br> 4. No Menu, clicar em “Motorista”<br> 5. Na página de apresentação ao motorista, clicar no botão “Criar cadastro”<br> 6. Na página “Cadastro do(a) Motorista” preencher todos os campos solicitados<br> 7. Clicar em “Finalizar cadastro”<br><br>Opção 2:<br>1. Acessar o Navegador<br>2. Informar o endereço do site<br> 3. Visualizar a página principal<br> 4. Clicar em “Cadastre-se como motorista”<br>5. Na página “Cadastro do(a) Motorista” preencher todos os campos solicitados<br>6. Clicar em “Finalizar cadastro”  |
|**Critérios de Êxito**    | 1.	Deve aparecer a mensagem “O usuário está sendo cadastrado...”<br> 2. O usuário é direcionado para a tela inicial  |

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 5 – Caso de teste 02: Cadastrar Tutor(a)</p>
<div align="center">

|Caso de Teste CT-02       | CT-02 – Cadastrar Tutor(a)   |
|--------------------------|------------------------------|
|**Requisitos associados** | RF-02 – O site deve permitir cadastrar tutor.|
|**Objetivo do Teste**     | Verificar se o cadastro do tutor está sendo concluído corretamente.|
|**Passos**                | Opção 1<br>1. Acessar o Navegador<br>2. Informar o endereço do site<br>3. Visualizar a página principal<br>4. No Menu, clicar em “Passageiro”<br>5. Na página de apresentação ao passageiro, clicar no botão “Criar cadastro”<br>6. Na página “Cadastro do(a) Tutor(a)”, preencher todos os campos solicitados<br>7. Clicar em “Finalizar cadastro”<br><br>Opção 2<br>1. Acessar o Navegador<br>2.	Informar o endereço do site<br>3. Visualizar a página principal<br>4. Clicar em “Cadastre-se como usuário”<br>5. Na página “Cadastro do(a) Tutor(a)”, preencher todos os campos solicitados<br>6. Clicar em “Finalizar cadastro”|
|**Critérios de Êxito**    | 1.	Deve aparecer a mensagem “O usuário está sendo cadastrado...”<br> 2. O usuário é direcionado para a tela inicial |

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 6 – Caso de teste 03: cadastro e escolha de animais</p>
<div align="center">

|Caso de Teste CT-03       |CT-03 – Cadastrar animais e escolher quais serão transportados no momento da corrida   |
|--------------------------|------------------------------|
|**Requisitos associados** | RF-03 – O site deve permitir cadastrar animais e escolher o animal pré-cadastrado que será transportado (no momento da corrida).|
|**Objetivo do Teste**     | Verificar se o cadastro de animais está sendo concluído corretamente e verificar se o campo de escolha dos animais no momento da solicitação de corrida apresenta os pets pré-cadastrados para escolha.|
|**Passos**                | 1.	Acessar o Navegador<br>2. Informar o endereço do site<br>3. Visualizar a página principal<br>4. Clicar em “Login do Passageiro”<br>5. Digitar o email cadastrado<br>6. Digitar a senha cadastrada<br>7. Na tela do usuário, clicar no botão “Cadastrar pet”<br>8. Preencher todos os campos obrigatórios com informações do pet<br>9. Clicar no botão “Finalizar cadastro”<br>10. No menu clicar na opção “Solicitar corrida”<br>11. Clicar na(s) lista(s) suspensa(s) sob o título “Selecione seu(s) pet(s)” para selecionar o(s) pet(s) cadastrado(s)|
|**Critérios de Êxito**    | 1.	Deve aparecer na tela a mensagem: “O pet está sendo cadastrado...”<br>2. O usuário deve ser direcionado para a área do(a) tutor(a)<br>3. Na tela “Solicite sua corrida” deve(m) constar na(s) lista(s) suspensa(s) o(s) pet(s) cadastrado(s)|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 7 – Caso de teste 04: Agendar uma viagem</p>
<div align="center">

|Caso de Teste CT-04       |CT-04 – Agendar uma viagem   |
|--------------------------|------------------------------|
|**Requisitos associados** | RF-04 – O site deverá permitir o agendamento de viagem.|
|**Objetivo do Teste**     | Verificar se a opção de agendamento de viagem é exibida para o usuário|
|**Passos**                | 1.	Acessar o Navegador<br>2. Informar o endereço do site<br>3.	Visualizar a página principal<br>4.	Clicar em “Login do Passageiro”<br>5. Digitar o email cadastrado<br>6. Digitar a senha cadastrada<br> 7. No Menu, clicar em “Solicite sua corrida”<br>8. Inserir o endereço de origem e de destino<br>9. Clicar no símbolo de calendário no campo “Agendar corrida”<br>10. Selecionar o dia e horário desejados<br>11. Selecionar o(s) pet(s)<br>12.	Clicar no botão “Solicitar corrida”|
|**Critérios de Êxito**    | 1.	Deve aparecer um alerta com a seguinte mensagem: “A sua corrida foi agendada. As instruções serão enviadas por e-mail.”|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 8 – Caso de teste 05: Aba “Ajuda”</p>
<div align="center">

|Caso de Teste CT-05       |CT-05 – Mostrar aba “Ajuda” com respostas às perguntas frequentes|
|--------------------------|------------------------------|
|**Requisitos associados** | RF-05 – O site deve conter uma aba de ‘’Ajuda’’, contendo as respostas para as perguntas frequentes (FAQ).|
|**Objetivo do Teste**     | Verificar se a página inicial direciona para a página “Ajuda” apresentando perguntas e suas respostas frequentes.|
|**Passos**                | Opção 1<br>1. Acessar o Navegador<br>2. Informar o endereço do site<br>3. Visualizar a página principal<br>4. No Menu, clicar em “Ajuda”<br>5.	Clicar no botão de pergunta desejada para tornar visível a resposta correspondente.<br><br>Opção 2<br>1. Acessar o Navegador<br>2. Informar o endereço do site<br>3. Visualizar a página principal<br>4. No Rodapé, clicar em “Ajuda”<br>5.	Clicar no botão da pergunta desejada para tornar visível a resposta correspondente.|
|**Critérios de Êxito**    | 1.	Devem aparecer as perguntas para usuário na condição de tutor assim como na condição de motorista.<br>2. Devem aparecer as respostas quando o usuário clicar em um botão de pergunta.|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 9 – Caso de teste 06: Aba “Fale Conosco”</p>
<div align="center">

|Caso de Teste CT-06       |CT-06 – Mostrar aba “Fale Conosco” para envio de mensagem|
|--------------------------|------------------------------|
|**Requisitos associados** | RF-06 – O site deve apresentar uma aba de “Fale Conosco” (interação via e-mail) para Reclamações / Outras Dúvidas / Sugestões / Elogios.|
|**Objetivo do Teste**     | Verificar se a página inicial direciona para a página “Fale Conosco” apresentando campos para identificação, mensagem e seu envio|
|**Passos**                | Opção 1<br>1. Acessar o Navegador<br>2. Informar o endereço do site<br>3. Visualizar a página principal<br>4. No Menu, clicar em “Fale Conosco”<br>5. Preencher o campo “Nome”<br>6. Preencher o campo “E-mail”<br>7. Escrever o texto no campo “Mensagem”<br>8. Clicar no botão “Enviar”<br><br>Opção 2<br>1.	Acessar o Navegador<br>2. Informar o endereço do site<br>3.	Visualizar a página principal<br>4.	No Rodapé, clicar em “Fale Conosco”<br>5. Preencher o campo “Nome”<br>6. Preencher o campo “E-mail”<br>7. Escrever o texto no campo “Mensagem”<br>8. Clicar no botão “Enviar”|
|**Critérios de Êxito**    | 1.	Deve ser exibida a tela “Fale Conosco” com os campos a serem preenchidos.<br>2.	Após preenchimento dos campos a mensagem deve ser enviada ao clicar no botão “Enviar”|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 10 – Caso de teste 07: Rota e localização do motorista</p>
<div align="center">

|Caso de Teste CT-07       |CT-07 – Exibir rota e a localização do motorista responsável pela corrida|
|--------------------------|------------------------------|
|**Requisitos associados** | RF-07 – O site deve apresentar a rota e a localização do motorista responsável pela corrida.|
|**Objetivo do Teste**     | Verificar se a página exibe a rota e a localização do motorista.|
|**Passos**                | Condições pré-existentes: possuir cadastro no site como tutor.<br>1. Acessar o Navegador<br>2.	Informar o endereço do site<br>3. Visualizar a página principal<br>4. Clicar em “Login do Passageiro”<br>5.	Digitar o e-mail cadastrado<br>6.	Digitar a senha cadastrada<br>7. Clicar no botão “Entrar”<br>8.	No Menu, clicar em “Pedir corrida”<br>9. Inserir o endereço de origem e de destino<br>10.	Selecionar o(s) pet(s)<br>11. Clicar no botão “Solicitar corrida”<br>12. Visualizar a rota e a localização do motorista|
|**Critérios de Êxito**    | 1.	O usuário deve ser direcionado para a tela onde consta a rota e a localização do motorista.|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 11 – Caso de teste 08: Nome, nota e veículo do motorista</p>
<div align="center">

|Caso de Teste CT-08       |CT-08 – Visualização do nome, da nota e do veículo do motorista|
|--------------------------|------------------------------|
|**Requisitos associados** | RF-08 – O site deve permitir a visualização do nome, da nota e do veículo do motorista.|
|**Objetivo do Teste**     | Verificar se a página exibe o nome, a nota e o veículo do motorista.|
|**Passos**                | Condições pré-existentes: possuir cadastro no site como tutor.<br>1. Acessar o Navegador<br>2.	Informar o endereço do site<br>3. Visualizar a página principal<br>4. Clicar em “Login do Passageiro”<br>5.	Digitar o e-mail cadastrado<br>6. Digitar a senha cadastrada<br>7. Clicar no botão “Entrar”<br>8. No Menu, clicar em “Pedir corrida”<br>9. Inserir o endereço de origem e de destino<br>10.	Selecionar o(s) pet(s)<br>11. Clicar no botão “Solicitar corrida”|
|**Critérios de Êxito**    | 1.	O usuário deve ser direcionado para a tela onde consta o nome, a nota e o veículo do motorista.|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 12 – Caso de teste 09: Efetuar login no site</p>
<div align="center">

|Caso de Teste CT-09       |CT-09 – Efetuar login no site|
|--------------------------|------------------------------|
|**Requisitos associados** |RF-09 – O site deve permitir efetuar login.|
|**Objetivo do Teste**     |Verificar se o usuário consegue efetuar o login na página.|
|**Passos**                | Condições pré-existentes: possuir cadastro no site como tutor ou como motorista.<br>•	Para login como tutor:<br>1. Acessar o Navegador<br>2. Informar o endereço do site<br>3. Visualizar a página principal<br>4. Clicar em “Login do Passageiro”<br>5. Digitar o e-mail cadastrado<br>6. Digitar a senha cadastrada<br>7. Clicar no botão “Entrar”<br><br>•	Para login como motorista:<br>1. Acessar o Navegador<br>2. Informar o endereço do site<br>3. Visualizar a página principal<br>4. Clicar em “Login do Motorista”<br>5. Digitar o e-mail cadastrado<br>6.	Digitar a senha cadastrada<br>7. Clicar no botão “Entrar”|
|**Critérios de Êxito**    | 1.	O tutor deve ser direcionado para a tela “Área do(a) tutor(a).<br>2. O(a) motorista deve ser direcionado para tela “Área do(a) motorista.|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 13 – Caso de teste 10: Tela de Recomendações</p>
<div align="center">

|Caso de Teste CT-10       |CT-10 – Apresentar cuidados com o pet antes da viagem|
|--------------------------|------------------------------|
|**Requisitos associados** |RF-10 – O site deve alertar o usuário sobre os cuidados com o pet antes da viagem.|
|**Objetivo do Teste**     |Exibir tela com recomendações de cuidados com o pet antes da viagem.|
|**Passos**                |1. Acessar o Navegador<br>2. Informar o endereço do site<br>3. Visualizar a página principal<br>4. No Menu, clicar em “Recomendações”|
|**Critérios de Êxito**    |1. Exibição da tela com a recomendações|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 14 – Caso de teste 11: Interação entre motorista e usuário</p>
<div align="center">

|Caso de Teste CT-11       |CT-11 – Apresentar um campo de interação entre motorista e usuário|
|--------------------------|------------------------------|
|**Requisitos associados** |RF-11 – O site deve disponibilizar um campo para interação entre motorista e usuário.|
|**Objetivo do Teste**     |Exibir na tela de corrida o campo para interação entre motorista e usuário.|
|**Passos**                |Condições pré-existentes: possuir cadastro no site como tutor.<br>1. Acessar o Navegador<br>2. Informar o endereço do site<br>3. Visualizar a página principal<br>4. Clicar em “Login do Passageiro”<br>5.	Digitar o e-mail cadastrado<br>6. Digitar a senha cadastrada<br>7. Clicar no botão “Entrar”<br>8. No Menu, clicar em “Pedir corrida”<br>9. Inserir o endereço de origem e de destino<br>10.	Selecionar o(s) pet(s)<br>11. Clicar no botão “Solicitar corrida”<br>12. Visualizar o campo de interação abaixo das informações do motorista onde é possível enviar e receber mensagens|
|**Critérios de Êxito**    |1.	Exibição do campo de interação.|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 15 – Caso de teste 12: Dados do motorista e usuário</p>
<div align="center">

|Caso de Teste CT-12       |CT-12 – Visualização dos dados cadastrados para o motorista e usuário|
|--------------------------|------------------------------|
|**Requisitos associados** |RF-12 – O site deve permitir a visualização dos dados cadastrados para o motorista e usuário.|
|**Objetivo do Teste**     |Exibir os dados cadastrados do tutor e do motorista.|
|**Passos**                |Condições pré-existentes: possuir cadastro no site como tutor ou como motorista.<br>•	Para login como tutor:<br>1. Acessar o navegador<br>2. Informar o endereço do site<br>3. Visualizar a página principal<br>4. Clicar em “Login do Passageiro”<br>5. Digitar o e-mail cadastrado<br>6. Digitar a senha cadastrada<br>7. Clicar no botão “Entrar”<br><br>•	Para login como motorista:<br>1. Acessar o navegador<br>2.	Informar o endereço do site<br>3. Visualizar a página principal<br>4. Clicar em “Login do Motorista”<br>5. Digitar o e-mail cadastrado<br>6. Digitar a senha cadastrada<br>7. Clicar no botão “Entrar”|
|**Critérios de Êxito**    |1. O tutor deve ser direcionado para a tela “Área do(a) tutor(a).<br>2.	O(a) motorista deve ser direcionado para tela “Área do(a) motorista.|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 16 – Caso de teste 13: Solicitação de corrida após efetuar o login</p>
<div align="center">

|Caso de Teste CT-13       |CT-13 – Solicitação de corrida após efetuar o login|
|--------------------------|------------------------------|
|**Requisitos associados** |RF-13 – O site só deve permitir o acesso a tela de “Pedir corrida” se o tutor estiver logado.|
|**Objetivo do Teste**     |Mostrar condição de restrição para pedir a corrida.|
|**Passos**                |1.	Acessar o navegador<br>2. Informar o endereço do site<br>3.	Visualizar a página principal<br>4.	No Menu, clicar em “Pedir corrida”|
|**Critérios de Êxito**    |1.	Exibição de um alerta com a seguinte mensagem: “Você deve fazer login para acessar essa página!”<br>2.	Direcionamento para a página inicial após clicar em “ok” no alerta|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 17 – Caso de teste 14: Restrição ao acesso dos dados cadastrados</p>
<div align="center">

|Caso de Teste CT-14       |CT-14 – Acesso aos dados cadastrados pelo tutor e motorista somente após efetuar o login|
|--------------------------|------------------------------|
|**Requisitos associados** |RF-14 – O motorista e o tutor terão acesso aos dados cadastrados somente após o login.|
|**Objetivo do Teste**     |Apresentar a restrição para acessar os dados cadastrados no site.|
|**Passos**                |1.	Acessar o navegador<br>2. Copiar o link https://icei-puc-minas-pmv-ads.github.io/GoPet/ na barra de endereços<br>3.	Pressionar “Enter”|
|**Critérios de Êxito**    |1.	Exibição de um alerta com a seguinte mensagem: “Você deve fazer login para acessar essa página!”<br>2. Direcionamento para a página inicial após clicar em “ok” no alerta|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 18 – Caso de teste 15: Publicação do site em ambiente acessível</p>
<div align="center">

|Caso de Teste CT-15       |CT-15 – Publicação do site em ambiente acessível|
|--------------------------|------------------------------|
|**Requisitos associados** |RNF-01 – O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages).|
|**Objetivo do Teste**     |Site publicado no GitHub|
|**Passos**                |1.	Acessar o navegador<br>2. Copiar o link https://icei-puc-minas-pmv-ads.github.io/GoPet/ na barra de endereços<br>3.	Pressionar “Enter”|
|**Critérios de Êxito**    |1.	Exibição da página principal do site.|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>

<p align = "center">Quadro 19 – Caso de teste 16: Adaptação do site ao formato de tela</p>
<div align="center">

|Caso de Teste CT-16       |CT-16 – Adaptação do site ao formato de tela|
|--------------------------|------------------------------|
|**Requisitos associados** |RNF-02 – O website se adaptará ao formato de tela do dispositivo utilizado, sem que ocorram distorções|
|**Objetivo do Teste**     |Evidenciar que o site se adapta ao tamanho da tela do dispositivo do usuário, sem distorções.|
|**Passos**                |1.	Acessar o navegador<br>2. Copiar o link https://icei-puc-minas-pmv-ads.github.io/GoPet/ na barra de endereços<br>3.	Pressionar “Enter”<br>4. Clicar com o botão direito do mouse<br>5. Clicar em Inspecionar<br>6. Clicar em “Toogle device Toolbar” ou o atalho Ctrl + Shift + M<br>7.	Escolher um dispositivo para simulação|
|**Critérios de Êxito**    |1.	Exibir a tela sem distorções nas simulações dos dispositivos testados|

<p align = "center">Fonte: Elaborada pelas autoras</p>
</div>
<br>


