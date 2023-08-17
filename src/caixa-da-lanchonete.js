function DinheiroStrategy() {
    this.calculate = () => {
      return 0.5;
    };
  }
  
  function CreditoStrategy() {
    this.calculate = () => {
      return 1.3;
    };
  }
  
  function DebitoStrategy() {
    this.calculate = () => {
      return 1;
    };
  }
  
  const strategyInstances = {
    'dinheiro': new DinheiroStrategy(),
    'credito': new CreditoStrategy(),
    'debito': new DebitoStrategy()
  };
  
  function Pagamento() {
    this.meio = null;
    this.setStrategy = (meio) => {
      this.meio = meio;
    };
    this.calcular = (valor) => {
      if (this.meio !== null) {
        return this.meio.calculate(valor);
      } else {
        console.log("Estratégia de pagamento não definida.");
        return 0;
      }
    };
  }
  
  class PrecoItens {
    constructor() {
      this.precos = {
        "cafe": 3,
        "chantily": 1.50,
        "suco": 6.20,
        "sanduiche": 6.50,
        "queijo": 2.00,
        "salgado": 7.25,
        "combo1": 9.50,
        "combo2": 7.50
      };
    }
  
    getPreco(item) {
      return this.precos[item];
    }
  }
  
  class CaixaDaLanchonete {
    constructor() {
      this.pagamento = new Pagamento();
      this.precoItens = new PrecoItens();
    }
  
    calcularValorDaCompra(metodoDePagamento, itens) {
      if (itens.length === 0) {
        return 'Não há itens no carrinho de compra!';
      }
      const itensSelecionados = {};
      for (const item of itens) {
        const [codigo] = item.split(',');
        const precoItem = this.precoItens.getPreco(codigo);
  
        if (precoItem !== undefined) {
          itensSelecionados[codigo] = true;
          verificarSePodeProdutoExtra(codigo, itensSelecionados);
        } else {
          console.log(`Item '${codigo}' não encontrado na lista de preços.`);
          return 'Item inválido!';
        }
      }
  
      const valorTotal = itens
        .map(item => {
          const [codigo, quantidadeStr] = item.split(',');
          if(quantidadeStr == 0){
            return "Quantidade inválida!"
          }
          const quantidade = parseInt(quantidadeStr);
          return this.precoItens.getPreco(codigo) * quantidade;
        })
        .reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
  
      const tipoPagamento = strategyInstances[metodoDePagamento];
      this.pagamento.setStrategy(tipoPagamento);
  
      try {
        const precoDesconto = this.pagamento.calcular(valorTotal) * valorTotal;
        console.log(`Valor total: R$ ${precoDesconto}`);
        return 'R$ ' + precoDesconto.toFixed(2).replace('.', ',');
      } catch (error) {
  
        return "Forma de pagamento inválida!";
      }
    }
  }
  
  function verificarSePodeProdutoExtra(item, itensSelecionados) {
    if (item === 'chantily' && !itensSelecionados['cafe']) {
      
      return 'Item extra não pode ser pedido sem o principal';
    }
  
    if (item === 'queijo' && !itensSelecionados['sanduiche'] && !itensSelecionados['combo1'] && !itensSelecionados['combo2']) {
      return 'Item extra não pode ser pedido sem o principal';
    }
  }
  
  
  export { CaixaDaLanchonete }