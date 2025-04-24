/*
 * Atividade 02 - Padrões de Projeto
 * Implementação do padrão Singleton
 * Estudo de caso: 1 (uma) chave e 3 (três) portas
 */

// Classe Chave com Singleton
class Chave {
  static instancia;

  constructor() {
    if (Chave.instancia) {
      return Chave.instancia;
    }
    Chave.instancia = this;
  }
}
// Classe Porta
class Porta {
  constructor(numero) {
    this.numero = numero;
    this.aberta = false;
  }

  abrir(chave) {
    if (chave instanceof Chave) {
      this.aberta = true;
      console.log(`Porta ${this.numero} aberta com sucesso!`);
    } else {
      console.log(`Porta ${this.numero} não pode ser aberta. Chave inválida.`);
    }
  }
}
// Função principal (simulando o main)
function main() {
  const porta1 = new Porta(1);
  const porta2 = new Porta(2);
  const porta3 = new Porta(3);

  const chaveUnica = new Chave();

  porta1.abrir(chaveUnica);
  porta2.abrir(chaveUnica);
  porta3.abrir(chaveUnica);

  // Teste: tentativa de criar nova chave (retorna a mesma)
  const novaChave = new Chave();
  console.log(chaveUnica === novaChave);
}

main();
