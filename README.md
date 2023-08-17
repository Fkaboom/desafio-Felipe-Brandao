.DinheiroStrategy
Uma classe que define uma estratégia de cálculo de pagamento usando dinheiro.

Métodos:

calculate(): Retorna o fator de cálculo para o pagamento em dinheiro. Retorna 0.5.
CreditoStrategy
Uma classe que define uma estratégia de cálculo de pagamento usando cartão de crédito.

Métodos:

calculate(): Retorna o fator de cálculo para o pagamento com cartão de crédito. Retorna 1.3.
DebitoStrategy
Uma classe que define uma estratégia de cálculo de pagamento usando cartão de débito.

Métodos:

calculate(): Retorna o fator de cálculo para o pagamento com cartão de débito. Retorna 1.
strategyInstances
Um objeto que contém instâncias das estratégias de pagamento, associadas a nomes de métodos de pagamento (como 'dinheiro', 'credito' e 'debito').

Pagamento
Uma classe que lida com a seleção da estratégia de pagamento e realiza cálculos de pagamento.

Métodos:

setStrategy(meio): Define a estratégia de pagamento selecionada.
calcular(valor): Calcula o valor do pagamento usando a estratégia selecionada. Retorna o valor calculado ou 0 se nenhuma estratégia estiver definida.
PrecoItens
Uma classe que define os preços dos itens disponíveis na lanchonete.

Métodos:

getPreco(item): Obtém o preço do item fornecido.
CaixaDaLanchonete
Uma classe que gerencia o processo de calcular o valor da compra na lanchonete.

Métodos:

calcularValorDaCompra(metodoDePagamento, itens): Calcula o valor total da compra com base nos itens selecionados e no método de pagamento escolhido. Retorna o valor total da compra com desconto, ou mensagens de erro se aplicável.
verificarSePodeProdutoExtra
Uma função que verifica se é possível adicionar um item extra ao pedido.

Métodos:

verificarSePodeProdutoExtra(item, itensSelecionados): Verifica se é possível adicionar um item extra ao pedido com base nos itens selecionados anteriormente.
Retorno: Retorna uma mensagem de erro se não for possível adicionar o item extra ou undefined se o item extra puder ser adicionado.

Tentei usar design patterns e clean code, utilizando do principio SOLID e de Strategys, foi bastante desafiador incrementar a mesma, por conta da ausência de interface.Pretendo arrumar a organização do código futuramente, e tentar utilizar de mais strategys para a melhoria dele.