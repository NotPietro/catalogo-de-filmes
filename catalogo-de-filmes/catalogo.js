class Filme {
    constructor(nome, classificacao, duracao, genero, anoLancamento, sinopse) {
        this.nome = nome;
        this.classificacao = classificacao;
        this.duracao = duracao;
        this.genero = genero;
        this.anoLancamento = anoLancamento;
        this.sinopse = sinopse;
    }
}

class CatalogoStreaming {
    constructor() {
        this.filmes = [];
    }

    cadastrarFilme(filme) {
        this.filmes.push(filme);
        console.log(`Filme "${filme.nome}" cadastrado com sucesso!`);
    }

    buscarFilme(nome) {
        const filme = this.filmes.find(f => f.nome.toLowerCase() === nome.toLowerCase());
        if (filme) {
            this.exibirDetalhesFilme(filme);
        } else {
            console.log("Filme não encontrado.");
        }
    }

    exibirDetalhesFilme(filme) {
        console.log(`Nome: ${filme.nome}`);
        console.log(`Classificação: ${filme.classificacao}`);
        console.log(`Duração: ${filme.duracao} minutos`);
        console.log(`Gênero: ${filme.genero}`);
        console.log(`Ano de Lançamento: ${filme.anoLancamento}`);
        console.log(`Sinopse: ${filme.sinopse}`);
    }

    listarFilmes() {
        if (this.filmes.length === 0) {
            console.log("Nenhum filme cadastrado.");
            return;
        }
        console.log("Filmes cadastrados:");
        this.filmes.forEach(filme => console.log(`- ${filme.nome}`));
    }

    excluirFilme(nome) {
        const index = this.filmes.findIndex(f => f.nome.toLowerCase() === nome.toLowerCase());
        if (index !== -1) {
            this.filmes.splice(index, 1);
            console.log(`Filme "${nome}" excluído com sucesso!`);
        } else {
            console.log("Filme não encontrado.");
        }
    }
}

const catalogo = new CatalogoStreaming();

function menu() {
    let opcao;
    do {
        console.log("\nMenu:");
        console.log("1. Cadastrar novo filme");
        console.log("2. Buscar filme por nome");
        console.log("3. Exibir todos os filmes cadastrados");
        console.log("4. Excluir filme");
        console.log("5. Sair");
        opcao = parseInt(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                const nome = prompt("Nome do filme:");
                const classificacao = prompt("Classificação indicativa:");
                const duracao = parseInt(prompt("Duração (em minutos):"));
                const genero = prompt("Gênero:");
                const anoLancamento = parseInt(prompt("Ano de lançamento:"));
                const sinopse = prompt("Sinopse:");
                const novoFilme = new Filme(nome, classificacao, duracao, genero, anoLancamento, sinopse);
                catalogo.cadastrarFilme(novoFilme);
                break;
            case 2:
                const nomeBusca = prompt("Digite o nome do filme que deseja buscar:");
                catalogo.buscarFilme(nomeBusca);
                break;
            case 3:
                catalogo.listarFilmes();
                break;
            case 4:
                const nomeExcluir = prompt("Digite o nome do filme que deseja excluir:");
                catalogo.excluirFilme(nomeExcluir);
                break;
            case 5:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 5);
}

// Inicie o menu
menu();
