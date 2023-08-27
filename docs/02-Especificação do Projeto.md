# Especificações do Projeto

A determinação exata do problema, suas personas, requisitos funcionais e não-funcionais foram acordadas em reuniões online entre os membros da equipe. Através de pesquisas e observações, foi possível reunir as informações que auxiliaram na construção de personas e histórias de usuários.


## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem. 

![Persona-Pedro-Silva](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-pmv-ads-2023-2-e3-proj-mov-t5-gp3-ong/assets/106809153/fc609f9f-0628-459e-b7ca-291db7848164)
![Persona-Paula-Matos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-pmv-ads-2023-2-e3-proj-mov-t5-gp3-ong/assets/106809153/939bd2e4-895c-4c73-a023-332ebc20442c)
![Persona-Hugo-Martins](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-pmv-ads-2023-2-e3-proj-mov-t5-gp3-ong/assets/106809153/ad40da55-8b3d-47f2-8dd0-0fb99229eeca)
![Persona-Beatriz-Costa](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-pmv-ads-2023-2-e3-proj-mov-t5-gp3-ong/assets/106809153/06dee28c-187a-4fe5-a015-4b7408c091e2)
![Persona-Renata-Alcantara](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-pmv-ads-2023-2-e3-proj-mov-t5-gp3-ong/assets/106809153/0798291e-2701-443e-9240-e1d822b407c0)


## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários. 

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Hugo Martins        | Encontrar uma ONG que esteja arrecadando dinheiro para realização de projetos ligados ao basquete                   | Para que seja possível incentivar o esporte e apoiar jovens que estejam interessados, tanto no lazer, quanto na carreira.    que possam administrar contas |
|Hugo Martins  | Ser notificado caso tente cadastrar um novo usuário com o mesmo e-mail          | Evitar cadastros duplicados               |
|Hugo Martins  | Acessar regularmente sua conta cadastrada por meio de login           | Evitar cadastros duplicados               |
|Paula Matos   | Cadastrar a ONG Marmitas Solidárias e as vagas em aberto para voluntários interessados em participar da distribuição das marmitas          | Buscar voluntários para apoiar e ampliar as ações do projeto              |
|Paula Matos   | Visualizar o perfil dos candidatos que aplicaram para ocupar as vagas          | Para decidir qual candidatura será aceita                |                |
|Beatriz Costa   | Encerrar sua participação como voluntária quando necessário           | Encerrar formalmente sua participação caso não seja possível prosseguir com o trabalho voluntário 
|Beatriz Costa   | Editar sua participação como voluntária quando necessário           | Editar seus dados e manter o cadastro atualizado|
|Beatriz Costa   | Cadastrar-se para apoiar ONGs  que estejam envolvidas com proteção animal           | Dedicar o tempo livre a causas que despertam o interesse pessoal e ganhar experiência profissional               |
|Hugo Martins  | Ser notificado caso tente cadastrar um novo usuário com o mesmo e-mail          | Evitar cadastros duplicados              |
|Renata Alcântara   | Recuperar o acesso ao site em caso de perda da senha          | Evitar ter que cadastrar um novo usuário e perder o acesso aos registros anteriores               |
|Renata Alcântara   | Cadastrar-se como voluntária para auxiliar estudantes a melhorarem seu desempenho nos estudos          | Elevar as chances de estudantes conseguirem ingressar no ensino superior ou serem aprovados no ano letivo                |
|Pedro Silva   | Cadastrar a ONG e as vagas para encontrar professores que possam ensinar aos alunos que farão o ENEM           | Poder discutir com os amigos e colegas de trabalhos sobre temas de interesse                |
|Pedro Silva   | Cadastrar informações para arrecadação de doações financeiras           | Garantir a manutenção das instalações físicas da escola e proporcionar material didático aos alunos.               |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir que o usuário se cadastre como voluntário | ALTA | 
|RF-002| O sistema deve permitir que o usuário efetue login em sua conta de voluntário | ALTA | 
|RF-003| O sistema deve permitir que o voluntário mude seus dados cadastrais | BAIXA | 
|RF-004| O sistema deve permitir que o voluntário recupere sua senha em caso de esquecimento | MÉDIA | 
|RF-005| O sistema deve permitir que o voluntário apague seu própio cadastro | BAIXA | 
|RF-006| O sistema deve permitir que o usuário cadastre sua ONG | ALTA | 
|RF-007| O sistema deve permitir que o usuário efetue login na conta de sua ONG | ALTA | 
|RF-008| O sistema deve permitir que a ONG mude seus dados cadastrais | MÉDIA |
|RF-009| O sistema deve permitir que a ONG recupere sua senha em caso de esquecimento | MÉDIA | 
|RF-010| O sistema deve permitir que a ONG apague sua conta   | BAIXA |
|RF-011| O sistema deve permitir que a ONG crie uma nova vaga para voluntariado   | ALTA |
|RF-012| O sistema deve permitir que a ONG modifique os dados de suas vagas   | BAIXA |
|RF-013| O sistema deve permitir que a ONG exclua suas vagas   | ALTA |
|RF-014| O sistema deve permitir que o voluntário busque por vagas de ONGs   | ALTA |
|RF-015| O sistema deve permitir que o voluntário aplique para uma ou mais vagas de voluntariado   | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve se adaptar a várias resoluções de tela e tamanhos de dispositivo. | ALTA | 
|RNF-002| O sistema deve carregar rapidamente, sem longos tempos de espera. |  MÉDIA | 
|RNF-003| O sistema deve responder rapidamente aos comandos do usuário. |  ALTA | 
|RNF-004| O sistema deve minimizar o uso de dados móveis, quando possível. |  BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

## Diagrama de Casos de Uso

![Casos de uso coração voluntário](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-pmv-ads-2023-2-e3-proj-mov-t5-gp3-ong/assets/106809153/7427c282-276e-41c2-a961-b59a2373e715)

# Matriz de Rastreabilidade

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-pmv-ads-2023-2-e3-proj-mov-t5-gp3-ong/assets/106809153/e6d86614-966d-4549-8994-369b8ecee1f5)



# Gerenciamento de Projeto

# Gantt Chart Simplificado - Projeto de Aplicação Móvel

| Atividade                      | Duração Estimada | Área          |
|--------------------------------|------------------|---------------|
| Planejamento e Análise         | 2 semanas        | Integração    |
| Definição de Escopo            | 1 semana         | Escopo        |
| Definição de Cronograma        | 1 semana         | Cronograma    |
| Estimativa de Custos           | 1 semana         | Custos        |
| Planejamento de Qualidade      | 1 semana         | Qualidade     |
| Aloc. de Recursos e Equipe     | 2 semanas        | Recursos      |
| Plano de Comunicações          | 1 semana         | Comunicações  |
| Identificação de Riscos        | 1 semana         | Riscos        |
| Planejamento de Aquisições     | 1 semana         | Aquisições    |
| Engajamento de Partes Interess.| 2 semanas        | Partes Int.   |



## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/Diagrama%20de%20Rede%20Simplificado.png)


## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-pmv-ads-2023-2-e3-proj-mov-t5-gp3-ong/blob/46f9b85a0e4ebcc39e1f6c6d64c676875c7ee2db/docs/img/gerenciamento%20de%20equipe.png)

## Gestão de Orçamento

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-pmv-ads-2023-2-e3-proj-mov-t5-gp3-ong/assets/106809153/fd372499-2b17-4ff3-9f48-2eca09ca1b45)

