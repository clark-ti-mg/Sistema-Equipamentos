# Sistema de Reserva de Equipamentos – IFSudesteMG – Campus Manhuaçu

## 1. Visão geral

O sistema visa gerenciar reservas de equipamentos institucionais (projetores, notebooks, caixas de som etc.) por servidores, professores e alunos do IFSudesteMG – Campus Manhuaçu, garantindo controle de disponibilidade, rastreabilidade de uso e apoio à gestão administrativa.

## 2. Escopo

- Permitir o cadastro e autenticação de usuários.
- Gerenciar o cadastro e status de equipamentos.
- Permitir consulta de disponibilidade e realização de reservas.
- Registrar retirada e devolução de equipamentos.
- Registrar ocorrências e gerar relatórios simples de utilização.

## 3. Perfis de usuário

- **Aluno**: realiza reservas conforme regras institucionais e consulta suas reservas.
- **Professor/Servidor**: realiza reservas, consulta reservas e pode ter prioridades específicas definidas pela coordenação.
- **Administrador**: gerencia usuários, equipamentos, regras de reserva e acessa relatórios gerenciais.

## 4. Requisitos funcionais (RF)

- **RF01 – Cadastro de usuários**  
  O sistema deve permitir o cadastro e atualização de dados de usuários vinculados ao campus, incluindo tipo de usuário (aluno, professor, servidor, administrador).

- **RF02 – Autenticação**  
  O sistema deve permitir que usuários realizem login para acessar as funcionalidades, conforme seu perfil.

- **RF03 – Cadastro de equipamentos**  
  O sistema deve permitir cadastrar, editar, inativar e visualizar equipamentos, com campos como identificação, descrição, categoria, localização e status.

- **RF04 – Consulta de disponibilidade**  
  O sistema deve permitir que usuários consultem a disponibilidade de equipamentos por data e horário.

- **RF05 – Realizar reserva**  
  O sistema deve permitir que usuários reservem equipamentos, informando período de uso, desde que o equipamento esteja disponível.

- **RF06 – Aprovação/validação de reserva**  
  O sistema deve permitir que um usuário administrador aprove ou rejeite reservas, conforme regras definidas.

- **RF07 – Consulta de reservas do usuário**  
  O sistema deve permitir que cada usuário visualize suas reservas futuras, em andamento e passadas.

- **RF08 – Check-in e check-out**  
  O sistema deve registrar retirada e devolução de equipamentos, com data, horário e responsáveis.

- **RF09 – Cancelamento de reserva**  
  O sistema deve permitir o cancelamento de reservas futuras, atualizando a disponibilidade do equipamento.

- **RF10 – Registro de ocorrências**  
  O sistema deve permitir registrar ocorrências associadas a uma reserva (danos, extravios, problemas técnicos).

- **RF11 – Relatórios gerenciais**  
  O sistema deve gerar relatórios simples de utilização de equipamentos e reservas por período.

- **RF12 – Administração de perfis e permissões**  
  O sistema deve permitir a gestão de perfis e permissões de acesso.

- **RF13 – Histórico de alterações**  
  O sistema deve manter histórico de alterações relevantes em reservas e equipamentos.

## 5. Requisitos não funcionais (RNF)

- **RNF01 – Usabilidade**  
  A interface deve ser simples, responsiva e adequada ao uso em laboratório, secretarias e dispositivos pessoais.

- **RNF02 – Desempenho**  
  As operações principais (login, listagem de equipamentos, criação de reserva) devem responder em até 2 segundos em condições normais.

- **RNF03 – Confiabilidade**  
  O sistema deve impedir reservas conflitantes para o mesmo equipamento no mesmo período.

- **RNF04 – Segurança**  
  O acesso às funcionalidades deve ser controlado por autenticação e autorização por perfil, protegendo dados dos usuários.

- **RNF05 – Registro e rastreabilidade**  
  O sistema deve manter registros de reservas, check-ins/check-outs e ocorrências por período definido pela instituição.

- **RNF06 – Manutenibilidade**  
  O código deve seguir boas práticas (incluindo princípios SOLID) e estar coberto por testes unitários.

- **RNF07 – Portabilidade**  
  O sistema deve poder ser implantado em ambiente de servidor web padrão da instituição ou serviço em nuvem compatível.

- **RNF08 – Auditabilidade**  
  O sistema deve possibilitar extração de dados históricos para auditorias internas e prestação de contas.

## 6. Restrições e considerações

- O sistema deve usar controle de versão no GitHub.
- O desenvolvimento deve contemplar testes unitários e análise de qualidade de código.
- O projeto deve estar alinhado às práticas exigidas para simulação do Nível F do MPS.Br dentro da disciplina.
