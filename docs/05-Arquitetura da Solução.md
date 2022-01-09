# Arquitetura da Solução

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura que se segue.

<p align = "center">Figura 20 - Componentes da Solução</p>

<p align="center">
  <img src="img\solucao.png" width="700" title="Arquitetura da Solução">
</p>

<p align = "center">Fonte: Elaborada pelas autoras</p>

A solução implementada conta com os seguintes módulos:
*	*Navegador -* Interface básica do sistema;
*	*Páginas Web -* Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema;
*	*Local Storage -* armazenamento mantido no navegador, onde são implementados bancos de dados baseados em JSON:
    -	Cadastro - banco de dados dos usuários, pets, motoristas e token identificador do login;
*	*Session Storage -* armazenamento de dados no navegador que não persistem após este ser fechado: 
    -	Informações de login – identifica o usuário através do login e armazena as informações temporariamente até que o usuário faça logout ou saia do navegador;
*	*Hospedagem -* local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

## Hospedagem

Para hospedar o site será utilizado o GitHub Pages, que é um serviço de hospedagem que suporta sites estáticos, que utilizam CSS, HTML e JavaScript. Essa ferramenta faz uma integração direta com os repositórios armazenados no GitHub, realizando a execução dos arquivos. O domínio utilizado é o github.io (SILVA, 2021). Para acessar o site, basta entrar no link https://icei-puc-minas-pmv-ads.github.io/GoPet/.
 

