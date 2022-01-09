# Especificações do Projeto

Para embasar este projeto foi realizada uma pesquisa com uma amostra de participantes, através de entrevistas. O estudo abordou a necessidade de mobilidade de tutores e seus pets em cenários nas condições urbanas. Os resultados apontaram estilos de vida e de deslocamentos dos grupos nos espaços da cidade no intuito de delinear a forma como o problema central desse projeto deve ser solucionado, construindo um recurso singular que inclua a reorganização da mobilidade animal e seus tutores, a valorização de modos e vínculos de vida e, consequentemente, o favorecimento da integração de pets em espaços sociais, a exemplo de muitos locais que já aderiram a ideia de pet friendly. 

## Personas


A seguir são retratadas as personas identificadas, resultantes da etapa de pesquisa e mapeamento do problema: 

<p align = "center">Quadro 1 - Persona Raquel Couto</p>

|<img src="img\persona1.jpg" width="380" title="persona1">| RAQUEL COUTO |
|---------------------------------------------------------|--------------|
|**Idade**        | 40 anos                                              | 
|**Animais**      | Uma gata e dois cachorros                            |
|**Aplicativos**  | Instagram, Whatsapp e Twitter                        |
|**Motivações**   | Trabalho voluntário, manter-se atualizada sobre bem-estar, uma nova osição no mercado de trabalho|
|**Frustrações**  | Utiliza o carro dos pais, portanto nem sempre o tem disponível quando deseja sair com seus pets. Não se sente confortável ao pedir uma corrida e saber que existe a possibilidade do motorista se recusar a levar seus animais.|
|**Hobbies**      | Passeio com seus pets, pilates, tocar instrumentos musicais.|
|**Histórias**    | Raquel possui hábitos saudáveis, se preocupa com a alimentação, com o meio ambiente e gosta de atividades físicas ao ar livre. Possui uma gata e dois cachorros, com quem passeia aos finais de semana.|

<p align = "center">Fonte: Elaborada pelas autoras</p>

<br>

<p align = "center">Quadro 2 - Persona Diego Guerra</p>

|<img src="img\persona2.jpg" width="300" title="persona2">| DIEGO GUERRA |
|---------------------------------------------------------|--------------|
|**Idade**        | 34 anos                                              | 
|**Animais**      | Um casal de gatos                                    |
|**Aplicativos**  | Instagram, TikTok e Easynvest                        |
|**Motivações**   | Carreira profissional, estudos e conhecimentos gerais|
|**Frustrações**  | Relações familiares, não ter um veículo para levar seus gatos à clínica veterinária e tempo para dividir ente trabalho e estudos|
|**Hobbies**      | Leitura, ouvir podcast e ciclismo.|
|**Histórias**    | Diego se interessa por conhecimentos gerais, política, mercado financeiro e gosta de estar sempre aprendendo coisas novas. Aprecia brincadeiras com seu casal de gatos e sua filha.|

<p align = "center">Fonte: Elaborada pelas autoras</p>

<br>

<p align = "center">Quadro 3 - Persona Lucas Cunha</p>

|<img src="img\persona3.jpg" width="430" title="persona3">| LUCAS CUNHA  |
|---------------------------------------------------------|--------------|
|**Idade**        | 26 anos                                              | 
|**Animais**      | Uma cadela                                           |
|**Aplicativos**  | Instagram, Facebook e Skoob                          |
|**Motivações**   | Desenvolvimento de carreira, família e conhecimento  |
|**Frustrações**  | Falta de reconhecimento, não ter tempo para se exercitar e dificuldade para levar sua cadela para a casa dos seus amigos|
|**Hobbies**      | Leitura, fotografia e viagens|
|**Histórias**    | Lucas é um amante de pets, gosta de assistir reality shows, de se reunir com os amigos, de estudar línguas e de viajar. Mora com a mãe e com sua cadela, Mel, que possui 2 anos. Planeja adotar outro cachorrinho em breve para que a Mel possa ter companhia|

<p align = "center">Fonte: Elaborada pelas autoras</p>

## Histórias de Usuários

Utilizando como base as características das personas que foram mapeadas durante a pesquisa, foram traçadas as histórias de usuários a seguir:<br>

<p align = "center">Tabela 1 - Histórias de usuários</p>
<div align="center">

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Raquel Couto        | um meio de transporte para         | levar meus animais ao parque.          |
|Raquel Couto        | agendar corridas                   | ter certeza de que terá um carro disponível no horário que  preciso. |
|Raquel Couto        | poder enviar mensagens ou ligar para o motorista  | passar instruções de como me identificar mais facilmente quando estiver em lugares movimentados. |
|Lucas Cunha         | saber a nota de avaliação do motorista | sentir mais segurança em meu trajeto. |
|Lucas Cunha         | um mapa para visualizar a localização do veículo | acompanhar o trajeto quando estiver na corrida.|
|Lucas Cunha         | ter acesso ao modelo e a placa do carro antes do veículo chegar | identificar o veículo mais facilmente. |
|Diego Guerra        | saber as recomendações com os meus pets | não ter imprevistos ou falta de segurança durante a viagem. |
|Diego Guerra        | um veículo que chegue em um curto período de tempo | situações emergenciais.|
|Diego Guerra        | visualizar a foto do motorista     | ter certeza de que estou viajando com a pessoa certa.|

