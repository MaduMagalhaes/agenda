const prompt = require("prompt-sync")();

class Contato {
    constructor(nome1, telefone1, email1) {
      this.nome = nome1;
      this.telefone = telefone1;
      this.email = email1;
    }
  
    exibirDetalhes() {
        return `
        Nome: ${this.nome}
        Telefone: ${this.telefone}
        Email: ${this.email}`;
    }
  }


class Agenda_Contatos {
  
    constructor() {
    this.agenda = [];
    }
  
    adicionarContato() {
      const nome1 = prompt("Digite o nome do contato: ");
      const telefone1 = prompt("Digite o telefone do contato: ");
      const email1 = prompt("Digite o email do contato: \n");
      const contato = new Contato(nome1, telefone1, email1);
      this.agenda.push(contato);
    }

    editarContato() {
       const auxilio = this.agenda.filter(contatos => contatos.nome.includes() || contatos.telefone.includes() || contatos.email.includes());
       const novoNome = prompt("Digite o novo nome do contato:");
       const novoTelefone = prompt("Digite o novo telefone do contato:");
       const novoEmail = prompt("Digite o novo email do contato: \n")
       contatos.nome = novoNome;
       contatos.telefone = novoTelefone;
       contatos.email = novoEmail;
    }

    removerContato (nome1) {
      this.agenda = this.agenda.filter(contatos => contatos.nome !== nome1);
      console.log(`O contato nomeado "${nome1}" foi removido da agenda. \n`);
    }
  
    pesquisarContatos(consulta) {
      const resultados = this.agenda.filter(contatos =>
        contatos.nome.includes(consulta) ||
        contatos.telefone.includes(consulta) ||
        contatos.email.includes(consulta));
      return resultados;
    }
  
  }

const contatos = new Agenda_Contatos();
let sair = false;

  while (sair != true) {
    const opcao = Number(prompt(`Funcionalidades: \n 1 - Adicionar novo contato\n 2 - Visualizar a lista de contatos cadastrados de forma organizada\n 3 - Editar os detalhes de um contato existente\n 4 - Excluir um contato da lista\n 5 - Pesquisar contatos por nome\n 6 - Encerrar\n\n `));
  
    switch (opcao) {
      case 1: contatos.adicionarContato(); break;
        
      case 2: console.log(contatos); break;
        
      case 3: contatos.editarContato(); break;
        
      case 4: 
        const contatoRemocao = prompt("Digite o nome do contato para fazer a remoção: ");
        contatos.removerContato(contatoRemocao);
      break;
        
      case 5:
        const consulta = prompt("Digite o nome do contato: ");
        const resultado = contatos.pesquisarContatos(consulta);
        console.log(`Contatos encontrados: \n`);
        resultado.forEach(agenda => {
        console.log(agenda.exibirDetalhes());});
        break;
        
      case 6:
        sair = true;
        break;
        
      default: console.log("Opção inválida!! \n"); break;
        
    }
  }
