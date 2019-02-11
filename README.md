# Desafio Front-Ent

A TOTVS quer lançar um site de leilões. Foi feita uma planning com o time o qual você é integrante e a sprint começou. Suas tarefas são as seguintes:

## Eu, enquanto usuário, quero poder fazer o login na aplicação para acessar a Home utilizando meu usuário e senha previamente fornecidos.

A página de login deve respeitar as seguintes características:

- Validação do formato de e-mail.
- Senha não deve ficar visível enquanto digitada.
- Deve validar o acesso através da API de login fornecida.

Bônus:

Inserir uma opção "Lembrar-me" que, quando marcada no momento do login, consiste as informações do usuário para que ele não precise fazer login toda vez que a tela recarregar.

## Eu, enquanto usuário, dado que já estou autenticado no sistema, quero poder criar um leilão para vender um produto, inserindo as informações do mesmo (nome do produto, foto, preço base, formato de lance).

A página para criar leilão deve ser acessível através de um menu na Home da aplicação e deve respeitar as seguintes características:

- O nome do produto não pode ficar em branco.
- O preço base do produto não pode ficar em branco e deve ser inserido em reais.
- A foto deve ser selecionada da máquina do usuário e deve ter o tamanho máximo de 300 Kb e é opcional.
- O formato de lance pode ser de dois tipos:
  - Lance fixo: O usuário deve digitar um valor para o lance (significa que cada lance dado irá incrementar o valor atual do produto em um valor de lance fixo).
   - Lance livre: O usuário não necessita digitar um valor para o lance (significa que cada lance dado poderá ter qualquer valor desde que seja acima do valor atual do produto).
 
Ao final, o usuário poderá excluir e cancelar a inserção do novo leilão, ou salvar e receber o retorno do back-end sobre o resultado da operação. Em caso de falhas, identificar para o usuário o que precisa ser corrigido.

Caso haja sucesso na operação, o leilão será inserido no formato "rascunho" na lista de leilões do usuário.

## Eu, enquanto usuário, dado que já estou autenticado no sistema e tenho leilões rascunho, quero poder visualizar todos os meus leilões rascunho criados no sistema.

Os leilões rascunho devem ser visualizados em uma lista e em cada leilão deverá ser possível realizar três operações:

- Editar: Permite ao usuário editar as informações do leilão e salvá-lo novamente.
- Excluir: Permite ao usuário excluir permanentemente um leilão. Esta operação é irreversível.
- Ativar: Permite ao usuário tornar um leilão ativo. Após torná-lo ativo, ele permanecerá assim por dois dias até ser finalizado (este processo é controlado pelo back-end).

## Eu, enquanto usuário, dado que já estou autenticado no sistema e tenho leilões ativos, quero poder visualizar todos os meus leilões ativos no sistema e as informações sobre o status atual dos lances.

Os leilões ativos devem ser visualizados em uma lista e cada leilão deverá ser possível visualizar as informações de status atual dos lances: Valor atual, usuário do último lance, tempo para finalização e total de lances recebidos.

O usuário pode apenas visualizar os lances do leilão, não sendo possível alterá-lo enquanto estiver ativo.

Um leilão ativo não pode ser excluído.

O usuário não pode dar lance em seus próprios leilões.

## Eu, enquanto usuário, dado que já estou autenticado no sistema e tenho leilões finalizados, quero poder visualizar todos os meus leilões finalizados no sistema e o resultado do lance vencedor.

Os leilões finalizados devem ser visualizados em uma lista e cada leilão deverá ser possível visualizar as informações do lance vencedor: Valor fechado, usuário vencedor, com quanto tempo de leilão foi feito o lance vencedor e total de lances recebidos.

O usuário pode apenas visualizar o leilão, não sendo possível alterá-lo depois de finalizado.

Um leilão finalizado não pode ser excluído.

## Eu, enquanto usuário, dado que já estou autenticado no sistema e tenho leilões finalizados, quero poder visualizar um relatório gráfico com informações consolidadas sobre um leilão finalizado.

Para cada leilão finalizado, o usuário deverá poder visualizar as seguintes informações:

- Total de lances recebidos
- Evolução do valor final ao longo da duração do leilão
- Diferença entre o preço base e o valor final do leilão
- Usuário vencedor
- Tempo decorrido entre a abertura e o lance vencedor.

## Eu, enquanto usuário, dado que já estou autenticado no sistema e tenho leilões finalizados, quero poder procurar um leilão finalizado que sei o nome, o valor ou a data na lista.

O usuário deverá poder buscar um leilão utilizando os seguintes filtros:

- Seu nome completo ou parte dele
- Um intervalo de datas de quando ele foi iniciado ou finalizado
- Um intervalor de valores para o valor final.

## Eu, enquanto usuário, dado que já estou autenticado no sistema, quero poder visualizar os leilões ativos criados por outros usuários.

O usuário poderá visualizar uma lista com os leilões ativos de outros usuários, para cada leilão, ele pode fazer 2 operações:

- Dar um lance: Dependendo do tipo do leilão, o lance poderá ser fixo ou livre.
- Visualizar informações: Poderá ver o nome, a foto, o preço base, o tempo restante até a finalização, o lance atual e o usuário do lance atual.

## Eu, enquanto usuário, dado que já estou autenticado no sistema, quero poder visualizar os leilões finalizados de outros usuários em que meu lance foi o vencedor.

O usuário deverá poder visualizar o nome do leilão, a foto do produto, o preço base e o valor pago.

## Eu, enquanto usuário, dado que já estou autenticado no sistema e já fiz ao menos um lance em um leilão, quero poder visualizar o relatório de minha participação nos leilões de outros usuários.

O usuário deverá poder visualizar as seguintes informações:
- Total de leilões em que participou
- Total de lances que fez
- Total de lances vencedores
- Somatório dos preços base dos leilões vencidos
- Somatório dos valores pagos dos leilões vencidos




## Algumas orientações:

- O projeto deve ser entregue através de um Pull Request neste próprio repositório.
- No arquivo API.md existe uma explicação de como a API funciona e dos métodos disponíveis.
- No arquivo Mock.md existe uma **sugestão** de layout para as telas propostas.
- O desafio é sobre __interação__, não precisa fazer tudo, basta ir fazendo os pedaços que se sente mais confortável e entregando aos poucos.
- Organize seus commits. Sua utilização do git faz parte do desafio.