</div>
<p align = "center">Fonte: Elaborado pelas autoras</p>

## Requisitos do projeto

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem os comportamentos do sistema, as possibilidades interação dos usuários além de seus requisitos para funcionamento, bem como os requisitos não funcionais, que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir, apresenta os requisitos funcionais do projeto e sua rastreabilidade, sendo destacada a prioridade em que os mesmos deverão ser entregues:

<p align = "center">Tabela 2 - Requisitos funcionais</p>
<div align="center">

|ID    | Descrição do Requisito                  | Prioridade |
|------|-----------------------------------------|------------|
|RF-01 | Permitir cadastrar motoristas que deverão escolher as categorias de animais (raça e porte), que poderão ser alterados conforme necessidade e disponibilidade. | ALTA       | 
|RF-02 | O site deve permitir cadastrar tutor.   | ALTA      |
|RF-03 | O site deve permitir cadastrar animais e escolher o animal pré-cadastrado que será transportado (no momento da corrida). | ALTA       | 
|RF-04 | O site deverá permitir o agendamento de viagem.   | ALTA      |
|RF-05 | O site deve conter uma aba de ‘’Ajuda’’, contendo as repostas para as perguntas frequentes (FAQ). | ALTA       | 
|RF-06 | O site deve apresentar uma aba de “Fale Conosco” (interação via e-mail) para Reclamações / Outras Dúvidas / Sugestões / Elogios.   | ALTA      |
|RF-07 | O site deve apresentar a rota e a localização do motorista responsável pela corrida. | ALTA       | 
|RF-08 | O site deve permitir a visualização do nome, da nota e do veículo do motorista.   | ALTA      |
|RF-09 | O site deve permitir efetuar login. | ALTA       | 
|RF-10 | O site deve alertar o usuário sobre os cuidados com o pet antes da viagem.    | ALTA      |
|RF-11 | O site deve disponibilizar um campo para interação entre motorista e usuário.  | ALTA       | 
|RF-12 | O site deve permitir a visualização dos dados cadastrados para o motorista e usuário.  | ALTA      |
|RF-13 | O site só deve permitir o acesso a tela de “Pedir corrida” se o tutor estiver logado. | BAIXA       | 
|RF-14 | O motorista e o tutor terão acesso aos dados cadastrados somente após o login.   | ALTA      |
|RF-15 | O site deve permitir que o usuário avalie a corrida. | BAIXA       | 
|RF-16 | Uma página conterá a apresentação da empresa.   | BAIXA      |

</div>
<p align = "center">Fonte: Elaborado pelas autoras</p>

### Requisitos não Funcionais

A tabela abaixo, apresenta os requisitos não funcionais que o projeto deverá atender. Segue:
<p align = "center">Tabela 3 - Requisitos não funcionais</p>
<div align="center">

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|-----------|
|RNF-01| O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages)  | ALTA | 
|RNF-02| O website se adaptará ao formato de tela do dispositivo utilizado, sem que ocorram distorções |  ALTA |
|RNF-03| O sistema utilizará o Google Directions API para obtenção dos trajetos | MÉDIA | 
|RNF-04| O website deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Internet Explorer, Microsoft Edge, Safari, Opera) |  ALTA | 
|RNF-05| O sistema estará disponível 100% do tempo | ALTA | 
|RNF-06| O sistema que disponibilizará as funcionalidades ao usuário de maneira simples e intuitiva |  MÉDIA | 
|RNF-07| O sistema terá tempo máximo de resposta e, quando o tempo for excedido, informará ao usuário que a operação está demorando mais do que o esperado | BAIXA | 
|RNF-08| A aplicação deve informar ao usuário sobre erros que impeçam o funcionamento correto do website, como falta de conexão, GPS desativado, entre outros |  MÉDIA | 
|RNF-09| O website utilizará o mínimo de conexão de rede possível, para não prejudicar o desempenho de outras aplicações | BAIXA | 
|RNF-10| Deve-se ter um sistema de segurança para proteger as informações dos usuários |  ALTA | 
|RNF-11| Qualquer alteração de dados realizada pelo usuário deve exigir sua confirmação | MÉDIA | 
  
</div>
<p align = "center">Fonte: Elaborado pelas autoras</p>

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas a seguir:

<p align = "center">Tabela 4 - Restrições</p>
<div align="center">

|ID   | Descrição do Requisito  |
|-----|-------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 06/12/2021.  |
|RE-02| O aplicativo deve se restringir às tecnologias básicas da Web no Front end.  |
|RE-03| A equipe não pode subcontratar o desenvolvimento do trabalho.  |

</div>
<p align = "center">Fonte: Elaborado pelas autoras</p>