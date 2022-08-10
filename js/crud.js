$('#atualizar').hide() //Esconder o botão atualizar paramostrar somente quando um usuário for editado
let pessoas = [] //Array com os usuários que serão cadastrados através do input do forms
let atualizar = null

$('<div>').append( // Card-header para criar um card onde ficaram registrados as informações dos usuários
    $('<div>', {class:"col"}),
    $('<div>', {class:"col-6"}).append(
        $('<div>', {class:"card"}).append(
            $('<div>', {
                class:"card-header",
                text: "CRUD com Javascript"
            }).append(
                $('<div>', {class:"card-body"}).append(
                    $('table').append(
                        $('<tbody>').append(
                            $('<tr>').append(
                                $('<td>', {nome}),
                                $('<td>', {idade})
                            )
                        )
                    )
                )
            )
        )
    ),
).appendTo('#formulario')



function obterDados() { //Função para buscar dados pelos id's do forms

    let nome = $("#nome").val()
    let idade = $("#idade").val()

    return {
        nome: nome,
        idade: idade,
    }

}



$("form").on("submit", function (event) { // Função para adicionar usuários
    event.preventDefault()

    let dados = obterDados();
    console.log(pessoas);

    if ($("#adicionar").is(":visible")) {
        pessoas.push(dados);
        console.log("Adicionado");
    } else {

        pessoas[pessoas.indexOf(atualizar)] = dados;
        console.log("Atualizado");
    }

    escreverTabela();
    $('#limpar').click()

})

$('#limpar').on("click", function(){ // Limpar campos digitados sem confirmação, mostrar o botão adicionar e esconder o atualizar.
    $('#adicionar').show()
    $('#atualizar').hide()
})


function escreverTabela() { // Função para escrever a tabela

    $("tbody").empty()

    pessoas.forEach(pessoa => {
        $("tbody").append(
            $("<tr>").append(
                $("<td>", { text: pessoa.nome }),
                $("<td>", { text: pessoa.idade }),
                $("<td>").append(
                    $("<button>", {
                        class: "btn btn-info me-2",
                        text: "Editar",
                        click: function () {
                            atualizar = pessoa
                            $("#nome").val(pessoa.nome)
                            $("#idade").val(pessoa.idade)
                            $("#adicionar").hide()
                            $("#atualizar").show()
                        }
                    }),

                    $('<button>',{ // Botão para deletar algum usuário cadastrado
                        class:"btn btn-danger me-2",
                        text:"Deletar",
                        click: function(){
                            pessoas.splice(pessoas.indexOf(pessoa),1)
                            escreverTabela()
                        }
                    })

                )
            )
        )
    });

}