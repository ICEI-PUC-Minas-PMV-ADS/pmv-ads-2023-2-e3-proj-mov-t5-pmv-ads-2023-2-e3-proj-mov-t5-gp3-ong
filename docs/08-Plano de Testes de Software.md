# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

| **Caso de Teste** 	| **CT-01 – Cadastrar voluntário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 - O sistema deve permitir que o usuário se cadastre como voluntário. <br> |
| Objetivo do Teste 	| Verificar se consegue cadastrar um voluntário. |
| Passos 	| - Acessar o aplicativo. <br> - Pressionar o botão “Entrar”. <br> - Pressionar o botão “Nova Conta”. <br> - Preencher os campos de registro necessários. <br> - Pressionar o botão “Concluir Registro”. <br>                                                                                  |
|Critério de Êxito | -Cadastro foi efetivado. |
|  	|  	| 
| **Caso de Teste** 	| **CT-02 – Fazer Login na conta de voluntário** 	|
|	Requisito Associado 	| RF-002 - O sistema deve permitir que o usuário efetue login em sua conta de voluntário. |
| Objetivo do Teste 	| Verificar se consegue fazer login. |
| Passos 	|- Acessar o aplicativo. <br> - Pressionar o botão “Entrar”. <br> - Preencher os campos de identificação e senha. |
|Critério de Êxito | - A tentativa de login for aceita ou negada caso os dados de login estejam corretos ou incorretos, respectivamente. |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Mudar dados cadastrais do voluntário** 	|
|	Requisito Associado 	| RF-003 - O sistema deve permitir que o voluntário mude seus dados cadastrais. |
| Objetivo do Teste 	| Verificar se consegue mudar os dados de cadastro. |
| Passos 	|- Acessar o aplicativo. <br> - Clicar no botão "Página de cadastro" <br> - Clicar no botão "Cadastrar voluntário". <br> - Clicar no botão "Editar voluntário”. |
|Critério de Êxito | - Editado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Recuperar senha do voluntário** 	|
|	Requisito Associado 	| RF-004 - O sistema deve permitir que o voluntário recupere sua senha em caso de esquecimento. |
| Objetivo do Teste 	| Verificar se consegue recuperar a senha. |
| Passos 	|- Acessar o aplicativo. <br> - Pressionar o botão “Esqueci minha senha”. <br> - Preencher os campos de identificação. <br> - Recuperar senha. |
|Critério de Êxito | - Senha recuperada com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Apagar cadastro do voluntário** 	|
|	Requisito Associado 	| RF-005 - O sistema deve permitir que o voluntário apague seu própio cadastro. |
| Objetivo do Teste 	| Verificar se consegue apagar o cadastro. |
| Passos 	|- Acessar o aplicativo. <br> - Clicar no botão "Página de cadastro" <br> - Clicar no botão "Cadastrar voluntário". <br> - Clicar no botão "Excluir voluntário”. |
|Critério de Êxito | - Excluído com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Cadastrar ONG** 	|
|	Requisito Associado 	| RF-006 - O sistema deve permitir que o usuário cadastre sua ONG. |
| Objetivo do Teste 	| Verificar se consegue cadastrar ONG. |
| Passos 	|- Acessar o aplicativo. <br> - Clicar no botão "Página de cadastro" <br> - Clicar no botão "Cadastrar ONG". |
|Critério de Êxito | - ONG cadastrada com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Fazer Login na conta de ONG** 	|
|	Requisito Associado 	| RF-007 - O sistema deve permitir que o usuário efetue login na conta de sua ONG. |
| Objetivo do Teste 	| Verificar se consegue fazer login. |
| Passos 	|- Acessar o aplicativo. <br> - Pressionar o botão “Entrar”. <br> - Preencher os campos de identificação e senha. |
|Critério de Êxito | - A tentativa de login for aceita ou negada caso os dados de login estejam corretos ou incorretos, respectivamente. |
|  	|  	|
| **Caso de Teste** 	| **CT-08 – Mudar dados cadastrais da ONG** 	|
|	Requisito Associado 	| RF-008 - O sistema deve permitir que a ONG mude seus dados cadastrais. |
| Objetivo do Teste 	| Verificar se consegue mudar os dados de cadastro. |
| Passos 	|- Acessar o aplicativo. <br> - Clicar no botão "Página de cadastro" <br> - Clicar no botão "Cadastrar ONG". <br> - Clicar no botão "Editar ONG”. |
|Critério de Êxito | - Editado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-09 – Recuperar senha da ONG** 	|
|	Requisito Associado 	| RF-009 - O sistema deve permitir que a ONG recupere sua senha em caso de esquecimento. |
| Objetivo do Teste 	| Verificar se consegue recuperar a senha. |
| Passos 	|- Acessar o aplicativo. <br> - Pressionar o botão “Esqueci minha senha”. <br> - Preencher os campos de identificação. <br> - Recuperar senha. |
|Critério de Êxito | - Senha recuperada com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-10 – Apagar cadastro da ONG** 	|
|	Requisito Associado 	| RF-010 - O sistema deve permitir que a ONG apague sua conta. |
| Objetivo do Teste 	| Verificar se consegue apagar cadastro da ONG. |
| Passos 	|- Acessar o aplicativo. <br> - Clicar no botão "Página de cadastro" <br> - Clicar no botão "Cadastrar ONG". <br> - Clicar no botão "Excluir ONG”. |
|Critério de Êxito | - Excluído com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-11 – ONG criar vaga para voluntário** 	|
|	Requisito Associado 	| RF-011 - O sistema deve permitir que a ONG crie uma nova vaga para voluntariado. |
| Objetivo do Teste 	| Verificar se a ONG consegue criar uma vaga para o voluntário. |
| Passos 	|- Acessar o aplicativo. <br> - Clicar em "Divulgar vaga". <br> - Preencher os dados. |
|Critério de Êxito | - Vaga criada com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-12 – ONG modificar dados das vagas** 	|
|	Requisito Associado 	| RF-012 - O sistema deve permitir que a ONG modifique os dados de suas vagas. |
| Objetivo do Teste 	| Verificar se a ONG consegue modificar os dados das vagas. |
| Passos 	|- Acessar o aplicativo. <br> - Clicar em "Divulgar vaga". <br> - Preencher os dados. <br> - Clicar em "Editar vaga". |
|Critério de Êxito | - Vaga editada com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-13 – ONG excluir vagas** 	|
|	Requisito Associado 	| RF-013 - O sistema deve permitir que a ONG exclua suas vagas. |
| Objetivo do Teste 	| Verificar se a ONG consegue excluir suas vagas. |
| Passos 	|- Acessar o aplicativo. <br> - Clicar em "Divulgar vaga". <br> - Preencher os dados. <br> - Clicar em "Excluir vaga". |
|Critério de Êxito | - Vaga excluída com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-14 – Voluntário buscar vagas** 	|
|	Requisito Associado 	| RF-014 - O sistema deve permitir que o voluntário busque por vagas de ONGs. |
| Objetivo do Teste 	| Verificar se o voluntário consegue buscar por vagas. |
| Passos 	|- Acessar o aplicativo. <br> - Clicar em "Visualizar vagas". |
|Critério de Êxito | - Aparecerá as vagas disponíveis. |
|  	|  	|
| **Caso de Teste** 	| **CT-15 – Voluntário aplicar para uma ou mais vagas** 	|
|	Requisito Associado 	| RF-015 - O sistema deve permitir que o voluntário aplique para uma ou mais vagas de voluntariado. |
| Objetivo do Teste 	| Verificar se o voluntário consegue aplicar para uma ou mais vagas. |
| Passos 	|- Acessar o aplicativo. <br> - Clicar em "Visualizar vagas". <br> - Clicar em "Candidatar". |
|Critério de Êxito | - Candidatado com sucesso. |
|  	|  	|

