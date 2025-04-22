/*
 * Atividade 01 - Padrões de Projeto
 * Implementação do padrão Strategy para cálculo de imposto
 * Estudo de caso: Imposto para EUA, Brasil e Canada
 */

// Strategy abstrata
class ImpostoStrategy {
  calcular(total) {
    throw new Error("Método calcular() deve ser implementado.");
  }
}

// Concrete Strategy:

// Imposto EUA
class ImpostoEUA extends ImpostoStrategy {
  calcular(total) {
    // 10% de imposto nos EUA
    return total * 0.1;
  }
}

// Imposto Brasil
class ImpostoBrasil extends ImpostoStrategy {
  calcular(total) {
    // ICMS 18% + ISS 5% = 23%
    return total * 0.23;
  }
}

// Imposto Canada
class ImpostoCanada extends ImpostoStrategy {
  calcular(total) {
    // GST 5% + PST 8% = 13%
    return total * 0.13;
  }
}

// Contexto
class PedidoVenda {
  constructor(impostoStrategy) {
    this.impostoStrategy = impostoStrategy;
  }

  setImpostoStrategy(impostoStrategy) {
    this.impostoStrategy = impostoStrategy;
  }

  efetuarVenda(total) {
    const valorImposto = this.impostoStrategy.calcular(total);
    const totalComImposto = total + valorImposto;
    console.log(`Total: $${total.toFixed(2)}`);
    console.log(`Imposto: $${valorImposto.toFixed(2)}`);
    console.log(`Total com imposto: $${totalComImposto.toFixed(2)}`);
    return { total, valorImposto, totalComImposto };
  }
}

// Exemplos de uso:
const pedido = new PedidoVenda(new ImpostoEUA());
pedido.efetuarVenda(1000);

pedido.setImpostoStrategy(new ImpostoBrasil());
pedido.efetuarVenda(1000);

pedido.setImpostoStrategy(new ImpostoCanada());
pedido.efetuarVenda(1000);
