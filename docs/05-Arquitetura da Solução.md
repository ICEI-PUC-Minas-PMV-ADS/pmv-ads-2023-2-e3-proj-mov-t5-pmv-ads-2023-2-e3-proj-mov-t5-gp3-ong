# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

![Diagrama de classes  (2)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-pmv-ads-2023-2-e3-proj-mov-t5-gp3-ong/assets/115049867/3f2888cd-534f-41f9-8d2a-39babd10488e)


## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

### Diagrama ER

![Diagrama Entidade Relacional v1](img/DER%20v1.png)

### Entidades e seus atributos:
- Voluntário
    - ID (Integer, PK)
    - Nome (Text)
    - Email (Text, Unique)
    - Senha (Text)
    - Descrição (Text)
- Ong
    - ID (Integer, PK)
    - Nome (Text)
    - Email (Text, Unique)
    - Senha (Text)
    - Descrição (Text)
- Vaga
    - ID (Integer, PK)
    - ID da Ong (Integer, FK)
    - Inscrito (FK, integer)
    - Título (Text)
    - Descrição (Text)

### Relacionamentos:
- Possuem
    - Ongs possuem vagas
    - 1,n
- Recebem
    - Vagas recebem candidaturas
    - 1,n



## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

O arquivo "banco.sql" contendo as tabelas do sistema foi adicionado a pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

**CARACTERÍSTICA**|**SUBCARACTERÍSTICA**|**JUSTIFICATIVA**|
--------------|-----------------|-------------|
Usabilidade|Inteligibilidade <br> Apreensibilidade <br> Operacionalidade |A proposta do projeto é construir um aplicativo fácil de aprender a operar, através de informações e mensagens, dentre outros meios que garantam o pleno entendimento de como funciona o programa, além de uma interface amigável que permita ao usuário realizar as operações fácil e assertivamente.|
Funcionalidade| Acurácia <br>Conformidade <br>Segurança de Acesso|A aplicação será desenvolvida utilizando a Lei Geral de proteção de dados (LGPD) como base, com a autenticação do usuário através de senha e login. Se comprometendo também a alcançar o atendimento das necessidades do usuário através dos requisitos levantados.|
Portabilidade| Adaptabilidade |Apesar do expressivo número de usuários do sistema Android no mercado, o plano de desenvolvimento desse produto contempla também os usuários do sistema IOS. Além disso, foi considerada a importância de possibilitar a instalação nas duas plataformas de maneira fácil.|
Eficiência| Comportamento em relação ao tempo | A construção do aplicativo se dará observando os aspectos necessários para que o produto final seja uma ferramenta leve, capaz de gerar respostas rápidas às requisições do usuário.|
