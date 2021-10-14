//CRUD - funções

let botaoAdiciona = $("#cadastro");
let formAluno = $("#form-livro");
let botaoModifica = $("#alterar");

function cadastrar() {
  let livros = localStorage.livros == null ? [] : JSON.parse(localStorage.livros);

  let titulo = $("#titulo").val();
  let autor = $("#autor").val();
  let valor = $("#valor").val();
  let loja = $("#loja").val();

  livros.push({
    titulo: titulo,
    autor: autor,
    valor: valor,
    loja: loja,
    promocao: valor < 50 ? "Livro em promoção" : "Valor acima da média",
  });

  localStorage.livros = JSON.stringify(livros);

  listar();

  alert(`Dado adicionado com sucesso!`);

  formLivros[0].reset();
}

function listar() {
  let livros =
    localStorage.livros == null ? [] : JSON.parse(localStorage.livros);

  let tabela = $("#tbody-livros");
  tabela.html("");
  livros.forEach((dados) => {
    tabela.append(`
            <tr>
                <td>${dados.titulo}</td>
                <td>${dados.autor}</td>
                <td>${dados.valor}</td>
                <td>${dados.loja}</td>
                <td>${dados.promocao}</td>
                <td>
                    <button id="botao-editar" onclick="editar(${dados.titulo})">Editar</button>
                   <!-- <input type="submit" id="botao-editar" value=""Editar /> -->
                    <button id="botao-apagar" onclick="excluir(${dados.titulo})">Excluir</button>
                   <!-- <input type="submit" id="botao-apagar" value="Excluir" /> -->
                </td>  
            </tr>
        `);
  });
}

function editar(doc) {
  let livros =
    localStorage.livros == null ? [] : JSON.parse(localStorage.livros);

  let titulo = $("#tirulo");
  let autor = $("#autor");
  let valor = $("#valor");
  let loja = $("#loja");
  let id = $("#txtId");

  let resultado = livros.find((e) => e.titulo === doc);
  let resultadoIndex = livros.findIndex((e) => e.titulo === doc);

  if (resultado !== undefined) {
    botaoAdiciona.hide();
    botaoModifica.show();

    titulo.val(resultado.titulo);
    autor.val(resultado.autor);
    valor.val(resultado.valor);
    loja.val(resultado.loja);

    id.val(resultadoIndex);
  } else {
    alert("Livro não encontrado!");
  }
}

function modificar() {
  let alunos =
    localStorage.alunos == null ? [] : JSON.parse(localStorage.alunos);

  let aluno = $("#aluno").val();
  let idade = $("#idade").val();
  let serie = $("#serie").val();
  let faltas = $("#faltas").val();
  let id = $("#txtId").val();

  alunos[id].aluno = aluno;
  alunos[id].idade = idade;
  alunos[id].serie = serie;
  alunos[id].faltas = faltas;
  alunos[id].situacao = faltas > 50 ? "Reprovado por faltas" : "Aprovado";

  botaoAdiciona.show();
  botaoModifica.hide();

  localStorage.alunos = JSON.stringify(alunos);

  listar();

  alert("Dados alterados!");

  formAluno[0].reset();
}
