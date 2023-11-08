const prompt = require("prompt-sync")();

class AgendaDeContatos {
    constructor() {
      this.lista = [];
    }

    adicionarContato(contato) {
      this.lista.push(contato);
    }

    pesquisarContatos(consulta) {
      const resultados = this.lista.filter(consultar => consultar.nome === consulta);
      return resultados;
    }

    removerContato (nome1) {
      this.lista = this.lista.filter(remove => remove.nome !== nome1);
      console.log(`O contato nomeado "${nome1}" foi removido da agenda.`);
    }

    exibirLista() {
        console.log(this.lista);
    }

    editarContato(contatoEditar, novoNome, novoTelefone, novoEmail) {
        for (let contato of this.lista) {
         if (contato.nome === contatoEditar) {
             contato.editarContato();
         }
    }
  }
}

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

    editarContato(contatoEditar, novoNome, novoTelefone, novoEmail) {
        for (const contato of agenda.lista) {
            if (contato.nome === contatoEditar) {
                contato.nome = novoNome;
                contato.telefone = novoTelefone;
                contato.email = novoEmail;
            }
        }
    }
}

class Cliente extends Contato {
    constructor (nome1, telefone1, email1, empresa1) {
        super(nome1, telefone1, email1);
        this.empresa = empresa1;
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        return `Empresa: ${this.empresa}`;
    }

    editarContato(novoNome, novoTelefone, novoEmail) {
        super.editarContato(novoNome, novoTelefone, novoEmail);
        const novaEmpresa = prompt("Digite a novo departamento:");
        this.empresa = novaEmpresa;
    }
}

class Amigo extends Contato {
    constructor (nome1, telefone1, email1, dataNasc1) {
        super(nome1, telefone1, email1);
        this.dataNasc = dataNasc1;
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        return `Data de nascimento: ${this.dataNasc}`;
    }

    editarContato(novoNome, novoTelefone, novoEmail) {
        super.editarContato(novoNome, novoTelefone, novoEmail);
        const novaDataNasc = Number(prompt("Digite a nova data de nascimento:"));
        this.dataNasc = novaDataNasc;
    }
}

class ColegaDeTrabalho extends Contato {
    constructor (nome1, telefone1, email1, departamento1) {
        super(nome1, telefone1, email1);
        this.departamento = departamento1;
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        return `Departamento: ${this.departamento}`;
    }

    editarContato(novoNome, novoTelefone, novoEmail) {
        super.editarContato(novoNome, novoTelefone, novoEmail);
        const novoDepartamento = prompt("Digite o novo departamento:");
        this.departamento = novoDepartamento;
    }

}

    const agenda = new AgendaDeContatos();

let sair = false;

  while (sair != true) {
    const opcao = Number(prompt(`Funcionalidades: \n 1 - Adicionar novo contato\n 2 - Adicionar novo contato de cliente\n 3 - Adicionar novo contato de amigo\n 4 - Adicionar novo contato de colega de trabalho\n 5 - Visualizar a lista de contatos cadastrados de forma organizada\n 6 - Editar os detalhes de um contato existente\n 7 - Excluir um contato da lista\n 8 - Pesquisar contatos por nome\n 9 - Encerrar\n\n`));

    switch (opcao) {
        case 1:
          const nome1 = prompt("Digite o nome do contato:");
          const telefone1 = prompt("Digite o telefone do contato:");
          const email1 = prompt("Digite o email do contato:");
          const contato1 = new Contato(nome1, telefone1, email1);
          agenda.adicionarContato(contato1);
        break;

        case 2:
          const nome2 = prompt("Digite o nome do contato:");
          const telefone2 = prompt("Digite o telefone do contato:");
          const email2 = prompt("Digite o email do contato:");
          const empresa1 = prompt("Digite a empresa do contato:");
          const cliente = new Cliente(nome2, telefone2, email2, empresa1);
          agenda.adicionarContato(cliente);
        break;

        case 3:
          const nome3 = prompt("Digite o nome do contato:");
          const telefone3 = prompt("Digite o telefone do contato:");
          const email3 = prompt("Digite o email do contato:");
          const dataNasc1 = prompt("Digite a data de nascimento do contato:");
          const amigo = new Amigo(nome3, telefone3, email3, dataNasc1);
          agenda.adicionarContato(amigo);
        break;

        case 4:
          const nome4 = prompt("Digite o nome do contato:");
          const telefone4 = prompt("Digite o telefone do contato:");
          const email4 = prompt("Digite o email do contato:");
          const departamento1 = prompt("Digite o departamento do contato:");
          const colega = new ColegaDeTrabalho(nome4, telefone4, email4, departamento1)
          agenda.adicionarContato(colega);
        break;

        case 5: agenda.exibirLista(); break;

        case 6:
          const contatoEditar = prompt("Digite o nome do contato que deseja editar:");
          const novoNome = prompt("Digite o novo nome do contato:");
          const novoTelefone = prompt("Digite o novo telefone do contato:");
          const novoEmail = prompt("Digite o novo email do contato:");
          agenda.editarContato(contatoEditar, novoNome, novoTelefone, novoEmail);
        break;

        case 7:
          const contatoRemocao = prompt("Digite o nome do contato que deseja remover: ");
          agenda.removerContato(contatoRemocao);
        break;

        case 8:
          const consulta = prompt("Digite o nome do contato: ");
          const consultar = agenda.pesquisarContatos(consulta);
          console.log(consultar)
        break;

        case 9: sair = true; break;

        default: console.log("Opção inválida!!"); break;
    }
}
