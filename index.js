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

    editarContato(contatoEditar1, novoNome1, novoTelefone1, novoEmail1) {
        for (const contato of agenda.lista) {
            if (contato.nome === contatoEditar1) {
                contato.nome = novoNome1;
                contato.telefone = novoTelefone1;
                contato.email = novoEmail1;
            } else {
                console.log("Este contato não foi encontrado!");
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

    editarContato(contatoEditar2, novoNome2, novoTelefone2, novoEmail2, novaEmpresa2) {
            for (const contato of agenda.lista) {
                if (contato.nome === contatoEditar2) {
                    contato.nome = novoNome2;
                    contato.telefone = novoTelefone2;
                    contato.email = novoEmail2;
                    contato.empresa = novaEmpresa2;
                } else {
                    console.log("Este contato não foi encontrado!");
                }
            }
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

    editarContato(contatoEditar3, novoNome3, novoTelefone3, novoEmail3, novaDataNasc3) {
            for (const contato of agenda.lista) {
                if (contato.nome === contatoEditar3) {
                    contato.nome = novoNome3;
                    contato.telefone = novoTelefone3;
                    contato.email = novoEmail3;
                    contato.dataNasc = novaDataNasc3;
                } else {
                    console.log("Este contato não foi encontrado!");
                }
             }
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

    editarContato(contatoEditar4, novoNome4, novoTelefone4, novoEmail4, novoDepartamento4) {
            for (const contato of agenda.lista) {
                if (contato.nome === contatoEditar4) {
                    contato.nome = novoNome4;
                    contato.telefone = novoTelefone4;
                    contato.email = novoEmail4;
                    contato.departamento = novoDepartamento4;
                } else {
                    console.log("Este contato não foi encontrado!");
                }
              }
    }   
}
    
    const op1 = new Contato();
    const op2 = new Cliente();
    const op3 = new Amigo();
    const op4 = new ColegaDeTrabalho();
    const agenda = new AgendaDeContatos();

let sair = false;

  while (sair != true) {
    const opcao = Number(prompt(`Funcionalidades: \n 1 - Adicionar novo contato\n 2 - Adicionar novo contato de cliente\n 3 - Adicionar novo contato de amigo\n 4 - Adicionar novo contato de colega de trabalho\n 5 - Visualizar a lista de contatos cadastrados de forma organizada\n 6 - Editar os detalhes de um contato\n 7 - Editar os detalhes de um contato de um cliente\n 8 - Editar os detalhes de um contato de um amigo\n 9 - Editar os detalhes de um contato de colega de trabalho\n 10 - Excluir um contato da lista\n 11 - Pesquisar contatos por nome\n 12 - Encerrar\n\n`));

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
          const contatoEditar1 = prompt("Digite o nome do contato que deseja editar:");
          const novoNome1 = prompt("Digite o novo nome do contato:");
          const novoTelefone1 = prompt("Digite o novo telefone do contato:");
          const novoEmail1 = prompt("Digite o novo email do contato:");
          op1.editarContato(contatoEditar1, novoNome1, novoTelefone1, novoEmail1);
          //Contato 
        break;

        case 7:
          const contatoEditar2 = prompt("Digite o nome do contato que deseja editar:");
          const novoNome2 = prompt("Digite o novo nome do contato:");
          const novoTelefone2 = prompt("Digite o novo telefone do contato:");
          const novoEmail2 = prompt("Digite o novo email do contato:");
          const novaEmpresa2 = prompt("Digite o novo email do contato:");
          op2.editarContato(contatoEditar2, novoNome2, novoTelefone2, novoEmail2, novaEmpresa2);
          //Cliente
        break;

        case 8:
          const contatoEditar3 = prompt("Digite o nome do contato que deseja editar:");
          const novoNome3 = prompt("Digite o novo nome do contato:");
          const novoTelefone3 = prompt("Digite o novo telefone do contato:");
          const novoEmail3 = prompt("Digite o novo email do contato:");
          const novaDataNasc3 = prompt("Digite a nova data de nascimento do contato:");
          op3.editarContato(contatoEditar3, novoNome3, novoTelefone3, novoEmail3, novaDataNasc3);
          //Amigo
        break;

        case 9:
          const contatoEditar4 = prompt("Digite o nome do contato que deseja editar:");
          const novoNome4 = prompt("Digite o novo nome do contato:");
          const novoTelefone4 = prompt("Digite o novo telefone do contato:");
          const novoEmail4 = prompt("Digite o novo email do contato:");
          const novoDepartamento4 = prompt("Digite o novo email do contato:");
          op4.editarContato(contatoEditar4, novoNome4, novoTelefone4, novoEmail4, novoDepartamento4);
          //Colega de trabalho
        break;

        case 10:
          const contatoRemocao = prompt("Digite o nome do contato que deseja remover: ");
          agenda.removerContato(contatoRemocao);
        break;

        case 11:
          const consulta = prompt("Digite o nome do contato: ");
          const consultar = agenda.pesquisarContatos(consulta);
          console.log(consultar)
        break;

        case 12: sair = true; break;

        default: console.log("Opção inválida!!"); break;
    }
}
